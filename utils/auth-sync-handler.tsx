"use client";

import { useSession, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthSyncHandler() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.startsWith("/login") || pathname.startsWith("/register"))
      return;
    if (status === "loading") return;

    if (status === "unauthenticated" || !session?.accessToken) {
      console.warn("No valid session or token — redirecting to login");
      router.replace("/login");
      return;
    }

    if (session?.idToken && !session.accessToken) {
      console.log("Google user detected — syncing with backend...");

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.idToken}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Google re-sync failed");
          return res.json();
        })
        .then((data) => {
          console.log("✅ Received backend JWT:", data.token);
          sessionStorage.setItem("appToken", data.token);
        })
        .catch((err) => {
          console.error("Google sync failed:", err);
          signOut({ callbackUrl: "/login" });
        });
      return;
    }

    console.log("✅ Auth in sync with token:", session.accessToken);
  }, [session, status, pathname, router]);

  return null;
}
