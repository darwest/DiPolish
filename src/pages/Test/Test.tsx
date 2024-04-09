import PolishTest from "../../components/PolishTest/PolishTest";
import { useEffect, useState } from "react";

import "./Test.scss";
import "./Test.media.scss";

const Test = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isTestStarted, setIsTestStarted] = useState<boolean>(false);
  return (
    <div className="test-wrapper">
      <div className="test-container">
        {!isTestStarted && (
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
            <a className="hint-text" target="_blank" href="https://drive.google.com/file/d/1YmClDWepa9TpWRmv6OumMSCUUMnjCUKn/view?usp=sharing">Хочу конспект з уроку!</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
