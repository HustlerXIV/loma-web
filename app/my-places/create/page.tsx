import LocationPickerForm from "@/modules/locations/location-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ส่งโลมา | บันทึกสถานที่ของฉัน",
  description: "บันทึกสถานที่ของฉัน",
};

const MyPlacesCreatePage = () => {
  return <LocationPickerForm />;
};

export default MyPlacesCreatePage;
