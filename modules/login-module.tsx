"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DividerWithText from "@/components/ui/divider-with-text";
import PageTitle from "@/components/ui/page-title";
import { useModalStore } from "@/stores/modal-store";
import LoginIcon from "@mui/icons-material/Login";
import { useLoaderStore } from "@/stores/loader-store";

export default function LoginModule() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const open = useModalStore((s) => s.open);
  const { show, hide } = useLoaderStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    show();
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/my-places",
      });
    } catch (err) {
      open({
        type: "error",
        title: "Login Failed",
        description: "Your email or password is incorrect. Please try again.",
      });
    } finally {
      hide();
    }
  };

  const handleGoogleLogin = () =>
    signIn("google", { callbackUrl: "/my-places" });

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
          variant="filled"
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="filled"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          startIcon={<LoginIcon />}
        >
          เข้าสู่ระบบ
        </Button>

        <DividerWithText text="หรือเข้าสู่ระบบด้วย" />

        <div
          onClick={handleGoogleLogin}
          className="cursor-pointer h-14 border border-gray-400 rounded-sm flex justify-center items-center gap-2 mb-5 hover:border-[#6C3BD9] hover:bg-[#F3E9FF] hover:shadow-sm"
        >
          <Image src="/google-logo.png" alt="Google" width={40} height={40} />
          <Typography fontWeight="bold" color="customGray.main">
            เข้าสู่ระบบด้วย Google
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
