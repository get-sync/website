import React from "react";
import gradient from "../assets/GradientCompressed.jpg";
import studentHero from "../assets/studentHero.svg";

import { motion } from "framer-motion";

const StudentHero = ({ handleImageLoad, isLoaderDone }) => {
  return (
    <div className="h-[68vh] w-full ">
      <aside className="-z-50 absolute h-[68vh] w-full">
        <img
          src={gradient}
          className="h-full w-[100vw] object-cover"
          alt=""
          onLoad={handleImageLoad}
        />
      </aside>
      <header className="pt-[90px] pl-[10%] pr-[5px] md:px-[100px] h-full mx-auto">
        <div className="flex justify-between py-[60px] h-full items-center">
          <motion.div
            className="text-white flex flex-col gap-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={isLoaderDone ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-[28px] md:text-[36px] big:text-[40px] lg:text-[44px] xl:text-[48px] font-helvetica font-bold leading-[35px] md:leading-[40px] lg:leading-[50px] xl:leading-[58px]">
                Wanna earn by doing <br />{" "}
                <span className="text-[#FFED48]">Side Hustles</span> during
                college?
              </h2>
              <p className="mt-1 text-[13px] md:text-[14px] big:text-[16px] lg:text-[18px] xl:text-[20px] font-cabin italic leading-[24px] w-[75%]">
                Discover your ideal Internship and Freelance opportunities
                offered by startups
              </p>
            </div>
            <a
              href="https://nas.io/get.sync"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <button className="font-bold text-[12px] md:text-[16px] big:text-[18px] lg:text-[20px] bg-[#FFED48] text-black border-[1px] md:border-2 border-black border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] block rounded-[5px] px-[20px] md:px-[30px] py-1 md:py-2 md:shadow-sm md:shadow-black w-fit">
                JOIN NOW
              </button>
            </a>
          </motion.div>
          <div className="md:block hidden mx-auto min-w-[40%]">
            <motion.img
              src={studentHero}
              alt=""
              initial={{ opacity: 0, x: 100 }}
              whileInView={isLoaderDone ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default StudentHero;
