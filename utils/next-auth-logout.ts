import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";

export const logout = async () => {
  deleteCookie("app_token");
  await signOut({ callbackUrl: "/login" });
};
