//Імпорт об'єкта motion для анімації
import { motion } from "framer-motion";
//імпорт стилів
import "./Prices.scss";
import "./Prices.media.scss";
//імпорт зображень
import Stud1 from "../../assets/img/1stud.png";
import Stud2 from "../../assets/img/2stud.png";
import Sm from "../../assets/img/sm.png";

//Створюємо компонент Prices який рендерить секцію цін, яка містить різні блоки цін
const Prices = () => {
    return (
        <section id="4" className="price-section">
            <div className="container">
                <div className="price-flex-container">
                    <motion.h2
                        className="title-price-section"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        ЩО ПО ЦІНАХ?
                    </motion.h2>

                    <div className="price-blocks-container">
                        <motion.div
                            className="price-block"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="title-price-block">ІНДИВІДУАЛЬНІ</h3>
                            <img src={Stud1} className="icon-price-block" />
                            <p className="price">350 грн/год.</p>
                            <p className="description-price">*ціна за одну особу</p>
                        </motion.div>
                        <img src={Sm} width="40px" className="sm sm1" alt="loading" />
                        <motion.div
                            className="price-block price-block2"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="title-price-block">ПАРНІ</h3>
                            <img src={Stud2} className="icon-price-block" />
                            <p className="price">350 грн/год.</p>
                            <p className="description-price">*ціна за одну особу</p>
                        </motion.div>
                        <img src={Sm} width="40px" className="sm sm2" alt="loading" />

                        <motion.div
                            className="price-block"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="title-price-block">ГРУПОВІ</h3>
                            <div className="icons-price">
                                <img src={Stud1} className="icon-price-block" />
                                <img src={Stud2} className="icon-price-block" />
                            </div>
                            <p className="price">250 грн/год.</p>
                            <p className="description-price">*ціна за одну особу</p>
                        </motion.div>
                        <img src={Sm} width="40px" className="sm sm3" alt="loading" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;