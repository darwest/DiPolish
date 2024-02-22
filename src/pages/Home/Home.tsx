import Banner from "../../components/Baner/Banner";
import Statistics from "../../components/Statistics/Statistics";
import About from "../../components/About/About";
import TestModule from "../../components/TestModule/TestModule";
import Prices from "../../components/Prices/Prices";
import Review from "../../components/Review/Review";
import Video from "../../components/Video/Video";
import Information from "../../components/Information/Information";
import Footer from "../../components/Footer/Footer";
import { useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom'; // Імпортуйте useLocation

const Home = () => {
  const location = useLocation(); 
  useLayoutEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const scrollToId = searchParams.get("scrollTo");
  
    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); 
    }
  }, [location.search]);
  
  return (
    <>
      <Banner />
      <Statistics />
      <About />
      <Review />
      <TestModule />
      <Prices />
      
      <Video />
      <Information />
      <Footer />
    </>
  );
};

export default Home;
