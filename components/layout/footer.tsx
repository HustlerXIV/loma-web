import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-400 bg-white">
      <div>
        © {new Date().getFullYear()} Song-Loma Project – Independent Study, M.Sc.
        Management of Digital Technology Innovation, Southeast Asia University.
      </div>
      <div className="mt-1">
        <Link href="/privacy" className="underline hover:text-gray-700">
          นโยบายคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
