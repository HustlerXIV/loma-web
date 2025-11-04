export type QuestionType = "likert_5" | "nps_11" | "text" | "single_choice";

export type SurveyChoice = { value: string; label: string };

export type SurveyQuestion = {
  id: number;
  textQuestion: string;
  questionType: QuestionType;
  isRequired: boolean;
  section: string;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
};

export type AnswerPayload = {
  answers: {
    questionId: number;
    answer: string;
  }[];
};

export type SurveyModuleProps = {
  questionsEndpoint?: string;
  answerEndpoint?: string;
  onSubmitted?: (ok: boolean) => void;
};

export const AGE_CHOICES: SurveyChoice[] = [
  { value: "<20", label: "ต่ำกว่า 20 ปี" },
  { value: "20-29", label: "20–29 ปี" },
  { value: "30-39", label: "30–39 ปี" },
  { value: "40-49", label: "40–49 ปี" },
  { value: "50-59", label: "50–59 ปี" },
  { value: "60+", label: "60 ปีขึ้นไป" },
] as const;
