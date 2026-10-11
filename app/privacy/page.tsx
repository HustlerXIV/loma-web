import { Metadata } from "next";
import PrivacyPolicyView from "@/modules/privacy/privacy-policy-view";

export const metadata: Metadata = {
  title: "ส่งโลมา | นโยบายคุ้มครองข้อมูลส่วนบุคคล",
  description:
    "นโยบายคุ้มครองข้อมูลส่วนบุคคลของระบบ Song-Loma ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
