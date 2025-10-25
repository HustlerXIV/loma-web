"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import { SessionProvider } from "next-auth/react";
import AuthSyncHandler from "@/utils/auth-sync-handler";
import GlobalModal from "../ui/global-modal";
import GlobalLoader from "../ui/global-loader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SessionProvider>
      <AuthSyncHandler />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalModal />
        <GlobalLoader />
        <div className="relative min-h-screen w-full bg-linear-to-r from-[#3E1997] via-[#6C3BD9] to-[#3E1997] bg-[length:200%_200%] animate-gradient">
          <div className="sticky top-0 z-0 flex flex-col items-center pt-[100px] pb-[120px]">
            <div className="text-white text-5xl font-semibold drop-shadow-xl">
              Loma
            </div>
          </div>

          <div className="relative z-10 -mt-20 drop-shadow-2xl max-w-[600px] mx-auto">
            <div className="h-5 w-[90%] mx-auto rounded-t-2xl bg-linear-to-r from-[#736EE1] to-[#938EF0]" />

            <div
              className="bg-white rounded-t-2xl p-3 pt-11 min-h-[calc(100vh-120px)]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              {children}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MainLayout;
