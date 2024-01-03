//Імпорт хука
import { useState } from "react";
//Імпорт компонентів
import QuizTest from "../QuizTest/QuizTest";
import MultiTest from "../MultiTest/MultiTest";
import AudioTest from "../AudioTest/AudioTest";
//Імпорт хука для навігації між сторінками
import { useNavigate } from "react-router-dom";
//Імпорт типу, який визначає формат тестування
import { ResultAnswerType } from "../../types/ResultAnswerType";
//Імпорт стилів
import "./PolishTest.scss";

/*Тут ми визначаємо тип для пропсів*/
type Props = {
    isTestStarted: boolean,
    setIsTestStarted: React.Dispatch<React.SetStateAction<boolean>>
}
//Створюємо компонент PolishTest який отримує пропси isTestStarted, setIsTestStarted 
const PolishTest = ({isTestStarted, setIsTestStarted} : Props) => {
  const navigate = useNavigate();

  const [currentTest, setCurrentTest] = useState<number>(0);                   //змінна стану currentTest, вказує на поточний тест, який виводиться на екрані, поч.значення 0
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);   //оголошується змінна стану correctAnswersCount типу number зі значенням за замовчуванням 0, і setCorrectAnswersCount - функція для оновлення цього значення.
  const [resultAnswers, setResultAnswers] = useState<ResultAnswerType[]>([]);  //оголошення змінної стану resultAnswers, яка є масивом типу ResultAnswerType. Поч. значення - порожній масив, setResultAnswers - функція для оновлення цього стану.
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);        //оголошення змінної стану isTestFinished, функ setIsTestFinished для оновлення стану
 
  //Ця функція handleFinishTest викликається після завершення кожного типу тесту. 
  //setResultAnswers функція, яка встановлює новий стан для resultAnswers, приймаючи попередній стан, тут ми створюємо масив який скл. з попередніх результатів і нових(... озн. розгортання масиву)
  const handleFinishTest = (results: ResultAnswerType[]) => {
  setResultAnswers((prevResults) => [...prevResults, ...results]);
 /*змінна correctCount буде містити кількість результатів, які мають клас result-correct.
   кількість правильних відповідей correctCount додається до попереднього значення correctAnswersCount, і отримане значення встановлюється як новий стан correctAnswersCount*/
    const correctCount = results.filter(
      (result) => result.className === "result-correct"
    ).length;
    setCorrectAnswersCount((prevCount) => prevCount + correctCount);
  //перевірка, чи є ще тестові блоки, якщо є то до значення prevTest дод. 1 щоб перейти до наступного тестового блоку
    if (currentTest + 1 < typesTests.length) {
      setCurrentTest((prevTest) => prevTest + 1);
    } else {
      setIsTestFinished(true);
      setIsTestStarted(false);
    }
  };
//Масив об'єктів
  const typesTests = [
    {
      id: 1,
      name: "Квіз тест",
      description: "Виберіть одну правильну відповідь",
      element: <QuizTest onFinish={handleFinishTest} />,
    },
    {
      id: 2,
      name: "Мульти тест",
      description: "Декілька відповідей правильні",
      element: <MultiTest onFinish={handleFinishTest} />,
    },
    {
      id: 3,
      name: "Аудіо тест",
      description: "Прослухайте аудіодоріжку та впишіть пропущене слово",
      element: <AudioTest onFinish={handleFinishTest} />,
    },
  ];
//Ця функція встановлює значення isTestStarted на true за допомогою функції setIsTestStarted
  function handlerStartTest(): void {
    setIsTestStarted(true);
  }

//функція getLevel визначає рівень користувача на основі кількості правильних відповідей у тесті
  const getLevel = (correctAnswersCount: number) => {
    if (correctAnswersCount < 5) {
      return "Низький";
    } else if (correctAnswersCount < 10) {
      return "Середній";
    } else if (correctAnswersCount < 15) {
      return "Хороший";
    } else {
      return "Відмінний";
    }
  };

  return (
    <div className="test-container">
      <div className="test-block">
       
        {!isTestStarted && !isTestFinished && (
          
          <p className="test-description">
          <span> <h1 className="test-heading">Пробний модуль</h1></span>
           Пропонуємо Вам закріпити свої знання пройшовши невеличкий тест. Сам
           тест складатиметься із 3 частин:
           <span className="text-orange"> Квізу, </span>
           <span className="text-orange">Мульти</span> та
           <span className="text-orange"> Аудіо</span>.
           <br />
           Після проходження одного блоку ви зможете перейти до наступного, коли
           всі блоки будуть пройдені тест буде завершений і ви отримаєте свій
           результат
         </p>
        )}
       

        {!isTestStarted && !isTestFinished && (
          <button
            disabled={isTestStarted}
            onClick={handlerStartTest}
            className="test-btn"
          >
            Розпочати тест
          </button>
        )}

        {isTestStarted && (
          <div className="test-body">
            <h1>{typesTests[currentTest].name}</h1>
            <p className="test-target">{typesTests[currentTest].description}</p>
            {typesTests[currentTest].element}
          </div>
        )}

        {isTestFinished && (
          <div className="test-result">
            <h3 className="test-result-heading">Ви відповіли правильно на <span className="text-orange">{correctAnswersCount}</span> питань</h3>
              <h4>Ваш рівень - { getLevel(correctAnswersCount)}</h4>
            <ul className="test-result-list">
              {resultAnswers.map((result, index) => (
                <li
                  key={result.id + result.type}
                  className={`${result.className} test-result-element`}
                >
                  {index + 1}) Правильна відповідь — {result.correctAnswer} —{" "}
                  Ваша відповідь
                  {result.className === "result-correct"
                    ? " правильна"
                    : " неправильна"}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="test-btn"
            >
              Повернутися на головну сторінку
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolishTest;
