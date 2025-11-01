// app/privacy/page.tsx
"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-4">
        <strong>
          For Academic Project — Design and Development of a Web Application for
          One-Time Location Sharing via QR Code
        </strong>
      </p>

      <p className="text-gray-700 mb-3">
        This system collects basic personal data including your name, email
        address, and login provider (Google or Local Account). The information
        is used <strong>only for authentication and user identification</strong>{" "}
        to enable access to the system.
      </p>

      <p className="text-gray-700 mb-3">
        The system does <strong>not collect sensitive personal data</strong>{" "}
        such as religion, health, or biometric information. All collected data
        are securely stored and used solely within the scope of this Independent
        Study project.
      </p>

      <p className="text-gray-700 mb-6">
        Data will not be shared with any third party and may be deleted upon
        request after the project is completed.
      </p>

      <p className="text-gray-500 italic mb-10">
        Project Developer: Napat Theeranitichai
      </p>

      <hr className="border-gray-200 my-8" />

      <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        นโยบายความเป็นส่วนตัว (Privacy Policy)
      </h2>

      <p className="text-gray-700 mb-3">
        ระบบนี้จัดเก็บข้อมูลส่วนบุคคลพื้นฐาน ได้แก่ ชื่อ อีเมล
        และผู้ให้บริการเข้าสู่ระบบ (Google หรือบัญชีภายในระบบ)
        ข้อมูลเหล่านี้ถูกใช้เพื่อ <strong>ยืนยันตัวตนของผู้ใช้เท่านั้น</strong>{" "}
        เพื่อให้สามารถเข้าใช้งานระบบได้
      </p>

      <p className="text-gray-700 mb-3">
        ระบบจะไม่เก็บข้อมูลส่วนบุคคลที่มีความอ่อนไหว เช่น ศาสนา สุขภาพ
        หรือข้อมูลชีวภาพ ข้อมูลทั้งหมดจะถูกเก็บไว้อย่างปลอดภัย
        และใช้เฉพาะภายในขอบเขตของโครงงานวิจัย (Independent Study) นี้เท่านั้น
      </p>

      <p className="text-gray-700">
        ข้อมูลจะไม่ถูกเผยแพร่ให้บุคคลภายนอก
        และสามารถขอลบข้อมูลได้เมื่อสิ้นสุดโครงงาน
      </p>
    </div>
  );
}
