import ShareLocation from "@/modules/locations/share-location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ส่งโลมา | แบ่งปันสถานที่ของฉัน",
  description: "แบ่งปันสถานที่ของฉัน",
};

interface Props {
  params: {
    id: string;
  };
}

export default function ShareLocationPage({ params }: Props) {
  const locationId = params?.id;

  return <ShareLocation locationId={locationId} />;
}
