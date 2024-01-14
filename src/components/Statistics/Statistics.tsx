//Імпорт об'єкта motion для анімації
import { motion } from "framer-motion";
//імпорт стилів
import "./Statistics.scss";
import "./Statistics.media.scss";
//Створюємо функціональний компонент Statistics
const Statistics = () => {
  return (
    <section id="1" className="statistics-block">
      <div className="container">
        <div className="statistics-flex-container">
          <div className="title-statistics-block">
            <div className="vertical-line"></div>
            <div className="title-statistics">
              Чому варто обрати мене?
            </div>
          </div>
          <div className="right-statistics-block">
            <div className="statistics">
              <div className="statistics-list-text">
                <motion.div initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .5, delay: 0.2}} className="statistics-item1">
                  <div className="statistics-list-number-item">50+</div>
                  <div className="statistics-list-text-item text-left">талановитих учнів</div>
                </motion.div>
                <motion.div initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .5, delay: 0.3}} className="statistics-item2">
                  <div className="statistics-list-number-item ">2.5+</div>
                  <div className="statistics-list-text-item text-right">
                    роки досвіду роботи
                  </div>
                </motion.div>
                <motion.div initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .5, delay: 0.4}} className="statistics-item4">
                  <div className="statistics-list-number-item">3160+</div>
                  <div className="statistics-list-text-item text-left">
                    годин проведених занять
                  </div>
                </motion.div>
                <motion.div initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: .5, delay: 0.5}} className="statistics-item3">
                  <div className="statistics-list-number-item ">B2+</div>
                  <div className="statistics-list-text-item text-right">рівень знань</div>
                </motion.div>
                
              </div>
            </div>

            <div className="colors-blocks">
              <div className="color-block-one"></div>
              <div className="color-block-two"></div>
              <div className="color-block-three"></div>
              <div className="color-block-four"></div>
              <div className="color-block-fifth"></div>
              <div className="color-block-six"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
