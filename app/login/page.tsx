import LoginModule from "@/modules/login-module";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ส่งโลมา | การเข้าสู่ระบบ",
  description: "การเข้าสู่ระบบ",
};

const LoginPage = () => {
  return <LoginModule />;
};

export default LoginPage;
