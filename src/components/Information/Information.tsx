//Імпорт стилів
import "./Information.scss"
import "./Information.media.scss"
//Створюємо функціональний компонент Information, який рендерить відповідні елементи
const Information = () => {
    return (
        <section className="info-block">
            <div className="container">
                <div className="info-flex-container">
                    <div className="section-info-blocks">
                        <div className="info-block">
                            <h3 className="title-info">Графік</h3>
                            <p className="subtitle-info">за домовленістю</p>
                        </div>
                        <div className="info-block">
                            <h3 className="title-info">Платформа</h3>
                            <p className="subtitle-info">Meet, Zoom</p>
                        </div>
                        <div className="info-block">
                            <h3 className="title-info">Контакти</h3>
                            <div className="block-contact">
                                <a href="tel:+380688896135" className="subtitle-info">+(380) 68-889-61-35</a>
                                <a href="mailto:gacikdp@gmail.com" className="subtitle-info">gacikdp@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="section-waiting-call">
                        <div className="block-waiting-call">
                            <p className="text-block-waiting-call">Чекаю</p>
                        </div>
                        <div className="block2-waiting-call">
                            <p className="text2-block-waiting-call">на твій</p>
                        </div>
                        <div className="block-waiting-call">
                            <p className="text-block-waiting-call">дзвінок</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information