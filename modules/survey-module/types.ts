export type QuestionType = "likert_5" | "nps_11" | "text";

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
