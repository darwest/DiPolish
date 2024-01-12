import React, { useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { ResultAnswerType } from "../../types/ResultAnswerType";

import ImageWithWords from "../../assets/img/test.jpg";

type WordMatchQuestion = {
  id: number;
  correctAnswer: string;
};

type WordMatchTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};

const WordMatchTest: React.FC<WordMatchTestProps> = ({ onFinish }) => {
  const [wordMatchQuestionsList] = useState<WordMatchQuestion[]>([
    { id: 1, correctAnswer: "Г" },
    { id: 2, correctAnswer: "А" },
    { id: 3, correctAnswer: "З" },
    { id: 4, correctAnswer: "Ж" },
    { id: 5, correctAnswer: "В" },
    { id: 6, correctAnswer: "Є" },
    { id: 7, correctAnswer: "Б" },
    { id: 8, correctAnswer: "Е" },
    { id: 9, correctAnswer: "Д" },
    
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState<Array<string | null>>(
    Array(wordMatchQuestionsList.length).fill(null)
  );
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newAnswer = event.target.value.toUpperCase();
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = newAnswer;
      return newAnswers;
    });
  };

  const handleFinishTest = () => {
    const isAllAnswered = selectedAnswers.every((answer) => answer !== null);
    if (!isAllAnswered) {
      alert("Ви не відповіли на всі питання");
      return;
    }
    setIsConfirmationModalOpen(true);
  };
  const confirmFinishTest = () => {
    const results: Array<ResultAnswerType> = [];
  
    wordMatchQuestionsList.forEach((question, index) => {
      const userAnswer = selectedAnswers[index];
  
      // Ця перевірка гарантує, що userAnswer не є null
      if (userAnswer !== null) {
        const isCorrect = question.correctAnswer === userAnswer;
  
        results.push({
          id: question.id,
          correctAnswer: question.correctAnswer,
          inCorrectAnswer: isCorrect ? "" : userAnswer,
          className: isCorrect ? "result-correct" : "result-incorrect",
          type: "word-match",
        });
      }
    });
  
    onFinish(results);
    setIsConfirmationModalOpen(false); // Закриття модального вікна після завершення тесту
  };
  
  return (
    <div className="test-e">
      <div>
        <img className="test" src={ImageWithWords} alt="Words" />
        <div className="test-word-match-questions">
          {wordMatchQuestionsList.map((question, index) => (
            <div key={question.id} className="test-word-match-text">
              <label htmlFor={`testWordMatch${question.id}`}>{question.id})</label>
              <input
                className="test-word-match-input"
                id={`testWordMatch${question.id}`}
                type="text"
                value={selectedAnswers[index] || ""}
                onChange={(e) => handleAnswerChange(e, index)}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="test-btn-finish" onClick={handleFinishTest}>
        Завершити тест
      </button>

      <MessageModal
        isOpen={isConfirmationModalOpen}
        onRequestClose={() => setIsConfirmationModalOpen(false)}
        contentLabel="Confirmation"
        message="Ви справді готові завершити тест?"
        onConfirm={confirmFinishTest}
        onCancel={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  );
};

export default WordMatchTest;
