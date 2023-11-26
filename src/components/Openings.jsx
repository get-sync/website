import React from "react";
import { motion } from "framer-motion";

const Openings = ({ isLoaderDone }) => {
  return (
    <div className="font-helvetica my-28">
      <motion.h1
        className="text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-center"
        initial={{ opacity: 0, y: -70 }}
        whileInView={isLoaderDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        CURRENT OPENINGS
      </motion.h1>
      <section className="space-y-12 mt-10">
        <motion.div
          className="bg-white mx-auto rounded-[10px] w-[85%] border-[1px] border-black px-[10px] md:px-[50px] py-[15px] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={isLoaderDone ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="big:text-[20px] lg:text-[22px] font-medium">
              Community Volunteer
            </h3>
          </div>
          <div className="">
            <h3 className="text-[18px] lg:text-[20px] leading-[23px] ">
              Interest Role based work
            </h3>
            <p className="text-center md:text-left text-[18px] lg:text-[20px] leading-[23px] ">
              Part Time | Remote
            </p>
          </div>
          <a
            href="https://nas.io/get.sync"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold text-[12px] md:text-[16px] big:text-[18px] lg:text-[20px] bg-[#FFED48] text-black border-[1px] md:border-2 border-black border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] block rounded-[5px] px-[20px] md:px-[25px] big:px-[30px] py-1 md:py-2  w-fit">
              APPLY NOW
            </button>
          </a>
        </motion.div>
        <motion.div
          className="bg-white mx-auto rounded-[10px] w-[85%] border-[1px] border-black px-[10px] md:px-[50px] py-[15px] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={isLoaderDone ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="big:text-[20px] lg:text-[22px] font-medium">
              Community Representative
            </h3>
          </div>
          <div className="">
            <h3 className="text-[18px] lg:text-[20px] leading-[23px] ">
              Campus Ambassador Program
            </h3>
            <p className="text-center md:text-left text-[18px] lg:text-[20px] leading-[23px] ">
              Part Time | Remote
            </p>
          </div>
          <a
            href="https://nas.io/get.sync"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold text-[12px] md:text-[16px] big:text-[18px] lg:text-[20px] bg-[#FFED48] text-black border-[1px] md:border-2 border-black border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] block rounded-[5px] px-[20px] md:px-[25px] big:px-[30px] py-1 md:py-2  w-fit">
              APPLY NOW
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Openings;
