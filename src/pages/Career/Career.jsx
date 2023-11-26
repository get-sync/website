import React from "react";
import CareerHero from "../../components/CareerHero";
import Openings from "../../components/Openings";
import Footer from "../../components/Footer";
import Performers from "../../components/Performers";

const Career = ({ handleImageLoad, isLoaderDone }) => {
  return (
    <div className="bg-[url('assets/bgpage.jpg')] overflow-x-hidden bg-fixed bg-center bg-cover relative">
      <div className="absolute inset-0 bg-white bg-opacity-80 -z-0"></div>
      <div className="relative z-20">
        <CareerHero
          handleImageLoad={handleImageLoad}
          isLoaderDone={isLoaderDone}
        />
        <Openings isLoaderDone={isLoaderDone} />
        <Performers />
        <Footer />
      </div>
    </div>
  );
};

export default Career;
