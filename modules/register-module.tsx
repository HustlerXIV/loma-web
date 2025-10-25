"use client";

import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DividerWithText from "@/components/ui/divider-with-text";
import PageTitle from "@/components/ui/page-title";
import { useModalStore } from "@/stores/modal-store";
import { withLoader } from "@/utils/with-loader";

export default function RegisterModule() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const open = useModalStore((s) => s.open);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await withLoader(
        () =>
          fetch("/api/backend/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, fullName }),
          }),
        "Saving data..."
      );

      if (!res.ok) throw new Error("Registration failed");

      open({
        type: "success",
        title: "ลงทะเบียนสำเร็จ!",
        description: "ลงทะเบียนสำเร็จ! โปรดเข้าสู่ระบบ",
        onClose: () => (window.location.href = "/login"),
      });
    } catch (err) {
      console.error(err);

      open({
        type: "error",
        title: "เกิดข้อผิดพลาด",
        description: "เกิดข้อผิดพลาดในการลงทะเบียน กรุณาลองใหม่อีกครั้ง",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <PageTitle
        title="Create Account"
        desc="กรุณากรอกข้อมูลเพื่อสมัครสมาชิก"
      />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
        </Button>

        <DividerWithText text="หรือเข้าสู่ระบบด้วย" />

        <div
          onClick={() => (window.location.href = "/login")}
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
          มีบัญชีอยู่แล้ว?{" "}
          <Link href="/login" className="font-bold">
            เข้าสู่ระบบที่นี่
          </Link>
        </Typography>
      </form>
    </Box>
  );
}
