import { Typography } from "@mui/material";
import React from "react";

interface PageTitleProps {
  title?: string;
  desc?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, desc }) => {
  return (
    <div className="w-full wrap-break-word">
      <div
        className="
          text-2xl md:text-3xl font-bold 
          bg-gradient-to-r from-purple-600 to-indigo-600 
          bg-clip-text text-transparent 
          text-center mb-1
        "
      >
        {title}
      </div>
      <Typography
        variant="body1"
        textAlign="center"
        mb={3}
        color="customGray.main"
        style={{ wordWrap: "break-word" }}
      >
        {desc}
      </Typography>
    </div>
  );
};

export default PageTitle;
