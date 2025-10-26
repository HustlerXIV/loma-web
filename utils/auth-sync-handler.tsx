"use client";

import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AuthSyncHandler() {
  const { data: session, status, update: updateSession } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const syncedRef = useRef(false);

  useEffect(() => {
    if (pathname.startsWith("/login") || pathname.startsWith("/register"))
      return;
    if (status === "loading") return;

    if (status === "unauthenticated" || !session) {
      console.warn("No valid session or token — redirecting to login");
      router.replace("/login");
      return;
    }

    if (
      session.idToken &&
      !sessionStorage.getItem("appToken") &&
      !syncedRef.current
    ) {
      syncedRef.current = true;
      console.log("🔁 Google user detected — syncing with backend...");

      (async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${session.idToken}`,
              },
            }
          );

          if (!res.ok) throw new Error("Google re-sync failed");

          const data = await res.json();
          sessionStorage.setItem("appToken", data.token);

          await updateSession({
            ...session,
            idToken: data.token,
            accessToken: data.token,
          });
        } catch (err) {
          console.error("Google sync failed:", err);
          await signOut({ callbackUrl: "/login" });
        }
      })();

      return;
    }
  }, [session, status, pathname, router, updateSession]);

  return null;
}
