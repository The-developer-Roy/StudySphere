"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth(redirectTo = "/login") {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(redirectTo);
    }
  }, [status, router, redirectTo]);

  // ✅ Logout function (redirects to /auth/signin after session clear)
  const logout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return { session, status, logout };
}
