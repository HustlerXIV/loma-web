"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AuthSyncHandler() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const wroteRef = useRef(false);

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname?.startsWith("/login") ||
      pathname?.startsWith("/register") ||
      pathname?.startsWith("/privacy") ||
      pathname?.startsWith("/redirect")
    ) {
      return;
    }
    if (status === "loading") return;

    if (status === "unauthenticated" || !session) {
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem("appToken");
      }
      router.replace("/login");
      return;
    }

    const appToken = (session as any).accessToken as string | undefined;
    if (typeof window !== "undefined" && appToken) {
      const current = window.sessionStorage.getItem("appToken");
      if (current !== appToken || !wroteRef.current) {
        window.sessionStorage.setItem("appToken", appToken);
        wroteRef.current = true;
      }
    }
  }, [session, status, pathname, router]);

  return null;
}
