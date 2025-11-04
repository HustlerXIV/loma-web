import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-400 bg-white">
      © {new Date().getFullYear()} Song-Loma Project – Independent Study,
      Software Engineering.
    </footer>
  );
};

export default Footer;
