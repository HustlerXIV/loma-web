"use client";

import { useEffect, useMemo, useState } from "react";
import type { SurveyModuleProps, SurveyQuestion, AnswerPayload } from "./types";
import { Likert5, NPS11 } from "./likert";

import { Button, Divider, FormLabel, TextField } from "@mui/material";
import { withLoader } from "@/utils/with-loader";
import { useModalStore } from "@/stores/modal-store";
import PageTitle from "@/components/ui/page-title";
import { useSession } from "next-auth/react";

const sectionHeader =
  "text-base md:text-lg font-semibold text-gray-800 mb-2 mt-6";
const questionText = "text-sm md:text-base text-gray-800";

export default function SurveyModule({
  questionsEndpoint = "/api/backend/survey/questions",
  answerEndpoint = "/api/backend/survey/answers",
  onSubmitted,
}: SurveyModuleProps) {
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const open = useModalStore((s) => s.open);
  const { data: session, status } = useSession();

  const appToken = sessionStorage?.getItem("appToken");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await withLoader(
          () =>
            fetch(questionsEndpoint, {
              headers: {
                Authorization: `Bearer ${appToken}`,
                "Content-Type": "application/json",
              },
            }),
          "Loading..."
        );

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: SurveyQuestion[] = await res.json();
        if (mounted) {
          const sorted = [...data].sort((a, b) =>
            a.section === b.section
              ? a.displayOrder - b.displayOrder
              : a.section.localeCompare(b.section, "th")
          );
          setQuestions(sorted);
        }
      } catch (e: any) {
        open({
          type: "error",
          title: "Load failed",
          description: "Unable to load survey questions.",
        });
      }
    })();
    return () => {
      mounted = false;
    };
  }, [questionsEndpoint]);

  const grouped = useMemo(() => {
    const map = new Map<string, SurveyQuestion[]>();

    for (const q of questions) {
      if (!map.has(q.section)) map.set(q.section, []);
      map.get(q.section)!.push(q);
    }

    for (const [, qs] of map) {
      qs.sort((a, b) => b.displayOrder - a.displayOrder);
    }

    return Array.from(map.entries()).sort(([a], [b]) =>
      b.localeCompare(a, "th")
    );
  }, [questions]);

  const setField = (qid: number, v: string) =>
    setValues((prev) => ({ ...prev, [String(qid)]: v }));

  const validateRequired = () => {
    const missing = questions.filter(
      (q) => q.isRequired && !values[String(q.id)]
    );
    if (missing.length > 0) {
      open({
        type: "error",
        title: "เกิดข้อผิดพลาด",
        description: "กรุณาตอบคำถามที่จำเป็นให้ครบถ้วน",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateRequired()) return;

    const payload: AnswerPayload = {
      answers: questions.map((q) => ({
        questionId: q.id,
        answer: values[String(q.id)] ?? "",
      })),
    };

    try {
      setSubmitting(true);

      const resp = await withLoader(
        () =>
          fetch(answerEndpoint, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${appToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }),
        "Loading..."
      );

      if (!resp.ok) {
        const txt = await resp.text();
        throw new Error(txt || `HTTP ${resp.status}`);
      }
      open({
        type: "success",
        title: "ส่งแบบประเมินเรียบร้อย",
        description: "ส่งแบบประเมินเรียบร้อย ขอบคุณสำหรับคำตอบ",
      });
      onSubmitted?.(true);
      setValues({});
    } catch (e: any) {
      open({
        type: "error",
        title: "ส่งคำตอบไม่สำเร็จ",
        description: "ส่งคำตอบไม่สำเร็จ",
      });
      onSubmitted?.(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageTitle
        title="แบบประเมินความพึงพอใจการใช้งาน “แชร์โลเคชันแบบใช้ครั้งเดียว”"
        desc="กรุณาตอบตามความเป็นจริง (ใช้เวลาประมาณ 1–2 นาที)"
      />
      <Divider />
      <div>
        {grouped.map(([section, qs], idx) => (
          <div key={section}>
            <h3 className={sectionHeader}>
              {idx + 1}. {section}
            </h3>
            <div className="space-y-4">
              {qs.map((q) => (
                <div key={q.id} className="rounded-lg p-3 md:p-4 bg-gray-50">
                  <FormLabel className={questionText}>
                    {q.textQuestion}
                    {q.isRequired ? (
                      <span className="ml-1 text-red-500">*</span>
                    ) : null}
                  </FormLabel>

                  <div className="mt-2">
                    {q.questionType === "likert_5" && (
                      <Likert5
                        name={`q-${q.id}`}
                        value={values[String(q.id)]}
                        onChange={(v) => setField(q.id, v)}
                        required={q.isRequired}
                      />
                    )}

                    {q.questionType === "nps_11" && (
                      <NPS11
                        name={`q-${q.id}`}
                        value={values[String(q.id)]}
                        onChange={(v) => setField(q.id, v)}
                        required={q.isRequired}
                      />
                    )}

                    {q.questionType === "text" && (
                      <TextField
                        name={`q-${q.id}`}
                        value={values[String(q.id)] ?? ""}
                        onChange={(e) => setField(q.id, e.target.value)}
                        placeholder="พิมพ์ความคิดเห็นของคุณ..."
                        multiline
                        minRows={3}
                        required={q.isRequired}
                        fullWidth
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outlined"
            onClick={() => setValues({})}
            disabled={submitting}
          >
            ล้างคำตอบ
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? "กำลังส่ง..." : "ส่งคำตอบ"}
          </Button>
        </div>
      </div>
    </div>
  );
}
