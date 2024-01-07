import { useEffect, useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { IQuizQuestion } from "../../types/IQuizQuestion";
import { ResultAnswerType } from "../../types/ResultAnswerType";

type MultiTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};

const MultiTest = ({ onFinish }: MultiTestProps) => {
  const [multiQuestionsList] = useState<IQuizQuestion[]>([
    {
      "id": 1,
      "question": "Як можемо привітатися з другом?",
      "answers": [
        { "option": "A. Hejka", "isCorrect": true },
        { "option": "Б. Dzień dobry!", "isCorrect": false },
        { "option": "B. Siema", "isCorrect": true },
        { "option": "Г. Hejka", "isCorrect": true }
      ]
    },
    {
      "id": 2,
      "question": "Як запитати «Як у тебе/ у вас справи?»",
      "answers": [
        { "option": "A. Co słychać?", "isCorrect": true },
        { "option": "Б. Jak się masz?", "isCorrect": true },
        { "option": "В. Nic nowego", "isCorrect": false },
        { "option": "Г. Jak pan/ pani się ma?", "isCorrect": true }
      ]
    },
    {
      "id": 3,
      "question": "Як можемо відповісти на питання «Co słychać?»",
      "answers": [
        { "option": "A. Wszystko w porządku!", "isCorrect": true },
        { "option": "Б. Nic nie szkodzi", "isCorrect": false },
        { "option": "В. Nic nowega", "isCorrect": true },
        { "option": "Г. Po staremu!", "isCorrect": true }
      ]
    },
    {
      "id": 4,
      "question": "Як сказати перепрошую/ вибач польською?",
      "answers": [
        { "option": "A. Proszę", "isCorrect": false },
        { "option": "Б. Przepraszam", "isCorrect": true },
        { "option": "B. Dziękuję", "isCorrect": false },
        { "option": "Г. Wybacz", "isCorrect": true }
      ]
    },
    {
      "id": 5,
      "question": "Як попрощатися польською?",
      "answers": [
        { "option": "A. Do widzenia!", "isCorrect": true },
        { "option": "Б. Cześć!", "isCorrect": true },
        { "option": "В. Dobranoc!", "isCorrect": false },
        { "option": "Г. Na razie!", "isCorrect": true }
      ]
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number[]>>([]); 
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  useEffect(() => {
    const initialSelectedAnswers = multiQuestionsList.map(() => []);
    setSelectedAnswers(initialSelectedAnswers);
  }, [multiQuestionsList]);

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleAnswerChange = (index: number) => {
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = [...prev];
      const currentSelected = newSelectedAnswers[currentQuestion];

      if (currentSelected.includes(index)) {
        newSelectedAnswers[currentQuestion] = currentSelected.filter(
          (i) => i !== index
        );
      } else {
        newSelectedAnswers[currentQuestion] = [...currentSelected, index];
      }

      return newSelectedAnswers;
    });
  };

  const handleFinishTest = () => {
    if (selectedAnswers.length !== multiQuestionsList.length) {
      alert("Ви не відповіли на всі питання");
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  const confirmFinishTest = () => {
    const results: Array<ResultAnswerType> = [];

    multiQuestionsList.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];

      if (selectedAnswer.length > 0) {
        const correctAnswers = question.answers
          .filter((a) => a.isCorrect)
          .map((el) => el.option);
        const correctAnswer = correctAnswers.join(", ");

        const selectedOptions = selectedAnswer
          .filter((selectedIndex) => question.answers[selectedIndex]?.isCorrect)
          .map(
            (selectedIndex) => question.answers[selectedIndex]?.option || ""
          );

        results.push({
          id: question.id,
          correctAnswer: correctAnswer,
          inCorrectAnswer: "",
          className:
            selectedOptions.length === correctAnswers.length
              ? "result-correct"
              : "result-incorrect",
          type: "multi",
        });
      }
    });

    onFinish(results);
    setIsConfirmationModalOpen(false);
  };

  const question = multiQuestionsList[currentQuestion];

  if (multiQuestionsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-element">
      <h3>
        {question.id}) {question.question}
      </h3>

      <div className="test-variants">
        {question.answers.map((a, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`${question.id}-${index}`}
              checked={selectedAnswers[currentQuestion]?.includes(index)}
              onChange={() => handleAnswerChange(index)}
            />
            <label htmlFor={`${question.id}-${index}`}>{a.option}</label>
          </div>
        ))}
      </div>

      <div className="test-buttons">
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Попереднє
        </button>

        {currentQuestion + 1 !== multiQuestionsList.length ? (
          <button
            onClick={nextQuestion}
            disabled={currentQuestion === multiQuestionsList.length - 1}
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
        message="Якщо ви перейдете до наступного блоку, до даного ви повернетеся більше не зможете. Впевнені що готові підтвердити відповідь?"
        onConfirm={confirmFinishTest}
        onCancel={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  );
};

export default MultiTest;
