import MyPlacesModule from "@/modules/locations/my-places";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ส่งโลมา | รายการสถานที่ทั้งหมดของฉัน",
  description: "รายการสถานที่ทั้งหมดของฉัน",
};

const MyPlacesPage = () => {
  return <MyPlacesModule />;
};

export default MyPlacesPage;
