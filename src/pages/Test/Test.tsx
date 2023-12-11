//Імпорт компонентів
import PolishTest from "../../components/PolishTest/PolishTest";
import FileUpload from "../../components/FiledUpload/FiledUpload";
import { useEffect, useState } from "react";

import "./Test.scss";
import "./Test.media.scss";

//Використання useEffect для прокрутки сторінки вверх при завантаженні компонента
const Test = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

//Використання стану isTestStarted для відстеження того, чи почався тест
  const [isTestStarted, setIsTestStarted] = useState<boolean>(false);
/*Умовний рендеринг, для того щоб відео відображалось тільки тоді коли тест не розпочато
як тільки тест буде розпочатий відео зникне*/

/*Виклик компонента PolishTest та передавання йому значень пропсів isTestStarted і setIsTestStarted. */
  return (
    <div className="test-wrapper">
      <div className="test-container">
        {!isTestStarted &&  (
          <div className="test-video">
            <iframe
              src="https://www.youtube.com/embed/Vsj2JUCdcpg?si=yMftHtOqH-6lPUnG"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <PolishTest isTestStarted={isTestStarted} setIsTestStarted={setIsTestStarted} />
      </div>
      <div className="hint">
        <div className="container">
          <div className="hint-content">
            <p className="hint-text">
              Важко запам'ятати нові конструкції або з'явилися труднощі ? Не
              біда, тримай нашу шпаргалочку, яка завжди підкаже тобі правильну
              відповідь
            </p>
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
/*isTestStarted і setIsTestStarted представляють стан і функцію для зміни стану. */