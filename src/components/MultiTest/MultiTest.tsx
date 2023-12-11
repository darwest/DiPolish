import { useEffect, useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { IQuizQuestion } from "../../types/IQuizQuestion";
import { ResultAnswerType } from "../../types/ResultAnswerType";

// Оголошення пропсів для компонента MultiTest
type MultiTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};

// Основний компонент MultiTest
const MultiTest = ({ onFinish }: MultiTestProps) => {
  // Стан для збереження списку питань
  const [multiQuestionsList, setMultiQuestionsList] = useState<IQuizQuestion[]>(
    []
  );
  
  // Стан для відстеження поточного питання
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  // Стан для відстеження обраних відповідей для кожного питання
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number[]>>([]);

  // Стан для відстеження відкриття чи закриття модального вікна підтвердження
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Ефект викликається при завантаженні компонента
  useEffect(() => {
    // Функція для отримання списку питань з сервера
    const fetchMultiQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/multi");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMultiQuestionsList(data);

        // Початковий стан обраної відповіді для кожного питання
        const initialSelectedAnswers = data.map(() => []);
        setSelectedAnswers(initialSelectedAnswers);
      } catch (error) {
        console.error("Error fetching multi questions:", error);
      }
    };

    // Виклик функції для отримання списку питань
    fetchMultiQuestions();
  }, []);

  // Функція для переходу до наступного питання
  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  // Функція для переходу до попереднього питання
  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

// Функція handleAnswerChange відповідає за зміну стану обраних відповідей при виборі/знятті відмітки в checkbox.

const handleAnswerChange = (index: number) => {
  // setSelectedAnswers - функція для оновлення стану обраних відповідей
  // (prev) => - отримує попередній стан і використовує його для оновлення
  setSelectedAnswers((prev) => {
    // Створення копії попереднього стану
    const newSelectedAnswers = [...prev];
    // Отримання обраних відповідей для поточного питання
    const currentSelected = newSelectedAnswers[currentQuestion];

    // Перевірка, чи вже обрано відповідь для даного варіанту (index)
    if (currentSelected.includes(index)) {
      // Якщо обрано, видаляємо відповідь
      newSelectedAnswers[currentQuestion] = currentSelected.filter(
        (i) => i !== index
      );
    } else {
      // Якщо не обрано, додаємо відповідь
      newSelectedAnswers[currentQuestion] = [...currentSelected, index];
    }

    // Повертаємо оновлений стан
    return newSelectedAnswers;
  });
};


  // Функція для завершення тесту
  const handleFinishTest = () => {
    // Перевірка, чи обрано відповіді на всі питання
    if (selectedAnswers.length !== multiQuestionsList.length) {
      alert("Ви не відповіли на всі питання");
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  // Функція для підтвердження завершення тесту
  const confirmFinishTest = () => {
    const results: Array<ResultAnswerType> = [];

    // Ітерація по списку питань
    multiQuestionsList.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];

      // Перевірка, чи обрано відповіді для поточного питання
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

    // Виклик функції завершення тесту та закриття модального вікна
    onFinish(results);
    setIsConfirmationModalOpen(false);
  };

  // Отримання поточного питання зі списку
  const question = multiQuestionsList[currentQuestion];

  // Відображення "Loading..." при завантаженні питань з сервера
  if (multiQuestionsList.length === 0) {
    return <div>Loading...</div>;
  }

  // Повернення JSX-структури компонента MultiTest
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

// Експорт компонента MultiTest
export default MultiTest;
