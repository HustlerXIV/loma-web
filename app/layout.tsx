import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ส่งโลมา | แชร์โลเคชันแบบใช้ครั้งเดียว",
  description:
    "แชร์โลเคชันของคุณอย่างปลอดภัยและง่ายดาย ด้วย QR Code ที่หมดอายุภายใน 15 นาที เพื่อความเป็นส่วนตัวและการควบคุมของคุณ",
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
