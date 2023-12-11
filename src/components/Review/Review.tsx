//Імпорт бібліотек та стилів
import 'swiper/css';
import 'swiper/css/effect-fade';

import "./Review.scss";
import "./Review.media.scss";
//Імпорт компонента Слайдер
import {Swiper, SwiperSlide} from "swiper/react"
//Імпорт зображень для слайдів у слайдері
import ReviewImg1 from "../../assets/img/reviews/review1.jpg";
import ReviewImg2 from "../../assets/img/reviews/review2.jpg";
import ReviewImg3 from "../../assets/img/reviews/review3.jpg";
import ReviewImg4 from "../../assets/img/reviews/review4.jpg";
import ReviewImg5 from "../../assets/img/reviews/review5.jpg";
import ReviewImg6 from "../../assets/img/reviews/review6.jpg";
import ReviewImg7 from "../../assets/img/reviews/review7.jpg";
import ReviewImg8 from "../../assets/img/reviews/review8.jpg";

const Review = () => {
  //reviews - масив даних
  const reviews = [
    ReviewImg1,
    ReviewImg2,
    ReviewImg3,
    ReviewImg4,
    ReviewImg5,
    ReviewImg6,
    ReviewImg7,
    ReviewImg8,
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
                SWIPE RIGHT!
              </p>
          </div>
        </div>
      </div>
      <div className="blue-line"></div>
    </section>
  );
};

export default Review;

/*
slidesPerView={1} вказує, що один слайд буде видимим одночасно.
{reviews.map((r, i) => ( ... ))}: це JS-вираз, який мапить (перетворює) кожен елемент з масиву reviews на відповідний SwiperSlide. 
r - це конкретний елемент (зображення відгуку),
i - індекс цього елемента.
 */
