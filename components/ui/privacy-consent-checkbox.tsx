"use client";

import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import Link from "next/link";

interface PrivacyConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Text shown before the policy link. */
  label?: string;
  name?: string;
}

/**
 * PDPA consent checkbox. Unchecked by default (no pre-ticked consent) and
 * links to the full policy so the consent is informed and explicit.
 */
export default function PrivacyConsentCheckbox({
  checked,
  onChange,
  label = "ข้าพเจ้าได้อ่านและยอมรับ",
  name = "privacyConsent",
}: PrivacyConsentCheckboxProps) {
  return (
    <FormControlLabel
      sx={{ alignItems: "flex-start", mt: 1, mr: 0 }}
      control={
        <Checkbox
          name={name}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          sx={{ mt: -1 }}
          inputProps={{ "aria-required": true }}
        />
      }
      label={
        <Typography variant="body2" color="customGray.main">
          {label}{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            นโยบายคุ้มครองข้อมูลส่วนบุคคล
          </Link>{" "}
          และยินยอมให้เก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของข้าพเจ้าตามที่ระบุไว้
          ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
        </Typography>
      }
    />
  );
}
