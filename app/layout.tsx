import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Song-Loma",
  description: "Share your location with safty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
