//Імпорт бібліотек та стилів
import 'swiper/css';
import 'swiper/css/effect-fade';

import "./Review.scss";
import "./Review.media.scss";
//Імпорт компонента Слайдер
import { Swiper, SwiperSlide } from "swiper/react"
//Імпорт зображень для слайдів у слайдері
import ReviewImg1 from "../../assets/reviews/1.jpg";
import ReviewImg2 from "../../assets/reviews/2.jpg";
import ReviewImg3 from "../../assets/reviews/3.jpg";
import ReviewImg4 from "../../assets/reviews/4.jpg";
import ReviewImg5 from "../../assets/reviews/5.jpg";
import ReviewImg7 from "../../assets/reviews/7.jpg";
import ReviewImg8 from "../../assets/reviews/8.jpg";
import ReviewImg9 from "../../assets/reviews/9.jpg";
import ReviewImg10 from "../../assets/reviews/10.jpg";
import ReviewImg11 from "../../assets/reviews/11.jpg";
import ReviewImg12 from "../../assets/reviews/12.jpg";
import ReviewImg13 from "../../assets/reviews/13.jpg";
import ReviewImg14 from "../../assets/reviews/14.jpg";
import ReviewImg16 from "../../assets/reviews/16.jpg";
import ReviewImg17 from "../../assets/reviews/17.jpg";
import ReviewImg18 from "../../assets/reviews/18.jpg";



const Review = () => {
  //reviews - масив даних
  const reviews = [
    ReviewImg1,
    ReviewImg2,
    ReviewImg3,
    ReviewImg4,
    ReviewImg5,
    ReviewImg7,
    ReviewImg8,
    ReviewImg9,
    ReviewImg10,
    ReviewImg11,
    ReviewImg12,
    ReviewImg13,
    ReviewImg14,
    ReviewImg16,
    ReviewImg17,
    ReviewImg18,

  ];

  return (
    <section id="8" className="reviews-block">
      <div className="baner">
        <div className="container">
          <div className="reviews-flex-container">
            <div className="title-block">
              <h2 className="title-reviews-block">ВІДГУКИ МОЇХ УЧНІВ</h2>
              <p className="subtitle-reviews-block">
                — це найцінніші докази моєї праці.
              </p>
            </div>
            <div className="banner-reviews-block">
              <div className="container">
                <div className="banner-flex-container">


                  <div className="slider-container back-photo">
                    <Swiper
                      className="swiper"
                      slidesPerView={1}

                    >
                      {reviews.map((r, i) => (
                        <SwiperSlide className="swiper-slide" key={"reviweImg" + i}>
                          <div className="image-slider">
                            <img
                              src={r}
                              alt="Викладач польської та англійської мов, відгуки про заняття, школа іноземних мов"
                              width="250px"
                              className="img-slider"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>


                </div>
              </div>
            </div>
            <p className="bottom-title-reviews-block">
              ГОРТАЙ ВЛІВО!
            </p>
          </div>
        </div>
      </div>
      <div className="blue-line"></div>
    </section>
  );
};

export default Review;

