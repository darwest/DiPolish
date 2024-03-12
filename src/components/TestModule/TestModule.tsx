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
            <h2 className="title-test-module-block">ХОЧЕШ ЗРОЗУМІТИ ЯКИЙ Я ВИКЛАДАЧ?</h2>
            <h3 className="subtitle-test-module-block">
             ТОДІ ПРОЙДИ ПРОБНИЙ МОДУЛЬ
            </h3>
            <p className="text-test-module-block">
            Уяви, що в нас з тобою перше заняття. Переглянь відеоурок та вивчи невеличкий матеріал. Після чого, на тебе чекає тестування, яке допоможе закріпити нові знання. І на завершення модуля ти вже побачиш перші результати!            </p>
            <h5 className="link-button-try">
            <Link className="button-try" to={"/test"}>
              
                ХОЧУ ПРОБНИЙ
              
            </Link>
            </h5>
          </motion.div>
          <img src={DiTest} className="photo-test-module" />
        </div>
      </div>
      <div  id="4"></div>
    </section>
  );
};

export default TestModule;
