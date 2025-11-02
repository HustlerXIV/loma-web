import { signOut } from "next-auth/react";
import { deleteCookie } from "cookies-next";

export const logout = async () => {
  sessionStorage.removeItem("appToken");
  deleteCookie("app_token");

  await signOut({
    redirect: true,
    callbackUrl: "/login",
  });
};
