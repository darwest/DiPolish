import { useEffect, useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { IQuizQuestion } from "../../types/IQuizQuestion";
import { ResultAnswerType } from "../../types/ResultAnswerType";
//Оголошення типу пропса
//onFinish - це функція, яка приймає масив результатів тесту
type QuizTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};
//Створюємо компонент QuizTest який приймає пропс onFinish типу QuizTestProps
const QuizTest = ({ onFinish }: QuizTestProps) => {
  const [quizQuestionsList, setQuizQuestionsList] = useState<IQuizQuestion[]>([]);//масив питань та варіантів відповідей.
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);//currentQuestion - змінна стану(індекс поточного питання)setCurrentQuestion- функція яка змінює стан
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number | null>>(Array(quizQuestionsList.length).fill(null));//масив із обраними відповідями для кожного питання.
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);//флажок, який вказує, чи відкрите модальне вікно підтвердження.

  //Використовуємо хук useEffect для виконання побічних ефектів в компоненті після його монтування
  useEffect(() => {
    // Створення асинхронної функції fetchQuizQuestions, яка буде відповідальною за отримання питань для тесту
    const fetchQuizQuestions = async () => {
      try {
        // Виклик асинхронної функції fetch, яка робить HTTP-запит за адресою, об'єкт response містить інформацію про відповідь сервера. 
        const response = await fetch("http://localhost:3001/api/quiz");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();//Отримання даних з тіла відповіді у форматі JSON.
        setQuizQuestionsList(data);//Оновлення стану quizQuestionsList за допомогою отриманих з сервера даних.
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    fetchQuizQuestions();
  }, []);

  //Створення функції nextQuestion, яка збільшує значення currentQuestion на одиницю
  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };
  //Створення функції prevQuestion, яка зменшує значення currentQuestion на одиницю
  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };
  //Дана функція призначена для обробки змін у відповідях на питання в тесті. 
  const handleAnswerChange = (index: number) => {
    setSelectedAnswers((prev) => {
      // Копіюємо попередній стан в новий масив
      const newSelectedAnswers = [...prev];
      // Змінюємо вибір відповіді для поточного питання
      newSelectedAnswers[currentQuestion] = index;
      // Повертаємо оновлений масив встановлених відповідей
      return newSelectedAnswers;
    });
  };

  const handleFinishTest = () => {
    // Перевірка, чи відповіли на всі питання
    if (selectedAnswers.length !== quizQuestionsList.length) {
      alert("Ви не відповіли на всі питання");
      return;
    }

    // Відкриття підтверджувального модального вікна
    setIsConfirmationModalOpen(true);
  };

  /*Функція confirmFinishTest створює масив results, який містить об'єкти результатів для кожного питання в тесті. 
  Кожен об'єкт результату включає інформацію про правильну та обрану відповідь, а також клас, який вказує на правильність чи неправильність відповіді.*/
  const confirmFinishTest = () => {
    // Створюємо пустий масив для зберігання результатів
    const results: Array<ResultAnswerType> = [];
    // Проходимося по кожному питанню в списку питань тесту
    quizQuestionsList.forEach((question, index) => {
      // Отримуємо індекс вибраної відповіді для поточного питання
      const selectedAnswerIndex = selectedAnswers[index];
      // Перевіряємо, чи користувач вибрав відповідь для даного питання
      if (selectedAnswerIndex !== null) {
        // Визначаємо, чи вибрана відповідь є правильною
        const isCorrect = question.answers[selectedAnswerIndex].isCorrect;
        // Додаємо результат питання до масиву results
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

    // Викликаємо функцію onFinish, яка передає масив результатів компоненту.
    onFinish(results);
    setIsConfirmationModalOpen(false); // Закриття модалки
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