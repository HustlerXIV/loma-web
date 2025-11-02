"use client";

import PageTitle from "@/components/ui/page-title";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function RedirectFailedPage() {
  const router = useRouter();

  const handleBackHome = () => {
    router.push("/");
  };
  return (
    <>
      <PageTitle
        title="QR Code หมดอายุ"
        desc="QR Code หมดอายุ หรือ ถูกใช้งานไปแล้ว"
      />
      <div className="text-center mt-10">
        ไม่สามารถไปที่ Google Maps ได้เนื่องจาก <br /> QR Code หมดอายุ หรือ
        ถูกใช้งานไปแล้ว
        <Button
          variant="contained"
          onClick={handleBackHome}
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          กลับสู่หน้าหลัก
        </Button>
      </div>
    </>
  );
}
