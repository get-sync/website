import { useEffect, useState } from "react";
import Faq from "../../components/Faq";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import JoinSection from "../../components/JoinSection";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Services from "../../components/Services";

const Home = ({
  isLoaderDone,
  handleImageLoad,
  shouldRunAnimation,
  setShouldRunAnimation,
}) => {
  return (
    <div className="bg-[url('assets/bgpage.jpg')] overflow-x-hidden bg-fixed bg-center bg-cover relative">
      <div className="absolute inset-0 bg-white bg-opacity-80 -z-0"></div>
      <div className="relative z-20">
        <Hero
          isLoaderDone={isLoaderDone}
          handleImageLoad={handleImageLoad}
          shouldRunAnimation={shouldRunAnimation}
          setShouldRunAnimation={setShouldRunAnimation}
        />

        <JoinSection />
        <Services />
        <Faq />
        <Feedback />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Home;
