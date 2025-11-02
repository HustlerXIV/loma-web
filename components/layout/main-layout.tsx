"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import { SessionProvider } from "next-auth/react";
import AuthSyncHandler from "@/utils/auth-sync-handler";
import GlobalModal from "../ui/global-modal";
import GlobalLoader from "../ui/global-loader";
import Navbar from "./nav-bar";
import Footer from "./footer";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const hideNavbar =
    pathname === "/" || pathname === "/login" || pathname === "/register";

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <SessionProvider>
      <AuthSyncHandler />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalModal />
        <GlobalLoader />

        <div className="relative min-h-screen flex flex-col items-center w-full bg-linear-to-r from-[#3E1997] via-[#6C3BD9] to-[#3E1997] bg-[length:200%_200%] animate-gradient">
          <div className="max-w-[600px] w-full relative">
            {/* render only when not /, /login, /register */}
            {!hideNavbar && <Navbar />}

            <div
              data-aos="fade-down"
              className="sticky top-0 z-0 flex flex-col items-center pt-[100px] pb-[120px]"
            >
              <div className="text-white text-5xl font-semibold drop-shadow-xl">
                Song-Loma
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="relative z-10 -mt-20 drop-shadow-2xl"
            >
              <div className="h-4 w-[90%] mx-auto rounded-t-2xl bg-linear-to-r from-[#736EE1] to-[#6C3BD9] animate-gradient" />
              <div
                className="bg-gradient-to-b from-blue-50 to-white rounded-t-2xl p-3 pt-11 min-h-[calc(100vh-120px)]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MainLayout;
