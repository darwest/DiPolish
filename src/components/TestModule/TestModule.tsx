import {motion} from "framer-motion"

import DiTest from "../../assets/img/di-test-module.png";
import "./TestModule.scss";
import "./TestModule.media.scss";

import { Link } from "react-router-dom";

const TestModule = () => {
  return (
    <section id="3" className="test-module-block">
      <div className="container">
        <h3 className="reference-text">ПОЛЬСЬКА МОВА ЗІ МНОЮ - ЦЕ ЛЕГКО!</h3>
        <div className="test-module-flex-container">
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: .8, delay: .2}} className="content-test-module-block">
            <h2 className="title-test-module-block">ПРОБНИЙ МОДУЛЬ</h2>
            <h3 className="subtitle-test-module-block">
              УЯВИ, ЩО В НАС З ТОБОЮ ПЕРШЕ ЗАНЯТТЯ
            </h3>
            <p className="text-test-module-block">
              Пройди пробний модуль, щоб зрозуміти усі аспекти навчання за моєю
              технологією. Передивись пробний урок і пройди тестування по
              вивченому матеріалу.І тоді ти зрозумієш, що вивчення мови може
              принести тобі не тільки знання, а й класний настрій!
            </p>
            <Link className="button-try" to={"/test"}>
              <h5 className="link-button-try">
                СПРОБУВАТИ
              </h5>
            </Link>
          </motion.div>
          <img src={DiTest} className="photo-test-module" />
        </div>
      </div>
    </section>
  );
};

export default TestModule;
