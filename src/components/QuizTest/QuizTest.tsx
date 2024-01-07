import { useEffect, useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { IQuizQuestion } from "../../types/IQuizQuestion";
import { ResultAnswerType } from "../../types/ResultAnswerType";

type QuizTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};

const QuizTest = ({ onFinish }: QuizTestProps) => {
  const [quizQuestionsList] = useState<IQuizQuestion[]>([
    {
      "id": 1,
      "question": "Виберіть слово, що означає «добрий день!»",
      "answers": [
        { "option": "A. Dżień dobry!", "isCorrect": false },
        { "option": "B. Dzień dobry!", "isCorrect": true },
        { "option": "B. Dźień dobry ", "isCorrect": false },
        { "option": "Г. Dzień dobru! ", "isCorrect": false }
      ]
    },
    {
      "id": 2,
      "question": "Як польською буде «доброго ранку!»?",
      "answers": [
        { "option": "A. Dobrego poranku!", "isCorrect": false },
        { "option": "Б. Dobrego ranku!", "isCorrect": false },
        { "option": "В. Dzień dobry!", "isCorrect": true },
        { "option": "Г. Miłego dnia!", "isCorrect": false }
      ]
    },
    {
      "id": 3,
      "question": "Як польською буде «привіт!»",
      "answers": [
        { "option": "A. Dzień dobry!", "isCorrect": false },
        { "option": "Б. Cześć!", "isCorrect": true },
        { "option": "В. Do jutra!", "isCorrect": false },
        { "option": "Г. Część!", "isCorrect": false }
      ]
    },
    {
      "id": 4,
      "question": "Що означає слово «cześć!»",
      "answers": [
        { "option": "А. Бувай!", "isCorrect": false },
        { "option": "Б. Привіт!", "isCorrect": false },
        { "option": "В. Привіт і бувай!", "isCorrect": true },
        { "option": "Г. До побачення!", "isCorrect": false }
      ]
    },
    {
      "id": 5,
      "question": "Як запитати правильно: «як у вас справи?»",
      "answers": [
        { "option": "A. Jak się masz?", "isCorrect": false },
        { "option": "Б. Co słychać?", "isCorrect": true },
        { "option": "В. Jak pani/ pan się ma?", "isCorrect": false },
        { "option": "Г. Co nowega?", "isCorrect": false }
      ]
    },
    {
      "id": 6,
      "question": "Як запитати: «як у тебе справи?»",
      "answers": [
        { "option": "A. Co słychać?", "isCorrect": false },
        { "option": "Б. Jak pan/pani się ma?", "isCorrect": false },
        { "option": "В. Jak się masz?", "isCorrect": true },
        { "option": "Г. Co nowego?", "isCorrect": false }
      ]
    },
    {
      "id": 7,
      "question":
        "З вчителем або з людиною, до якої звертаємося на «ви», вітаємося?",
      "answers": [
        { "option": "A. Siema!", "isCorrect": false },
        { "option": "Б. Cześć!", "isCorrect": false },
        { "option": "В. Dzień dobry!", "isCorrect": true },
        { "option": "Г. Hejka!", "isCorrect": false }
      ]
    },
    {
      "id": 8,
      "question": "З старшими прощаємося?",
      "answers": [
        { "option": "A. Cześć!", "isCorrect": false },
        { "option": "Б. Do widzenia!", "isCorrect": true },
        { "option": "B. Pa!", "isCorrect": false },
        { "option": "Г. Siema!", "isCorrect": false }
      ]
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number | null>>(
    Array(quizQuestionsList.length).fill(null)
  );
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  useEffect(() => {
    // Видаліть попередній код fetchQuizQuestions, оскільки тепер питання захардкоджені в коді.
  }, []);

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleAnswerChange = (index: number) => {
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = [...prev];
      newSelectedAnswers[currentQuestion] = index;
      return newSelectedAnswers;
    });
  };

  const handleFinishTest = () => {
    if (selectedAnswers.length !== quizQuestionsList.length) {
      alert("Ви не відповіли на всі питання");
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  const confirmFinishTest = () => {
    const results: Array<ResultAnswerType> = [];
    quizQuestionsList.forEach((question, index) => {
      const selectedAnswerIndex = selectedAnswers[index];
      if (selectedAnswerIndex !== null) {
        const isCorrect = question.answers[selectedAnswerIndex].isCorrect;
        results.push({
          id: question.id,
          correctAnswer: question.answers.find((a) => a.isCorrect)?.option || "",
          inCorrectAnswer: isCorrect
            ? ""
            : question.answers[selectedAnswerIndex]?.option || "",
          className: isCorrect ? "result-correct" : "result-incorrect",
          type: "quiz",
        });
      }
    });

    onFinish(results);
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="test-element">
      <h3>
        {quizQuestionsList[currentQuestion]?.id}){" "}
        {quizQuestionsList[currentQuestion]?.question}
      </h3>

      <div className="test-variants">
        {quizQuestionsList[currentQuestion]?.answers.map((a, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`${quizQuestionsList[currentQuestion].id}-${index}`}
              name={`${quizQuestionsList[currentQuestion].id}`}
              checked={selectedAnswers[currentQuestion] === index}
              onChange={() => handleAnswerChange(index)}
            />
            <label htmlFor={`${quizQuestionsList[currentQuestion].id}-${index}`}>
              {a.option}
            </label>
          </div>
        ))}
      </div>

      <div className="test-buttons">
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Попереднє
        </button>

        {currentQuestion + 1 !== quizQuestionsList.length ? (
          <button
            onClick={nextQuestion}
            disabled={currentQuestion === quizQuestionsList.length - 1}
          >
            Наступне
          </button>
        ) : (
          <button className="test-btn-next" onClick={handleFinishTest}>
            Перейти до наступного
          </button>
        )}
      </div>

      <MessageModal
        isOpen={isConfirmationModalOpen}
        onRequestClose={() => setIsConfirmationModalOpen(false)}
        contentLabel="Confirmation"
        message="Якщо ви перейдете до наступного блоку, до даного ви повернетеся більше не зможете. Впевнені що готові підтвердити відповіді?"
        onConfirm={confirmFinishTest}
        onCancel={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  );
};

export default QuizTest;
