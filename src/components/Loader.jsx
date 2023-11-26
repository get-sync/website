import React, { useEffect } from "react";
import Lottie from "lottie-react";
import frameMobile from "../assets/frameMobile.json";
import { Audio } from "react-loader-spinner";
import { motion } from "framer-motion";

const Loader = ({ isLoaded }) => {
  // useEffect(() => {
  //   // Hide the scrollbar when the Loader component mounts
  //   document.body.style.overflow = "hidden";

  //   // Revert the overflow property when the component unmounts
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);
  return (
    <div
      className={`fixed bg-zinc-800 top-0 left-0 z-[100] w-[100vw] h-[100vh] overflow-hidden ${
        isLoaded ? " transition-all ease-in-out" : ""
      }`}
    >
      {/* for web */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden md:flex h-[100vh] w-[100vw]  justify-center items-center overflow-hidden"
      >
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </motion.div>
      {/* mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden h-[100vh] w-[100vw]  flex justify-center items-center"
      >
        <Lottie animationData={frameMobile} loop={false} />
      </motion.div>
    </div>
  );
};

export default Loader;
