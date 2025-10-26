import LocationPickerForm from "@/modules/locations/location-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Loma - Create a new place",
  description: "บันทึกสถานที่ของฉัน",
};

const MyPlacesCreatePage = () => {
  return <LocationPickerForm />;
};

export default MyPlacesCreatePage;
