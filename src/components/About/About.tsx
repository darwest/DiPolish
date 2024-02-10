//імпорт залежності для анімації
import { motion } from "framer-motion";

//Імпорт стилів
import "./About.scss";
import "./About.media.scss";

//Імпорт стрілки та іконки(типу аватарки) в змінні
import IconDi from "../../assets/img/icon-di.png";

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
    "маю навики перекладацької діяльності (усний і письмовий переклад)",
  ];

  const softList = [
    "комунікабельність",
    "вміння працювати в команді",
    "креативність",
    "лідерство",
    "відповідальність",
  ];

  return (
    <section  className="about-me-block">
      <div className="content-about-me">
        <div  id="2" className="container">
          <div className="about-me-flex-container">
            <div className="top-part-about-me-block">
              <div className="info-about-mentor">
                <img src={IconDi} alt="loading" className="icon-di" />
                <div  className="text-info-about-mentor">
                  <h2 className="name-mentor">Гацик Діана</h2>
                  <p className="mentor-prof">ВЧИТЕЛЬ ПОЛЬСЬКОЇ МОВИ</p>
                </div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="welcome-message"
            >
              Hejka! Хочу розказати декілька фактів про себе. Мені 20 років,
            </motion.p>

            <div className="facts-blocks">
              <motion.div  className="fact-block fact-block-one" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .3, delay: .2}}>
                <h2 className="title-facts-blocks">EDUCATION:</h2>
                <ul className="facts-list">
                {educationList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
             
              <motion.div className="fact-block fact-block-two" initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .3, delay: .3}}>
                <h2 className="title-facts-blocks">HARD SKILLS:</h2>
                <ul className="facts-list">
                {hardList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
            
              <motion.div className="fact-block fact-block-three" initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: .3, delay: 0.4}}>
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

/*Ми використовуємо метод масиву map для ітерації по елементах масиву educationList. Для кожного елемента ми створюємо елемент <li> (пункт списку). 
Атрибут key встановлює унікальний ключ для кожного пункту, el представляє собою кожен елемент з масиву educationList. 
Вміст елемента виводиться в текстовій формі всередині пункту списку. 
*/