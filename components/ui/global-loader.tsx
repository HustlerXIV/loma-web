"use client";

import { useEffect, useState } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import { useLoaderStore } from "@/stores/loader-store";

export default function GlobalLoader() {
  const { isLoading, message } = useLoaderStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) setVisible(true);
    else {
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CircularProgress size={60} sx={{ color: "#6C3BD9" }} />
        {message && (
          <Typography color="white" variant="body1">
            {message}
          </Typography>
        )}
      </Box>
    </div>
  );
}
