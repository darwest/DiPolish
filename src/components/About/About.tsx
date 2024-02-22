//імпорт залежності для анімації
import { motion } from "framer-motion";

//Імпорт стилів
import "./About.css";
import "./About.media.css";

//Імпорт стрілки та іконки(типу аватарки) в змінні
import IconDi from "../../assets/img/dd.png";

//Створюємо функціональний компонент About
const About = () => {
  //Створюємо масиви даних
  const educationList = [
    "Волинський національний університет імені Лесі Українки",
    "Uniwersytet Humanistyczno-Przyrodniczy im. Jana Długosza w Częstochowie",
  ];

  const hardList = [
    "рівень польської В2+",
    "рівень англійської мови В1+",
    "маю навички перекладацької діяльності (усний і письмовий переклад)",
  ];

  const softList = [
    "комунікабельність",
    "вміння працювати в команді",
    "креативність",
    "лідерство",
    "відповідальність",
  ];

  return (
    <section className="about-me-block">
      <div id="2" className="container">
        <div className="about-me-flex-container">
          <div className="photo-about">
          <div className="text-info2">
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="p"
          >
            <span className="hejka">ПРО МЕНЕ</span>
          </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="welcome-message"
            >
              Hejka! Хочу трішки краще з вами познайомитись. Мене звати Діана Гацик!
            </motion.p>
            </div>
          
          <img src={IconDi} alt="loading" className="icon-di" />
         </div>
            
          <div className="text-info">
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="p"
          >
            <span className="hejka">ПРО МЕНЕ</span>
          </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="welcome-message"
            >
              Hejka! Хочу трішки краще з вами познайомитись. Мене звати Діана Гацик!
            </motion.p>

            <div className="facts">
              <motion.div className="fact-block fact-block-one" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .3, delay: .4 }}>
                <h2 className="title-facts-blocks">EDUCATION:</h2>
                <ul className="facts-list">
                  {educationList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="fact-block fact-block-two" initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .3, delay: .5}}>
                <h2 className="title-facts-blocks">HARD SKILLS:</h2>
                <ul className="facts-list">
                {hardList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="fact-block fact-block-three" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .3, delay: 0.6}}>
                <h2 className="title-facts-blocks">SOFT SKILLS:</h2>
                <ul className="facts-list">
                  {softList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
