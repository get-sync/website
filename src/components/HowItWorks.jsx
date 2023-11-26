import React from "react";
import { motion } from "framer-motion";

const HowItWorks = ({ isLoaderDone }) => {
  return (
    <div className="my-20">
      <motion.h1
        className="font-sedan text-center text-[32px] md:text-[46px] big:text-[52px] lg:text-[56px] xl:text-[60px] text-[#800080]"
        initial={{ opacity: 0, y: -70 }}
        whileInView={isLoaderDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h1>
      <section className="my-10 flex flex-col md:flex-row flex-wrap items-center gap-[50px] font-helvetica justify-center">
        <motion.div
          className="flex flex-col gap-[20px] md:gap-[50px] bg-white max-w-[85%] sm:max-w-[400px] px-[25px] md:px-[50px] py-[30px] md:py-[50px] border-[1px] border-black rounded-[15px]"
          initial={{ opacity: 0 }}
          whileInView={isLoaderDone ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] font-sedan rounded-[100px] bg-[#FFED48] border-[1px] border-black flex justify-center items-center text-[38px] md:text-[54px] big:text-[60px] mx-auto">
            1
          </div>
          <h2 className="text-center text-[22px] md:text-[34px] big:text-[40px] font-medium">
            CONTACT
          </h2>
          <p className="text-[13px] md:text-[18px] big:text-[20px] text-justify md:leading-[23px]">
            Reach out to us by clicking the above Contact Us button. <br /> Let
            us know your internship requirements, and we'll guide you through
            the process.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[20px] md:gap-[50px] bg-white max-w-[85%] sm:max-w-[400px] px-[25px] md:px-[50px] py-[30px] md:py-[50px] border-[1px] border-black rounded-[15px]"
          initial={{ opacity: 0 }}
          whileInView={isLoaderDone ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] font-sedan rounded-[100px] bg-[#FFED48] border-[1px] border-black flex justify-center items-center text-[38px] md:text-[54px] big:text-[60px] mx-auto">
            2
          </div>
          <h2 className="text-center text-[22px] md:text-[34px] big:text-[40px] font-medium">
            CONVEY
          </h2>
          <p className="text-[13px] md:text-[18px] big:text-[20px] text-justify md:leading-[23px]">
            Provide essential details about your internship needs. <br />
            Convey the skills and qualities you're looking for in interns,
            ensuring a tailored recruitment process.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[20px] md:gap-[50px] bg-white max-w-[85%] sm:max-w-[400px] px-[25px] md:px-[50px] py-[30px] md:py-[50px] border-[1px] border-black rounded-[15px]"
          initial={{ opacity: 0 }}
          whileInView={isLoaderDone ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] font-sedan rounded-[100px] bg-[#FFED48] border-[1px] border-black flex justify-center items-center text-[38px] md:text-[54px] big:text-[60px] mx-auto">
            3
          </div>
          <h2 className="text-center text-[22px] md:text-[34px] big:text-[40px] font-medium">
            CONFIRM
          </h2>
          <p className="text-[13px] md:text-[18px] big:text-[20px] text-justify md:leading-[23px]">
            Once we've identified suitable interns, complete the process by
            one-on-one interaction. <br />
            Execute the formalities and get ready to welcome your interns.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HowItWorks;
