"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SurveyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          mt: 4,
          mb: 4,
          p: 3,
          borderRadius: "20px",
          background: "linear-gradient(135deg, #6C3BD9 0%, #3E1997 100%)",
          boxShadow: "0 10px 25px rgba(108, 59, 217, 0.3)",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15), transparent 70%)",
            zIndex: 0,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1,
              letterSpacing: 0.5,
              fontFamily: "Kanit, sans-serif",
            }}
          >
            We’d love your feedback!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              opacity: 0.9,
              fontFamily: "Kanit, sans-serif",
            }}
          >
            ช่วยแชร์ความคิดเห็นเพื่อพัฒนา <b>Song-Loma</b> ให้ดียิ่งขึ้น
          </Typography>

          <Link href="/survey" passHref>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #FF9B00, #FF3C00)",
                fontWeight: 600,
                borderRadius: "30px",
                px: 4,
                py: 1.2,
                color: "white",
                "&:hover": {
                  background: "linear-gradient(90deg, #FF3C00, #FF9B00)",
                  transform: "scale(1.03)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Take the Survey
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
}
