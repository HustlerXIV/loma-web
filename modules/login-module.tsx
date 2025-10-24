"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DividerWithText from "@/components/ui/divider-with-text";
import PageTitle from "@/components/ui/page-title";

export default function LoginModule() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  const handleGoogleLogin = () => signIn("google", { callbackUrl: "/" });

  return (
    <Box>
      <PageTitle title="Welcome" desc="กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ" />

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          เข้าสู่ระบบ
        </Button>

        <DividerWithText text="หรือเข้าสู่ระบบด้วย" />

        <div
          onClick={handleGoogleLogin}
          className="cursor-pointer h-14 border border-gray-400 rounded-sm flex justify-center items-center gap-2 mb-5"
        >
          <Image src="/google-logo.png" alt="Google" width={40} height={40} />
          <Typography fontWeight="bold" color="customGray.main">
            Google
          </Typography>
        </div>
        <Typography
          variant="body1"
          textAlign="center"
          mb={3}
          color="customGray.main"
        >
          ยังไม่มีบัญชี?{" "}
          <Link href="/register" className="font-bold">
            สร้างบัญชีที่นี่
          </Link>
        </Typography>
      </form>
    </Box>
  );
}
