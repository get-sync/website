import React from "react";
import Navbar from "../../components/Navbar";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Link } from "react-router-dom/dist";

const Dev = () => {
  return (
    <div className="bg-[url('assets/bgpage.jpg')] overflow-x-hidden bg-fixed bg-center bg-cover relative h-[100vh]">
      <div className="absolute inset-0 bg-white bg-opacity-80 -z-0"></div>
      <div className="relative z-20">
        <div className="text-center h-[100vh] flex flex-col justify-center items-center">
          <h1>Development Zone</h1>
          <p>This page is getting a makeover</p>
          <Link to="/" className="text-blue-700 mt-4">
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dev;
