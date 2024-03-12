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
    "Університет гуманітарних та природничих наук ім. Яна Длугоша в Ченстохові, Польща",
  ];

  const hardList = [
    "рівень польської В2+",
    "рівень англійської мови В1+",
    "Професійний переклад (усний і письмовий)",
    "Організатор розмовних клубів з польської мови",
  ];

  const softList = [
    "Знаходжу підхід до кожного учня, щоб матеріал запам’ятався назавжди",
    "Контролюю навчальний процес, щоб кожен вчитель з моєї команди навчав результативно",
    "Постійно покращую свої знання, вивчаю нові методики та багато аналізую, щоб зробити ваше навчання ще кращим"
  ];

  return (
    <section className="about-me-block">
      <div id="2" className="container">
        <div className="text-title-about"><motion.p
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
            Привіт! Мене звати <span className="span">Діана - професійний викладач</span> польської та англійської мов. <br></br>Я створила власну <span className="span">школу іноземних мов</span>, в якій об’єднала експертів в одну команду зі спільною метою - зробити вивчення іноземних не лише результативним, але й цікавим та простим.

            <br></br></motion.p>
        </div>
        <div className="about-me-flex-container">


          <div className="photo-about">
            <img src={IconDi} alt="loading" className="icon-di" />
          </div>

          <div className="text-info">

            <div className="facts">
              <motion.span className="title-facts-blocks" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .3, delay: .4 }}> ДЕКІЛЬКА ФАКТІВ:</motion.span>
              <motion.div className="fact-block fact-block-one" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .3, delay: .4 }}>
                <h2 className="title-facts-blocks">ОСВІТА:</h2>
                <ul className="facts-list">
                  {educationList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="fact-block fact-block-two" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .3, delay: .5 }}>
                <h2 className="title-facts-blocks">ПРОФЕСІЙНІ НАВИЧКИ:</h2>
                <ul className="facts-list">
                  {hardList.map((el, i) => (
                    <li key={el + i} className="facts-item">
                      {el}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="fact-block fact-block-three" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .3, delay: 0.6 }}>
                <h2 className="title-facts-blocks">ОСОБИСТІ ЯКОСТІ:</h2>
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
