import SurveyModule from "@/modules/survey-module/survey-module";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Song-Loma - Survey",
  description: "แบบสอบถาม",
};

const SurveyPage = () => {
  return <SurveyModule />;
};

export default SurveyPage;
