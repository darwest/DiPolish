export interface IQuizQuestion {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  option: string;
  isCorrect: boolean;
}
