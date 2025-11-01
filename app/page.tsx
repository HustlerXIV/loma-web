"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";

export default function HomePage() {
  const features = [
    {
      title: "One-Time Token",
      desc: "Each QR code generates a short-lived token that cannot be reused — ensuring your privacy and control.",
      icon: <LockIcon sx={{ fontSize: 50, color: "#6B46C1" }} />,
    },
    {
      title: "15-Minute Expiry",
      desc: "Tokens expire automatically to prevent misuse or unwanted tracking after the session.",
      icon: <AccessTimeIcon sx={{ fontSize: 50, color: "#6B46C1" }} />,
    },
    {
      title: "Seamless Sharing",
      desc: "No need to copy links or contacts. Just scan the QR to open Google Maps instantly.",
      icon: <ShareLocationIcon sx={{ fontSize: 50, color: "#6B46C1" }} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <section className="flex flex-col items-center justify-center text-center px-6 pt-2 pb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          One-Time QR Location Sharing
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Share your location securely and easily — each QR code expires in 15
          minutes and can only be used once. Designed for simplicity, privacy,
          and real-world convenience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/login"
            className="px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-2 max-w-6xl mx-auto pb-20">
        {features.map((f) => (
          <motion.div
            key={f.title}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
