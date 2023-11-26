import React from "react";
import gradient from "../assets/Gradient.jpg";
import ringNumbers from "../assets/ringNumbers.svg";

import { motion } from "framer-motion";

const SyncSelect = () => {
  return (
    <div className="h-[840px] xs:h-[800px] s:h-[820px] sm:h-[900px] big:h-[1110px] relative my-10 py-[30px] s:py-[40px] sm:py-[45px] md:py-[60px] big:py-[100px] px-[8px] xs:px-[15px] sm:px-[40px] md:px-[60px] big:px-[100px] lg:px-[150px] text-white">
      <aside className="-z-50 absolute top-0 left-0 h-[840px] xs:h-[800px] s:h-[820px] sm:h-[900px] big:h-[1110px] w-full">
        <img src={gradient} className="h-full w-full object-cover" alt="" />
      </aside>
      <section>
        <motion.h1
          className="px-6 text-[32px] md:text-[46px] big:text-[52px] lg:text-[56px] xl:text-[60px] leading-[35px] md:leading-[70px] font-helvetica font-semibold"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What Is <span className="text-[#FFED48]">Sync Select</span> ?
        </motion.h1>
        <div className="mt-4 sm:mt-8 big:mt-12 space-y-2 sm:space-y-4 md:space-y-8 text-justify font-cabin italic text-[13px] md:text-[16px] big:text-[20px] px-6">
          <motion.p
            className="sm:leading-[24px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            SyncSelect is an exclusive badge designated for specific internships
            posted within our group, indicating a notable probability of
            opportunity for potential candidates. These internships undergo a
            rigorous manual verification process, with the initial selection
            managed by getsync to ensure fairness and eliminate any undue
            advantages, thereby promoting a transparent and equitable selection
            procedure.{" "}
          </motion.p>
          <motion.p
            className="sm:leading-[24px] hidden s:block"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Internships featuring the SyncSelect badge not only offer candidates
            an increased likelihood of securing the position but also provide
            access to valuable feedback for ongoing professional development.
            This meticulous approach underscores our commitment to offering
            equal opportunities and a rewarding experience within our posted
            internships.
          </motion.p>
        </div>
      </section>

      {/* for desktop */}
      <section className="hidden md:flex mt-16 lg:mt-28  w-[85%] gap-8 big:min-w-[900px] mx-auto justify-between">
        <motion.div
          className="mt-[50px] font-helvetica text-[13px] md:text-[16px] big:text-[20px] lg:text-[22px] w-[330px] font-normal space-y-[120px] big:space-y-[180px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className=" leading-[26px]">
            Join the WhatsApp community and apply for the internships marked as
            'Sync Select'
          </p>
          <p className="leading-[26px]">
            Then the Students will be directed to the company's interview round.
          </p>
        </motion.div>
        <div>
          <motion.img
            src={ringNumbers}
            alt=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.div
          className="mt-[120px] big:mt-[170px] font-helvetica text-[13px] md:text-[16px] big:text-[20px] lg:text-[22px] w-[320px] font-normal space-y-[130px] big:space-y-[170px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="leading-[26px]">
            Selected students will receive guidance to enhance their skills and
            knowledge.
          </p>
          <p className="leading-[26px]">
            Hurray! You did it! You've successfully secured an internship.
          </p>
        </motion.div>
      </section>

      {/* for mobile */}
      <section className="md:hidden  xs:mt-8 s:mt-14 sm:mt-12  ">
        <motion.div
          className="w-[80%] sm:w-[90%] md:w-[80%] flex flex-col sm:flex-row items-center sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[40px] xs:text-[50px] sm:text-[70px]  text-[#FFED48] font-bold border-[#FFED48] border-[3px] rounded-[100px] h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] px-2 flex justify-center items-center">
            01
          </h1>
          <div className=" text-white">
            <p className="text-[12px] sm:text-[14px] md:text-[20px] sm:text-left text-center">
              Join the WhatsApp community and apply for the internships marked
              as 'Sync Select'
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center  sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[40px] xs:text-[50px] sm:text-[70px]  text-[#FFED48] font-bold border-[#FFED48] border-[3px] rounded-[100px] h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] px-2 flex justify-center items-center">
            02
          </h1>
          <div className=" text-white">
            <p className="text-[12px] sm:text-[14px] md:text-[20px] sm:text-left text-center">
              Then the Students will be directed to the company's interview
              round.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[40px] xs:text-[50px] sm:text-[70px]  text-[#FFED48] font-bold border-[#FFED48] border-[3px] rounded-[100px] h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] px-2 flex justify-center items-center">
            03
          </h1>
          <div className=" text-white">
            <p className="text-[12px] sm:text-[14px] md:text-[20px] sm:text-left text-center">
              Selected students will receive guidance to enhance their skills
              and knowledge.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center  sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[40px] xs:text-[50px] sm:text-[70px]  text-[#FFED48] font-bold border-[#FFED48] border-[3px] rounded-[100px] h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] px-2 flex justify-center items-center">
            04
          </h1>
          <div className=" text-white">
            <p className="text-[12px] sm:text-[14px] md:text-[20px] sm:text-left text-center">
              Hurray! You did it! You've successfully secured an internship.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SyncSelect;
