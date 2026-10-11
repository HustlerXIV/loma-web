/**
 * Privacy policy metadata used by the privacy page, the registration consent
 * checkbox and the survey consent checkbox. Bump the version whenever the
 * policy text changes so that stored consents can be tied to a version.
 */
export const PRIVACY_POLICY_VERSION = "2.0";
export const PRIVACY_POLICY_EFFECTIVE_DATE = "10 ตุลาคม 2569"; // 10 October 2026
export const PRIVACY_POLICY_EFFECTIVE_DATE_EN = "10 October 2026";

/** Data controller / contact details — change to the real contact before go-live. */
export const DATA_CONTROLLER = {
  nameTh: "โครงการวิจัย Song-Loma (ส่งโลมา) โดย นายณภัทร ธีรนิติชัย",
  nameEn: "Song-Loma Research Project, operated by Napat Theeranitichai",
  affiliationTh:
    "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาการจัดการนวัตกรรมเทคโนโลยีดิจิทัล คณะบริหารธุรกิจ มหาวิทยาลัยเอเชียอาคเนย์",
  affiliationEn:
    "M.Sc. in Management of Digital Technology Innovation, Faculty of Business Administration, Southeast Asia University",
  email: "privacy@song-loma.com", // TODO: replace with a monitored mailbox
  website: "https://song-loma.com",
};

/** Regulator contact (สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล) */
export const PDPC = {
  nameTh: "สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)",
  nameEn: "Office of the Personal Data Protection Committee (PDPC)",
  website: "https://www.pdpc.or.th",
  phone: "02-142-1033",
  email: "pdpc@mdes.go.th",
};

/** Retention periods promised in the policy — keep in sync with backend jobs. */
export const RETENTION = {
  shareTokenMinutes: 15,
  shareTokenRecordDays: 30,
  serverLogDays: 90,
  accountAfterProjectDays: 90,
  surveyYearsAfterPublication: 1,
};
