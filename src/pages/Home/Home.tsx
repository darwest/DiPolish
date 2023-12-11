import Banner from "../../components/Baner/Banner";
import Statistics from "../../components/Statistics/Statistics";
import About from "../../components/About/About";
import TestModule from "../../components/TestModule/TestModule";
import Prices from "../../components/Prices/Prices";
import Review from "../../components/Review/Review";
import Video from "../../components/Video/Video";
import Information from "../../components/Information/Information";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

//створюємо компонент Home
const Home = () => {

  // Код, який викликається після відображення компонента
  // window.scrollTo(0, 0) - прокручує сторінку вверx
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  //відображення компонентів на сторінці
  return (
    <>
      <Banner />
      <Statistics />
      <About />
      <TestModule />
      <Prices />
      <Review/>
      <Video/>
      <Information/>
      <Footer/>
    </>
  );
};

export default Home;

