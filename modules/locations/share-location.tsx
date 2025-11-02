"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import PageTitle from "@/components/ui/page-title";
import { withLoader } from "@/utils/with-loader";
import { useModalStore } from "@/stores/modal-store";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface ShareLocationProps {
  locationId?: string;
}

const ShareLocation: React.FC<ShareLocationProps> = ({ locationId }) => {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState("15:00");
  const open = useModalStore((s) => s.open);

  const fetchToken = async () => {
    try {
      const appToken = sessionStorage?.getItem("appToken");
      const res = await withLoader(
        () =>
          fetch(`/api/backend/shareTokens`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${appToken}`,
            },
            body: JSON.stringify({ locationId }),
          }),
        "Loading..."
      );

      const data = await res.json();
      const newLink = `${window.location.origin}/redirect?token=${data?.token}`;
      setName(data?.name);
      setLink(newLink);
      setToken(data?.token);

      if (data?.expiresAt) {
        const exp =
          typeof data.expiresAt === "number"
            ? data.expiresAt * 1000
            : new Date(data.expiresAt).getTime();
        setExpiresAt(exp);
      } else {
        setExpiresAt(Date.now() + 15 * 60 * 1000);
      }
    } catch (err) {
      console.error("Failed to fetch token", err);
    }
  };

  useEffect(() => {
    if (!expiresAt) return;
    const interval = setInterval(() => {
      const diff = expiresAt - Date.now();
      if (diff <= 0) {
        setRemainingTime("Expired");
        clearInterval(interval);
        return;
      }
      const mins = Math.floor(diff / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setRemainingTime(
        `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  useEffect(() => {
    fetchToken();
  }, [locationId]);

  const revokeToken = async () => {
    try {
      const appToken = sessionStorage?.getItem("appToken");
      await withLoader(
        () =>
          fetch(`/api/backend/shareTokens/${token}/revoke`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${appToken}`,
            },
          }),
        "Revoking..."
      );

      open({
        type: "success",
        title: "QR Code ถูกยกเลิกแล้ว",
        description: "QR Code นี้จะไม่สามารถใช้งานได้อีก",
        onClose: () => (window.location.href = "/my-places"),
      });
    } catch (err) {
      console.error("Failed to revoke token", err);
    }
  };

  const handleRevoke = async () => {
    if (!token) return;

    open({
      type: "warning",
      title: "ยกเลิก QR Code",
      description:
        "คุณต้องการยกเลิก QR Code นี้หรือไม่ หากยกเลิกแล้ว QR Code จะไม่สามารถถูกแสกนได้ ไม่ว่าจะเคยถูกแสกนแล้วหรือไม่ก็ตาม",
      onConfirm: () => revokeToken(),
    });
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <PageTitle title={name} desc="แสกน QR Code เพื่อไปยัง Google Maps" />
      <QRCode value={link} size={300} />

      <Typography variant="subtitle2" className={`mt-2 font-bold text-red-600`}>
        {`อายุการใช้งาน QR Code: ${remainingTime} นาที`}
      </Typography>

      <div className="flex gap-3 mt-3">
        <Button
          variant="outlined"
          color="primary"
          sx={{ minWidth: "120px" }}
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => (window.location.href = "/my-places")}
        >
          ย้อนกลับ
        </Button>

        <Button
          onClick={handleRevoke}
          color="error"
          variant="contained"
          size="small"
        >
          ยกเลิก QR Code
        </Button>
      </div>
    </div>
  );
};

export default ShareLocation;
