import RegisterModule from "@/modules/register-module";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ส่งโลมา | สมัครสมาชิก",
  description: "สมัครสมาชิก",
};

const RegisterPage = () => {
  return <RegisterModule />;
};

export default RegisterPage;
