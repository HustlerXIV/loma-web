"use client";

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { SurveyChoice } from "./types";

export function Likert5({
  name,
  value,
  onChange,
  required,
}: {
  name: string;
  value?: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <FormControl required={required}>
      <div className="flex items-center justify-between text-[11px] text-gray-500">
        <span>ไม่เห็นด้วยอย่างยิ่ง</span>
        <span>เห็นด้วยอย่างยิ่ง</span>
      </div>
      <RadioGroup
        row
        name={name}
        value={value ?? ""}
        onChange={(_, v) => onChange(v)}
        className="grid grid-cols-5 gap-2 mt-1"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <FormControlLabel
            key={n}
            value={String(n)}
            control={<Radio size="small" />}
            label={<span className="text-xs">{n}</span>}
            className="m-0"
          />
        ))}
      </RadioGroup>
      {required && !value && (
        <FormHelperText error>กรุณาเลือกคำตอบ</FormHelperText>
      )}
    </FormControl>
  );
}

export function NPS11({
  name,
  value,
  onChange,
  required,
}: {
  name: string;
  value?: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <FormControl required={required}>
      <div className="flex items-center justify-between text-[11px] text-gray-500">
        <span>0 ไม่แนะนำเลย</span>
        <span>10 แนะนำมาก</span>
      </div>
      <RadioGroup
        row
        name={name}
        value={value ?? ""}
        onChange={(_, v) => onChange(v)}
        className="grid grid-cols-11 gap-2 mt-1"
      >
        {Array.from({ length: 11 }, (_, i) => i).map((n) => (
          <FormControlLabel
            key={n}
            value={String(n)}
            control={<Radio size="small" />}
            label={<span className="text-[11px]">{n}</span>}
            className="m-0"
          />
        ))}
      </RadioGroup>
      {required && !value && (
        <FormHelperText error>กรุณาเลือกคะแนน</FormHelperText>
      )}
    </FormControl>
  );
}

export function SingleChoice({
  name,
  value,
  onChange,
  required,
  choices,
}: {
  name: string;
  value?: string;
  onChange: (v: string) => void;
  required?: boolean;
  choices: SurveyChoice[];
}) {
  return (
    <FormControl required={required}>
      <RadioGroup
        name={name}
        value={value ?? ""}
        onChange={(_, v) => onChange(v)}
        className="grid gap-2 md:grid-cols-2"
      >
        {choices.map((c) => (
          <FormControlLabel
            key={c.value}
            value={c.value}
            control={<Radio size="small" />}
            label={c.label}
            className="m-0"
          />
        ))}
      </RadioGroup>
      {required && !value && (
        <FormHelperText error>กรุณาเลือกคำตอบ</FormHelperText>
      )}
    </FormControl>
  );
}
