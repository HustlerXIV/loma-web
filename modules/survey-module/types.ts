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
  { value: "18-24", label: "18–24 ปี" },
  { value: "25-29", label: "25–29 ปี" },
  { value: "30-34", label: "30–34 ปี" },
  { value: "35-39", label: "35–39 ปี" },
  { value: "40-44", label: "40–44 ปี" },
  { value: "45-50", label: "45–50 ปี" },
];
