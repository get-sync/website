import React from "react";
import StudentHero from "../../components/StudentHero";
import StudentJoin from "../../components/StudentJoin";
import Connections from "../../components/Connections";
import Footer from "../../components/Footer";
import StudentFeedback from "../../components/StudentFeedback";
import SyncSelect from "../../components/SyncSelect";
import StudentFaq from "../../components/StudentFaq";

const Student = ({ handleImageLoad, isLoaderDone }) => {
  return (
    <div className="bg-[url('assets/bgpage.jpg')] overflow-x-hidden bg-fixed bg-center bg-cover relative">
      <div className="absolute inset-0 bg-white bg-opacity-80 -z-0"></div>
      <div className="relative z-20">
        <StudentHero
          handleImageLoad={handleImageLoad}
          isLoaderDone={isLoaderDone}
        />
        <StudentJoin isLoaderDone={isLoaderDone} />
        <SyncSelect />
        <Connections />
        <StudentFeedback />
        <StudentFaq />
        <Footer />
      </div>
    </div>
  );
};

export default Student;
