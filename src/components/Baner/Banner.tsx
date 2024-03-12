//Імпорт залежності, зображення, стилів
import { motion } from "framer-motion";
import MainPhoto from "../../assets/img/main-photo.png";
import "./Banner.scss";
import "./Banner.media.scss";
//Створюємо функціональний компонент Banner
const Banner = () => {


  return (
    <section id="1"
      className="banner-block">
      <div className="container">
        <div className="banner-flex-container">
          <motion.div className="banner-block-one">
            <motion.div className="banner-text-block">
              <motion.h1
                className="banner-title"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } }}
              >
               ШКОЛА АНГЛІЙСЬКОЇ ТА ПОЛЬСЬКОЇ МОВ З КОМАНДОЮ ПРОФЕСІОНАЛІВ
              </motion.h1>
              <motion.h3
                className="banner-subtitle"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: .7, delay: 0.5 } }}
              >
        Я гарантую, що з моєю командою вивчення мов стане не просто процесом, а справжнім захопленням!              </motion.h3>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSft29BqYNoGaUdZSBBs-58PuJ-YEhK0BUnxFsm3qJDHN5CrNg/viewform?usp=sf_link"
                className="banner-button"
                target="_blank"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: .4, delay: 1.3 } }}
              >
                ЗАЯВКА
              </motion.a>
            </motion.div>
            <motion.div className="banner-image-block">
              <motion.img
                src={MainPhoto}
                alt="loading"
                className="main-photo"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div className="banner-block-two">
        <div className="container">
          <motion.div  initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: .4, delay: 0.3 } }}
             className="banner-flex-container-two">
            <h2 id="7" 
              className="banner-title-two"
              
            >
             ПІСЛЯ ЗАНЯТЬ В МОЇЙ ШКОЛІ ТИ ЗРОЗУМІЄШ, ЩО ВИВЧЕННЯ МОВ МОЖЕ БУТИ В ЗАДОВОЛЕННЯ{" "}
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;