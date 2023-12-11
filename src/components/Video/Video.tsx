import "./Video.scss"
import "./Video.media.scss"
//Створюємо функціональний компонент Video
const Video = () => {
  return (
    <section className="video-block" id="video">
        <div className="container">
            <div className="video-flex-container">
                <div className="title-block">
                    <h2 className="video-title">ЩE Є <span>СУМНІВИ?</span></h2>
                    <p className="video-text">Тоді подивись це відео і сам все зрозумієш</p>
                </div>
                <div className="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/HSLo3k-dIBM?si=vjr36O_BdhYqPtAm" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Video