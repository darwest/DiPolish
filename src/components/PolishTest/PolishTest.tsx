import { useState } from "react";
import QuizTest from "../QuizTest/QuizTest";
import MultiTest from "../MultiTest/MultiTest";
import AudioTest from "../AudioTest/AudioTest";
import { useNavigate } from "react-router-dom";
import { ResultAnswerType } from "../../types/ResultAnswerType";
import "./PolishTest.scss";

type Props = {
  isTestStarted: boolean,
  setIsTestStarted: React.Dispatch<React.SetStateAction<boolean>>
}
const PolishTest = ({ isTestStarted, setIsTestStarted }: Props) => {
  const navigate = useNavigate();

  const [currentTest, setCurrentTest] = useState<number>(0);                   //змінна стану currentTest, вказує на поточний тест, який виводиться на екрані, поч.значення 0
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);   //оголошується змінна стану correctAnswersCount типу number зі значенням за замовчуванням 0, і setCorrectAnswersCount - функція для оновлення цього значення.
  const [resultAnswers, setResultAnswers] = useState<ResultAnswerType[]>([]);  //оголошення змінної стану resultAnswers, яка є масивом типу ResultAnswerType. Поч. значення - порожній масив, setResultAnswers - функція для оновлення цього стану.
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);        //оголошення змінної стану isTestFinished, функ setIsTestFinished для оновлення стану

  const handleFinishTest = (results: ResultAnswerType[]) => {
    setResultAnswers((prevResults) => [...prevResults, ...results]);
    const correctCount = results.filter(
      (result) => result.className === "result-correct"
    ).length;
    setCorrectAnswersCount((prevCount) => prevCount + correctCount);
    if (currentTest + 1 < typesTests.length) {
      setCurrentTest((prevTest) => prevTest + 1);
    } else {
      setIsTestFinished(true);
      setIsTestStarted(false);
    }
  };
  const typesTests = [
    {
      id: 1,
      name: "Тест на одну правильну відповідь",
      description: "Вибір однієї правильної",
      element: <QuizTest onFinish={handleFinishTest} />,
    },
    {
      id: 2,
      name: "Тест на декілька правильних відповідей",
      description: "Вибір декілька правильних",
      element: <MultiTest onFinish={handleFinishTest} />,
    },
    {
      id: 3,
      name: "Встановіть відповідність",
      description: "Встановлення відповідностей між словосполученнями",
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
            <span> <h1 className="test-heading">ПРОБНИЙ МОДУЛЬ</h1></span>
            Якщо ви переглянули відео, тоді я пропоную вам закріпити свої знання пройшовши невеличкий тест. Тест складається з 3 частин:
            <span className="text-orange"> питання з однією правильною відповіддю</span>,
            <span className="text-orange"> питання з декількома правильними відповідями</span> та
            <span className="text-orange"> завдання: з'єднай відповідності</span>.
            <br />
            Після проходження одного блоку ви зможете перейти до наступного. Після проходження всіх блоків, тест буде завершений і ви отримаєте свій результат.
          </p>
        )}


        {!isTestStarted && !isTestFinished && (
          <button
            disabled={isTestStarted}
            onClick={handlerStartTest}
            className="test-btn"
          >
            РОЗПОЧАТИ
          </button>
        )}

        {isTestStarted && (
          <div className="test-body">
            <h1 className="title">{typesTests[currentTest].name}</h1>
            <p className="test-target">{typesTests[currentTest].description}</p>
            {typesTests[currentTest].element}
          </div>
        )}

        {isTestFinished && (
          <div className="test-result">
            <h3 className="test-result-heading">Ви відповіли правильно на <span className="text-orange">{correctAnswersCount}</span> питань</h3>
            <h4 className="level">Ваш рівень - {getLevel(correctAnswersCount)}</h4>
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
              ПОВЕРНУТИСЬ НА ГОЛОВНУ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolishTest;
