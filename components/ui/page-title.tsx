import { Typography } from "@mui/material";
import React from "react";

interface PageTitleProps {
  title?: string;
  desc?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, desc }) => {
  return (
    <div>
      <Typography variant="h5" textAlign="center" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        mb={3}
        color="customGray.main"
      >
        {desc}
      </Typography>
    </div>
  );
};

export default PageTitle;
