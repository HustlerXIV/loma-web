import {
  DATA_CONTROLLER,
  PDPC,
  PRIVACY_POLICY_EFFECTIVE_DATE,
  PRIVACY_POLICY_EFFECTIVE_DATE_EN,
  PRIVACY_POLICY_VERSION,
  RETENTION,
} from "@/utils/privacy-policy";

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type PolicySection = { title: string; blocks: PolicyBlock[] };

export type PolicyDocument = {
  lang: "th" | "en";
  title: string;
  subtitle: string;
  meta: string;
  sections: PolicySection[];
};

const C = DATA_CONTROLLER;

/* ------------------------------------------------------------------ */
/* ภาษาไทย                                                             */
/* ------------------------------------------------------------------ */
export const policyTh: PolicyDocument = {
  lang: "th",
  title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
  subtitle:
    "ระบบแชร์โลเคชันแบบใช้ครั้งเดียวผ่านคิวอาร์โค้ด “Song-Loma (ส่งโลมา)”",
  meta: `ฉบับที่ ${PRIVACY_POLICY_VERSION} มีผลบังคับใช้ตั้งแต่วันที่ ${PRIVACY_POLICY_EFFECTIVE_DATE}`,
  sections: [
    {
      title: "1. บทนำ",
      blocks: [
        {
          type: "p",
          text: `${C.nameTh} (${C.affiliationTh}) ในฐานะ “ผู้ควบคุมข้อมูลส่วนบุคคล” ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของท่าน จึงได้จัดทำนโยบายฉบับนี้ขึ้นตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (“พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลฯ” หรือ “PDPA”) เพื่อแจ้งให้ท่านทราบถึงวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย และคุ้มครองข้อมูลส่วนบุคคลของท่านเมื่อท่านใช้บริการเว็บแอปพลิเคชัน Song-Loma (${C.website}) (“ระบบ” หรือ “บริการ”)`,
        },
        {
          type: "p",
          text: "ระบบนี้เป็นส่วนหนึ่งของการค้นคว้าอิสระ (Independent Study) เรื่อง “การออกแบบและพัฒนาเว็บแอปพลิเคชันสำหรับการแชร์โลเคชันแบบใช้ครั้งเดียวผ่านคิวอาร์โค้ด” ซึ่งออกแบบบนหลักการ Privacy by Design และการเก็บข้อมูลเท่าที่จำเป็น (Data Minimisation) คิวอาร์โค้ดและลิงก์ที่ระบบสร้างขึ้นจะไม่บรรจุข้อมูลส่วนบุคคลหรือพิกัดของสถานที่ แต่บรรจุเพียงรหัสอ้างอิงแบบสุ่ม (token) ที่ใช้ได้ครั้งเดียวและหมดอายุภายใน 15 นาทีเท่านั้น",
        },
      ],
    },
    {
      title: "2. คำนิยาม",
      blocks: [
        {
          type: "ul",
          items: [
            "“ข้อมูลส่วนบุคคล” หมายถึง ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ ไม่ว่าทางตรงหรือทางอ้อม แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรมโดยเฉพาะ",
            "“ข้อมูลส่วนบุคคลที่มีความอ่อนไหว” หมายถึง ข้อมูลส่วนบุคคลตามมาตรา 26 แห่ง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลฯ เช่น เชื้อชาติ ศาสนา ข้อมูลสุขภาพ ข้อมูลชีวภาพ",
            "“เจ้าของข้อมูลส่วนบุคคล” หรือ “ท่าน” หมายถึง บุคคลธรรมดาซึ่งเป็นเจ้าของข้อมูลส่วนบุคคลที่ระบบเก็บรวบรวม ได้แก่ ผู้ส่งที่ลงทะเบียน ผู้รับที่สแกนคิวอาร์โค้ด และผู้ตอบแบบสอบถาม",
            "“ผู้ควบคุมข้อมูลส่วนบุคคล” หมายถึง โครงการวิจัย Song-Loma ตามที่ระบุในข้อ 1",
            "“ผู้ประมวลผลข้อมูลส่วนบุคคล” หมายถึง บุคคลหรือนิติบุคคลซึ่งดำเนินการเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของผู้ควบคุมข้อมูลส่วนบุคคล เช่น ผู้ให้บริการโฮสติ้ง",
            "“token” หมายถึง รหัสอ้างอิงแบบสุ่มเชิงเข้ารหัสที่ระบบสร้างขึ้นสำหรับการแชร์สถานที่แต่ละครั้ง ซึ่งไม่สามารถถอดกลับเป็นพิกัดหรือข้อมูลผู้ใช้ได้",
          ],
        },
      ],
    },
    {
      title: "3. ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม",
      blocks: [
        {
          type: "p",
          text: "เราเก็บรวบรวมข้อมูลส่วนบุคคลเท่าที่จำเป็นต่อการให้บริการและการดำเนินงานวิจัยเท่านั้น โดยแบ่งตามประเภทผู้ใช้ดังนี้",
        },
        {
          type: "table",
          head: ["ประเภทข้อมูล", "รายละเอียด", "แหล่งที่มา"],
          rows: [
            [
              "ข้อมูลบัญชีผู้ใช้ (ผู้ส่ง)",
              "ชื่อ-นามสกุล, อีเมล, ผู้ให้บริการเข้าสู่ระบบ (Google หรือบัญชีภายในระบบ), รหัสผ่านในรูปแบบที่ผ่านการแฮชแล้ว (ไม่เก็บรหัสผ่านจริง), วันเวลาที่สมัครและเข้าใช้งาน",
              "ท่านกรอกโดยตรง หรือได้รับจาก Google เมื่อท่านเลือกเข้าสู่ระบบด้วยบัญชี Google (ชื่อ อีเมล และรหัสประจำตัวบัญชี Google เท่านั้น)",
            ],
            [
              "ข้อมูลสถานที่ที่ท่านบันทึก",
              "ชื่อสถานที่ คำอธิบาย และพิกัดละติจูด/ลองจิจูดของสถานที่ที่ท่านเลือกบันทึกไว้ใน “My Places” ซึ่งอาจรวมถึงที่อยู่บ้านหรือที่ทำงานของท่าน",
              "ท่านบันทึกโดยตรง",
            ],
            [
              "ข้อมูลการแชร์ (share token)",
              "รหัส token แบบสุ่ม, สถานที่ที่เชื่อมโยง, เวลาที่สร้าง, เวลาหมดอายุ, เวลาที่ถูกใช้ และสถานะการเพิกถอน",
              "ระบบสร้างขึ้นอัตโนมัติเมื่อท่านกดแชร์",
            ],
            [
              "ข้อมูลของผู้รับ (ผู้สแกนคิวอาร์โค้ด)",
              "ระบบไม่กำหนดให้ผู้รับสมัครสมาชิกหรือระบุตัวตน จะมีเพียงข้อมูลทางเทคนิคของคำขอ (เวลาที่สแกน, หมายเลข IP, ชนิดเบราว์เซอร์) ที่ถูกบันทึกในบันทึกการทำงานของเซิร์ฟเวอร์เพื่อความปลอดภัยเท่านั้น",
              "ระบบบันทึกอัตโนมัติ",
            ],
            [
              "ข้อมูลแบบสอบถามเพื่อการวิจัย",
              "ช่วงอายุ, ความถี่ในการแชร์โลเคชัน, แอปพลิเคชันที่ใช้, คะแนนความพึงพอใจ (Likert และ NPS) และความคิดเห็นปลายเปิด",
              "ท่านกรอกโดยสมัครใจ",
            ],
            [
              "ข้อมูลทางเทคนิคและคุกกี้",
              "คุกกี้สำหรับรักษาสถานะการเข้าสู่ระบบ (session) ซึ่งจำเป็นต่อการทำงานของระบบ, หมายเลข IP, ชนิดอุปกรณ์และเบราว์เซอร์, บันทึกการทำงานของเซิร์ฟเวอร์ (server log)",
              "ระบบบันทึกอัตโนมัติ",
            ],
          ],
        },
        {
          type: "p",
          text: "เราไม่เก็บรวบรวมข้อมูลส่วนบุคคลที่มีความอ่อนไหวตามมาตรา 26 ไม่ติดตามตำแหน่งของท่านแบบต่อเนื่อง (real-time tracking) ไม่เข้าถึง GPS ของอุปกรณ์โดยไม่ได้รับคำสั่งจากท่าน และไม่ใช้คุกกี้เพื่อการโฆษณาหรือการวิเคราะห์พฤติกรรม",
        },
      ],
    },
    {
      title: "4. วัตถุประสงค์และฐานทางกฎหมายในการประมวลผล",
      blocks: [
        {
          type: "table",
          head: ["วัตถุประสงค์", "ข้อมูลที่ใช้", "ฐานทางกฎหมาย"],
          rows: [
            [
              "สร้างบัญชี ยืนยันตัวตน และให้บริการแชร์สถานที่ตามที่ท่านร้องขอ",
              "ข้อมูลบัญชีผู้ใช้, ข้อมูลสถานที่, ข้อมูลการแชร์",
              "ความจำเป็นเพื่อการปฏิบัติตามสัญญาการให้บริการ (มาตรา 24 (3))",
            ],
            [
              "ตรวจสอบความถูกต้องของ token ป้องกันการใช้ซ้ำ ตรวจจับการใช้งานที่ผิดปกติ และรักษาความมั่นคงปลอดภัยของระบบ",
              "ข้อมูลการแชร์, ข้อมูลทางเทคนิคและบันทึกการทำงาน",
              "ประโยชน์โดยชอบด้วยกฎหมายของผู้ควบคุมข้อมูล (มาตรา 24 (5)) ซึ่งได้ชั่งน้ำหนักกับสิทธิของท่านแล้ว",
            ],
            [
              "ศึกษาวิจัยและประเมินความพึงพอใจต่อระบบ เพื่อประกอบการค้นคว้าอิสระและการเผยแพร่ผลงานทางวิชาการในรูปแบบที่ไม่สามารถระบุตัวตนได้",
              "ข้อมูลแบบสอบถาม (ประมวลผลในภาพรวมและไม่ระบุตัวตน)",
              "ความยินยอมของท่าน (มาตรา 19) ซึ่งท่านสามารถถอนได้ทุกเมื่อ และการศึกษาวิจัยที่มีมาตรการคุ้มครองที่เหมาะสม (มาตรา 24 (1))",
            ],
            [
              "ติดต่อท่านเกี่ยวกับบัญชี การตอบสนองต่อคำขอใช้สิทธิ และการแจ้งเปลี่ยนแปลงนโยบาย",
              "ชื่อ, อีเมล",
              "ความจำเป็นเพื่อการปฏิบัติตามสัญญา และการปฏิบัติตามกฎหมาย (มาตรา 24 (6))",
            ],
          ],
        },
        {
          type: "p",
          text: "หากเราจะใช้ข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์อื่นนอกเหนือจากที่ระบุไว้ เราจะแจ้งให้ท่านทราบและขอความยินยอมจากท่านก่อน เว้นแต่กฎหมายอนุญาตให้ดำเนินการได้โดยไม่ต้องขอความยินยอม",
        },
      ],
    },
    {
      title: "5. การเปิดเผยข้อมูลส่วนบุคคลแก่บุคคลภายนอก",
      blocks: [
        {
          type: "p",
          text: "เราไม่ขาย ไม่ให้เช่า และไม่เปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลภายนอกเพื่อวัตถุประสงค์ทางการตลาด เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านเฉพาะแก่บุคคลดังต่อไปนี้",
        },
        {
          type: "ul",
          items: [
            "Google LLC — ในฐานะผู้ให้บริการยืนยันตัวตน (Google Sign-In) เมื่อท่านเลือกเข้าสู่ระบบด้วยบัญชี Google และในฐานะผู้ให้บริการแผนที่ (Google Maps) เมื่อผู้รับสแกนคิวอาร์โค้ด ระบบจะนำผู้รับไปยัง Google Maps พร้อมพิกัดของสถานที่ที่ท่านเลือกแชร์ การใช้งาน Google อยู่ภายใต้นโยบายความเป็นส่วนตัวของ Google",
            "ผู้ให้บริการโครงสร้างพื้นฐานและโฮสติ้ง — Vercel Inc. (ส่วนติดต่อผู้ใช้) และผู้ให้บริการเซิร์ฟเวอร์คลาวด์สำหรับส่วนหลังบ้านและฐานข้อมูล ซึ่งทำหน้าที่เป็นผู้ประมวลผลข้อมูลส่วนบุคคลภายใต้ข้อตกลงการประมวลผลข้อมูล",
            "มหาวิทยาลัยเอเชียอาคเนย์ อาจารย์ที่ปรึกษา และคณะกรรมการสอบ — เฉพาะผลการวิเคราะห์แบบสอบถามในภาพรวมที่ไม่สามารถระบุตัวตนของท่านได้",
            "หน่วยงานของรัฐหรือศาล — เมื่อมีหน้าที่ต้องปฏิบัติตามกฎหมาย คำสั่งศาล หรือคำสั่งของหน่วยงานที่มีอำนาจ",
          ],
        },
        {
          type: "p",
          text: "ผู้รับที่สแกนคิวอาร์โค้ดจะได้รับเฉพาะพิกัดของสถานที่ที่ท่านตั้งใจแชร์เพียงครั้งเดียวเท่านั้น จะไม่ได้รับชื่อ อีเมล หรือรายการสถานที่อื่นของท่าน",
        },
      ],
    },
    {
      title: "6. การส่งหรือโอนข้อมูลส่วนบุคคลไปต่างประเทศ",
      blocks: [
        {
          type: "p",
          text: "ผู้ให้บริการบางรายตามข้อ 5 (เช่น Google และ Vercel) อาจจัดเก็บหรือประมวลผลข้อมูลบนเซิร์ฟเวอร์ที่ตั้งอยู่นอกประเทศไทย ในกรณีดังกล่าว เราจะดำเนินการให้มั่นใจว่าการส่งหรือโอนข้อมูลเป็นไปตามมาตรา 28 และมาตรา 29 แห่ง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลฯ โดยเลือกใช้ผู้ให้บริการที่มีมาตรฐานการคุ้มครองข้อมูลที่เพียงพอและมีข้อสัญญามาตรฐานในการคุ้มครองข้อมูลส่วนบุคคล",
        },
      ],
    },
    {
      title: "7. ระยะเวลาในการเก็บรักษาข้อมูลส่วนบุคคล",
      blocks: [
        {
          type: "table",
          head: ["ประเภทข้อมูล", "ระยะเวลาเก็บรักษา"],
          rows: [
            [
              "ข้อมูลบัญชีผู้ใช้และสถานที่ที่บันทึก",
              `ตลอดระยะเวลาที่ท่านยังใช้บริการ และจะถูกลบภายใน 30 วันนับจากวันที่ท่านลบบัญชีหรือแจ้งขอให้ลบ หรือภายใน ${RETENTION.accountAfterProjectDays} วันนับจากวันสิ้นสุดโครงการวิจัย แล้วแต่กรณีใดจะถึงก่อน`,
            ],
            [
              "share token",
              `token ใช้งานได้ ${RETENTION.shareTokenMinutes} นาทีนับจากเวลาที่สร้าง และใช้ได้เพียงครั้งเดียว ระเบียนของ token จะถูกเก็บไว้ไม่เกิน ${RETENTION.shareTokenRecordDays} วันหลังหมดอายุเพื่อการตรวจสอบความปลอดภัย จากนั้นจะถูกลบ`,
            ],
            [
              "บันทึกการทำงานของเซิร์ฟเวอร์และข้อมูลทางเทคนิค",
              `ไม่เกิน ${RETENTION.serverLogDays} วัน`,
            ],
            [
              "ข้อมูลแบบสอบถามเพื่อการวิจัย",
              `เก็บในรูปแบบที่ไม่สามารถระบุตัวตนได้ตลอดระยะเวลาโครงการวิจัย และไม่เกิน ${RETENTION.surveyYearsAfterPublication} ปีนับจากวันเผยแพร่ผลงานทางวิชาการ เพื่อการตรวจสอบความถูกต้องของผลการวิจัย`,
            ],
          ],
        },
        {
          type: "p",
          text: "เมื่อพ้นระยะเวลาดังกล่าว เราจะลบหรือทำลายข้อมูลส่วนบุคคล หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวบุคคลได้",
        },
      ],
    },
    {
      title: "8. มาตรการรักษาความมั่นคงปลอดภัย",
      blocks: [
        {
          type: "p",
          text: "เราจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยที่เหมาะสมทั้งด้านองค์กร ด้านเทคนิค และด้านกายภาพ ตามมาตรา 37 (1) แห่ง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลฯ และประกาศที่เกี่ยวข้อง ได้แก่",
        },
        {
          type: "ul",
          items: [
            "เข้ารหัสการรับส่งข้อมูลทุกเส้นทางด้วย HTTPS/TLS",
            "สร้าง token ด้วยตัวเลขสุ่มเชิงเข้ารหัส (cryptographically secure random) ซึ่งไม่สามารถคาดเดาหรือถอดกลับเป็นพิกัดได้ และบังคับการหมดอายุและการใช้ครั้งเดียวที่ฝั่งเซิร์ฟเวอร์",
            "เก็บรหัสผ่านในรูปแบบที่ผ่านการแฮชแล้วเท่านั้น และควบคุมการเข้าถึง API ด้วย JSON Web Token (JWT)",
            "จัดเก็บข้อมูลลับของระบบ (เช่น กุญแจเข้ารหัส รหัสผ่านฐานข้อมูล) แยกจากซอร์สโค้ดและจำกัดผู้มีสิทธิเข้าถึง",
            "จำกัดสิทธิการเข้าถึงฐานข้อมูลเฉพาะผู้พัฒนาที่ได้รับมอบหมาย และบันทึกการเข้าถึงเพื่อการตรวจสอบ",
            "ในกรณีที่เกิดเหตุละเมิดข้อมูลส่วนบุคคลที่มีความเสี่ยงต่อสิทธิและเสรีภาพของท่าน เราจะแจ้งสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลภายใน 72 ชั่วโมงนับแต่ทราบเหตุ และแจ้งให้ท่านทราบตามที่กฎหมายกำหนด",
          ],
        },
      ],
    },
    {
      title: "9. สิทธิของเจ้าของข้อมูลส่วนบุคคล",
      blocks: [
        {
          type: "p",
          text: "ภายใต้ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลฯ ท่านมีสิทธิดังต่อไปนี้",
        },
        {
          type: "ul",
          items: [
            "สิทธิในการถอนความยินยอม (มาตรา 19) — ท่านสามารถถอนความยินยอมที่ให้ไว้สำหรับการใช้ข้อมูลแบบสอบถามเพื่อการวิจัยได้ทุกเมื่อ โดยไม่กระทบต่อการประมวลผลที่ได้ดำเนินการไปแล้วโดยชอบ",
            "สิทธิในการเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคล (มาตรา 30)",
            "สิทธิในการขอให้โอนย้ายข้อมูลส่วนบุคคล (มาตรา 31) ในรูปแบบที่อ่านได้ด้วยเครื่อง",
            "สิทธิในการคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล (มาตรา 32)",
            "สิทธิในการขอให้ลบหรือทำลายข้อมูลส่วนบุคคล (มาตรา 33) — ท่านสามารถลบสถานที่ที่บันทึกไว้ได้ด้วยตนเองในหน้า “My Places” และขอลบบัญชีทั้งหมดได้ตามช่องทางในข้อ 13",
            "สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคล (มาตรา 34)",
            "สิทธิในการขอให้แก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง เป็นปัจจุบัน และสมบูรณ์ (มาตรา 35)",
            "สิทธิในการร้องเรียนต่อคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (มาตรา 73) หากท่านเห็นว่าเราฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมาย",
          ],
        },
        {
          type: "p",
          text: "ท่านสามารถใช้สิทธิได้โดยติดต่อตามช่องทางในข้อ 13 เราจะดำเนินการตามคำขอภายใน 30 วันนับจากวันที่ได้รับคำขอและเอกสารยืนยันตัวตนครบถ้วน ทั้งนี้ เราอาจปฏิเสธคำขอได้ในกรณีที่กฎหมายกำหนด และจะแจ้งเหตุผลให้ท่านทราบ",
        },
      ],
    },
    {
      title: "10. คุกกี้และเทคโนโลยีที่คล้ายคลึงกัน",
      blocks: [
        {
          type: "p",
          text: "ระบบใช้คุกกี้ที่จำเป็นอย่างยิ่ง (strictly necessary cookies) เพื่อรักษาสถานะการเข้าสู่ระบบและป้องกันการปลอมแปลงคำขอเท่านั้น คุกกี้ดังกล่าวจะถูกลบเมื่อท่านออกจากระบบหรือเมื่อหมดอายุ เราไม่ใช้คุกกี้เพื่อการโฆษณา การติดตามข้ามเว็บไซต์ หรือการวิเคราะห์พฤติกรรม ท่านสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้ได้ แต่อาจทำให้ไม่สามารถเข้าสู่ระบบได้",
        },
      ],
    },
    {
      title: "11. ข้อมูลส่วนบุคคลของผู้เยาว์",
      blocks: [
        {
          type: "p",
          text: "บริการนี้มีไว้สำหรับผู้ที่มีอายุ 20 ปีบริบูรณ์ขึ้นไป หากท่านเป็นผู้เยาว์ การให้ความยินยอมต้องได้รับความยินยอมจากผู้ใช้อำนาจปกครองตามมาตรา 20 แห่ง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคลฯ หากเราทราบว่าได้เก็บรวบรวมข้อมูลของผู้เยาว์โดยไม่ได้รับความยินยอมดังกล่าว เราจะลบข้อมูลนั้นโดยเร็ว",
        },
      ],
    },
    {
      title: "12. การเปลี่ยนแปลงนโยบาย",
      blocks: [
        {
          type: "p",
          text: "เราอาจทบทวนและปรับปรุงนโยบายฉบับนี้เป็นครั้งคราวเพื่อให้สอดคล้องกับกฎหมายและการให้บริการ การเปลี่ยนแปลงที่มีนัยสำคัญจะแจ้งให้ท่านทราบผ่านหน้าเว็บไซต์หรืออีเมลก่อนมีผลบังคับใช้ โปรดตรวจสอบเลขที่ฉบับและวันที่มีผลบังคับใช้ที่ด้านบนของเอกสารนี้",
        },
      ],
    },
    {
      title: "13. ช่องทางการติดต่อ",
      blocks: [
        {
          type: "ul",
          items: [
            `ผู้ควบคุมข้อมูลส่วนบุคคล: ${C.nameTh}`,
            `สังกัด: ${C.affiliationTh}`,
            `อีเมลสำหรับเรื่องข้อมูลส่วนบุคคล: ${C.email}`,
            `เว็บไซต์: ${C.website}`,
          ],
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* English                                                             */
/* ------------------------------------------------------------------ */
export const policyEn: PolicyDocument = {
  lang: "en",
  title: "Personal Data Protection Policy",
  subtitle:
    "Song-Loma — One-Time Location Sharing via QR Code",
  meta: `Version ${PRIVACY_POLICY_VERSION}, effective ${PRIVACY_POLICY_EFFECTIVE_DATE_EN}`,
  sections: [
    {
      title: "1. Introduction",
      blocks: [
        {
          type: "p",
          text: `${C.nameEn} (${C.affiliationEn}), acting as the data controller, has issued this policy under Thailand's Personal Data Protection Act B.E. 2562 (2019) (“PDPA”) to explain how we collect, use, disclose and protect your personal data when you use the Song-Loma web application (${C.website}) (the “Service”).`,
        },
        {
          type: "p",
          text: "The Service is part of an Independent Study entitled “Design and Development of a Web Application for One-Time Location Sharing via QR Code”. It is built on the principles of Privacy by Design and data minimisation: the QR codes and links generated by the Service never contain personal data or location coordinates, only a cryptographically random, single-use reference token that expires within 15 minutes.",
        },
      ],
    },
    {
      title: "2. Definitions",
      blocks: [
        {
          type: "ul",
          items: [
            "“Personal data” means any information relating to a natural person which enables that person to be identified, directly or indirectly.",
            "“Sensitive personal data” means personal data under Section 26 of the PDPA, such as race, religion, health or biometric data.",
            "“Data subject” or “you” means the natural person whose personal data is collected: a registered sender, a receiver who scans a QR code, or a survey respondent.",
            "“Data processor” means a person or entity that processes personal data on behalf of the controller, such as a hosting provider.",
            "“Token” means the cryptographically random reference generated for each share, which cannot be reversed into coordinates or user data.",
          ],
        },
      ],
    },
    {
      title: "3. Personal data we collect",
      blocks: [
        {
          type: "table",
          head: ["Category", "Details", "Source"],
          rows: [
            [
              "Account data (sender)",
              "Full name, email address, login provider (Google or local account), password stored only as a hash, registration and sign-in timestamps",
              "Provided by you, or received from Google when you sign in with Google (name, email and Google account identifier only)",
            ],
            [
              "Saved locations",
              "Place name, description and latitude/longitude of places you save in “My Places”, which may include your home or workplace",
              "Provided by you",
            ],
            [
              "Share data (share tokens)",
              "Random token, linked place, creation time, expiry time, time of use and revocation status",
              "Generated automatically when you share",
            ],
            [
              "Receiver data (QR scanner)",
              "Receivers are not required to register or identify themselves. Only technical request data (scan time, IP address, browser type) is written to server logs for security purposes",
              "Collected automatically",
            ],
            [
              "Research survey data",
              "Age range, location-sharing frequency, apps used, satisfaction scores (Likert and NPS) and open-ended comments",
              "Provided voluntarily by you",
            ],
            [
              "Technical data and cookies",
              "Strictly necessary session cookies, IP address, device and browser type, server logs",
              "Collected automatically",
            ],
          ],
        },
        {
          type: "p",
          text: "We do not collect sensitive personal data under Section 26, do not track your position continuously, do not access your device's GPS without your action, and do not use advertising or behavioural-analytics cookies.",
        },
      ],
    },
    {
      title: "4. Purposes and legal bases",
      blocks: [
        {
          type: "table",
          head: ["Purpose", "Data used", "Legal basis"],
          rows: [
            [
              "Create your account, authenticate you and provide the location-sharing service you request",
              "Account data, saved locations, share data",
              "Performance of a contract (Section 24 (3))",
            ],
            [
              "Validate tokens, prevent reuse, detect abuse and keep the Service secure",
              "Share data, technical data and logs",
              "Legitimate interests of the controller (Section 24 (5)), balanced against your rights",
            ],
            [
              "Conduct research and evaluate user satisfaction for the Independent Study and academic publication in anonymised form",
              "Survey data (aggregated and anonymised)",
              "Your consent (Section 19), which you may withdraw at any time; research with appropriate safeguards (Section 24 (1))",
            ],
            [
              "Contact you about your account, respond to rights requests and notify policy changes",
              "Name, email",
              "Performance of a contract; compliance with legal obligations (Section 24 (6))",
            ],
          ],
        },
      ],
    },
    {
      title: "5. Disclosure to third parties",
      blocks: [
        {
          type: "p",
          text: "We do not sell, rent or disclose your personal data to third parties for marketing. We may disclose personal data only to:",
        },
        {
          type: "ul",
          items: [
            "Google LLC — as identity provider (Google Sign-In) when you choose to sign in with Google, and as map provider (Google Maps) when a receiver scans a QR code and is redirected to Google Maps with the coordinates of the place you chose to share. Google's own privacy policy applies.",
            "Infrastructure and hosting providers — Vercel Inc. (front end) and the cloud server provider for the back end and database, acting as data processors under data-processing terms.",
            "Southeast Asia University, the advisor and the examination committee — aggregated, anonymised survey results only.",
            "Government authorities or courts — where required by law or a lawful order.",
          ],
        },
        {
          type: "p",
          text: "A receiver who scans your QR code obtains only the coordinates of the single place you intended to share, once. They never receive your name, email or other saved places.",
        },
      ],
    },
    {
      title: "6. Cross-border transfers",
      blocks: [
        {
          type: "p",
          text: "Some providers in Section 5 (e.g. Google and Vercel) may store or process data on servers outside Thailand. We ensure such transfers comply with Sections 28 and 29 of the PDPA by using providers with adequate data-protection standards and standard contractual safeguards.",
        },
      ],
    },
    {
      title: "7. Retention",
      blocks: [
        {
          type: "table",
          head: ["Category", "Retention period"],
          rows: [
            [
              "Account data and saved locations",
              `For as long as you use the Service; deleted within 30 days after you delete your account or request deletion, or within ${RETENTION.accountAfterProjectDays} days after the research project ends, whichever is earlier`,
            ],
            [
              "Share tokens",
              `Valid for ${RETENTION.shareTokenMinutes} minutes from creation and usable once; token records are kept for at most ${RETENTION.shareTokenRecordDays} days after expiry for security auditing, then deleted`,
            ],
            ["Server logs and technical data", `At most ${RETENTION.serverLogDays} days`],
            [
              "Research survey data",
              `Kept in anonymised form for the duration of the research project and no longer than ${RETENTION.surveyYearsAfterPublication} year after academic publication, to allow verification of results`,
            ],
          ],
        },
      ],
    },
    {
      title: "8. Security measures",
      blocks: [
        {
          type: "ul",
          items: [
            "All traffic is encrypted with HTTPS/TLS.",
            "Tokens are generated from cryptographically secure random numbers, cannot be guessed or reversed into coordinates, and expiry and single use are enforced server-side.",
            "Passwords are stored only as hashes; API access is controlled with JSON Web Tokens (JWT).",
            "System secrets (keys, database credentials) are kept outside the source code with restricted access.",
            "Database access is limited to authorised developers and logged for auditing.",
            "In the event of a personal-data breach likely to pose a risk to your rights and freedoms, we will notify the PDPC within 72 hours of becoming aware of it and inform you as required by law.",
          ],
        },
      ],
    },
    {
      title: "9. Your rights",
      blocks: [
        {
          type: "ul",
          items: [
            "Withdraw consent (Section 19) — you may withdraw consent for research use of your survey data at any time, without affecting processing already lawfully carried out.",
            "Access and obtain a copy of your personal data (Section 30).",
            "Data portability in a machine-readable format (Section 31).",
            "Object to collection, use or disclosure (Section 32).",
            "Erasure (Section 33) — you can delete saved places yourself in “My Places” and request full account deletion via Section 13.",
            "Restriction of processing (Section 34).",
            "Rectification (Section 35).",
            "Lodge a complaint with the Personal Data Protection Committee (Section 73).",
          ],
        },
        {
          type: "p",
          text: "We will respond to a rights request within 30 days of receiving the request and sufficient proof of identity. We may refuse a request where the law permits and will explain the reason.",
        },
      ],
    },
    {
      title: "10. Cookies",
      blocks: [
        {
          type: "p",
          text: "The Service uses strictly necessary cookies only, to maintain your signed-in session and protect against request forgery. They are removed when you sign out or when they expire. We do not use advertising, cross-site tracking or behavioural-analytics cookies. You may block cookies in your browser, but you will then be unable to sign in.",
        },
      ],
    },
    {
      title: "11. Minors",
      blocks: [
        {
          type: "p",
          text: "The Service is intended for persons aged 20 or over. If you are a minor, consent must be given by a person exercising parental authority under Section 20 of the PDPA. If we learn that we have collected a minor's data without such consent, we will delete it promptly.",
        },
      ],
    },
    {
      title: "12. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this policy from time to time. Material changes will be announced on the website or by email before they take effect. Please check the version number and effective date at the top of this document.",
        },
      ],
    },
    {
      title: "13. Contact",
      blocks: [
        {
          type: "ul",
          items: [
            `Data controller: ${C.nameEn}`,
            `Affiliation: ${C.affiliationEn}`,
            `Privacy contact: ${C.email}`,
            `Website: ${C.website}`,
          ],
        },
        {
          type: "p",
          text: `Complaints may be lodged with the ${PDPC.nameEn}: ${PDPC.website}, tel. ${PDPC.phone}, ${PDPC.email}.`,
        },
      ],
    },
  ],
};
