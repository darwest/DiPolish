//Імпорт бібліотек та стилів
import 'swiper/css';
import 'swiper/css/effect-fade';

import "./Review.scss";
import "./Review.media.scss";
//Імпорт компонента Слайдер
import {Swiper, SwiperSlide} from "swiper/react"
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
  ];

  return (
    <section className="reviews-block">
      <div className="baner">
        <div className="container">
          <div className="reviews-flex-container">
            <div className="title-block">
              <h2 className="title-reviews-block">ВІДГУКИ</h2>
              <p className="subtitle-reviews-block">
                найцінніші докази моєї праці
                <br />- це мої відгуки
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
                              alt="Loading"
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

