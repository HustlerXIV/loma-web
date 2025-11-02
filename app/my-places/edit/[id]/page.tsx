import LocationPickerForm from "@/modules/locations/location-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ส่งโลมา | แก้ไขสถานที่ของฉัน",
  description: "แก้ไขสถานที่ของฉัน",
};

interface Props {
  params: {
    id: string;
  };
}

export default function MyPlacesEditPage({ params }: Props) {
  const locationId = params?.id;

  return <LocationPickerForm locationId={locationId} />;
}
