"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { withLoader } from "@/utils/with-loader";
import PageTitle from "@/components/ui/page-title";
import { Button } from "@mui/material";

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [manualUrl, setManualUrl] = useState<string>("");

  useEffect(() => {
    if (!token) {
      router.replace("/");
      return;
    }

    const fetchAndRedirect = async () => {
      try {
        const res = await withLoader(
          () =>
            fetch(`/api/backend/redirect/${token}`, {
              headers: {
                "Content-Type": "application/json",
              },
            }),
          "Loading..."
        );

        if (!res.ok) throw new Error("Invalid token");

        const data = await res.json();
        const target =
          data.link && data.link.trim() !== ""
            ? data.link
            : `https://www.google.com/maps?q=${data.latitude},${data.longitude}`;

        setManualUrl(target);

        window.location.href = target;
      } catch (e) {
        console.error(e);

        router.replace("/redirect/failed");
      }
    };

    fetchAndRedirect();
  }, [token, router]);

  const handleManualClick = () => {
    if (manualUrl) {
      window.location.href = manualUrl;
    }
  };

  return (
    <>
      <PageTitle
        title="กำลังนำทางไปยัง Google Maps"
        desc="ระบบกำลังพาท่านไปยังตำแหน่งปลายทาง โปรดรอสักครู่..."
      />
      <div className="text-center mt-10">
        ถ้าหน้าจอไม่เปลี่ยนไปที่ Google Maps อัตโนมัติ <br />
        กรุณากดปุ่ม “Go to Google Maps”
        <Button
          variant="contained"
          onClick={handleManualClick}
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          กดเพื่อเข้าสู่ Google Maps
        </Button>
      </div>
    </>
  );
}
