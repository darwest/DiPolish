export type ResultAnswerType = {
  id: number;
  correctAnswer: string;
  inCorrectAnswer: string;
  className: "result-correct" | "result-incorrect";
  type: string;
};
