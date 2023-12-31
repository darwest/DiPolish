//Імпорт залежності, зображення, стилів
import { motion } from "framer-motion";
import MainPhoto from "../../assets/img/main-photo.png";
import "./Banner.scss";
import "./Banner.media.scss";
//Створюємо функціональний компонент Banner
const Banner = () => {


  return (
    <section
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
                СКАЖИ ПРОЩАВАЙ ВІЧНОМУ БЛУКАННЮ В ПОШУКУ ІДЕАЛЬНОГО ВЧИТЕЛЯ
              </motion.h1>
              <motion.h3
                className="banner-subtitle"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: .7, delay: 0.5 } }}
              >
                ти його вже знайшов!
              </motion.h3>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSft29BqYNoGaUdZSBBs-58PuJ-YEhK0BUnxFsm3qJDHN5CrNg/viewform?usp=sf_link"
                className="banner-button"
                target="_blank"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: .4, delay: 1.3 } }}
              >
                FEEDBACK
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
          <motion.div className="banner-flex-container-two">
            <motion.h2
              className="banner-title-two"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              
            >
              ВІТАЄМО ТЕБЕ З НАВЧАННЯМ, ЯКЕ ПРИНОСИТЬ ЗАДОВОЛЕННЯ І ГАРНЕ
              ВОЛОДІННЯ МОВОЮ{" "}
            </motion.h2>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;