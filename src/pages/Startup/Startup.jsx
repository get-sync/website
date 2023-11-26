import React from "react";
import StartupHero from "../../components/StartupHero.jsx";
import Footer from "../../components/Footer.jsx";
import Faq from "../../components/Faq.jsx";
import HowItWorks from "../../components/HowItWorks.jsx";
import WhyUs from "../../components/WhyUs.jsx";

const Startup = ({ handleImageLoad, isLoaderDone }) => {
  return (
    <div className="bg-[url('assets/bgpage.jpg')] overflow-x-hidden bg-fixed bg-center bg-cover relative">
      <div className="absolute inset-0 bg-white bg-opacity-80 -z-0"></div>
      <div className="relative z-20">
        <StartupHero
          handleImageLoad={handleImageLoad}
          isLoaderDone={isLoaderDone}
        />
        <HowItWorks isLoaderDone={isLoaderDone} />
        <WhyUs />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Startup;
