import React from "react";
import { motion } from "framer-motion";

const StudentJoin = ({ isLoaderDone }) => {
  return (
    <div className="py-20">
      <motion.h1
        className="text-center  text-[32px] md:text-[46px] big:text-[52px] lg:text-[56px] xl:text-[60px] font-sedan text-[#800080] leading-[
80px]"
        initial={{ opacity: 0, y: -70 }}
        whileInView={isLoaderDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Why Should You <br /> Join The Community ?
      </motion.h1>

      <section className="font-helvetica big:-space-y-10">
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center justify-between sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[90px] md:text-[140px] big:text-[160px] lg:text-[190px] xl:text-[200px] text-[#A244C3] opacity-50 font-bold">
            01
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-[#232323]">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] lg:text-[38px] xl:text-[40px] leading-[40px] md:leading-[50px] lg:leading-[64px] font-medium sm:text-left text-center">
              Regular Internship Updates
            </h2>
            <p className="text-[16px] md:text-[20px] sm:text-left text-justify">
              Stay informed about the latest internship opportunities in various
              fields to enhance your practical skills and gain valuable work
              experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center justify-between sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[90px] md:text-[140px] big:text-[160px] lg:text-[190px] xl:text-[200px] text-[#A244C3] opacity-50 font-bold">
            02
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-[#232323]">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] lg:text-[38px] xl:text-[40px] leading-[40px] md:leading-[50px] lg:leading-[64px] font-medium sm:text-left text-center">
              Competitions, Events & Hackathons
            </h2>
            <p className="text-[16px] md:text-[20px] sm:text-left text-justify">
              Access updates on competitions, events, and hackathons to
              challenge yourself, showcase your abilities, and expand your
              network within the community.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center justify-between sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[90px] md:text-[140px] big:text-[160px] lg:text-[190px] xl:text-[200px] text-[#A244C3] opacity-50 font-bold">
            03
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-[#232323]">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] lg:text-[38px] xl:text-[40px] leading-[40px] md:leading-[50px] lg:leading-[64px] font-medium sm:text-left text-center">
              Engaging Meet-ups
            </h2>
            <p className="text-[16px] md:text-[20px] sm:text-left text-justify">
              Engage in a series of well-organized meetups, either in-person or
              virtually, offering a platform to interact with fellow students,
              industry professionals, and mentors. Participate in insightful
              discussions, workshops, and networking sessions.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[80%] sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row items-center justify-between sm:gap-10 md:gap-16 mx-auto mt-4 sm:mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[90px] md:text-[140px] big:text-[160px] lg:text-[190px] xl:text-[200px] text-[#A244C3] opacity-50 font-bold">
            04
          </h1>
          <div className="md:space-y-2 big:space-y-4 lg:space-y-6 text-[#232323]">
            <h2 className="text-[22px] md:text-[30px] big:text-[34px] lg:text-[38px] xl:text-[40px] leading-[40px] md:leading-[50px] lg:leading-[64px] font-medium sm:text-left text-center">
              1:1 Mentorship Sessions
            </h2>
            <p className="text-[16px] md:text-[20px] sm:text-left text-justify">
              Avail personalised guidance and mentorship through one-on-one
              sessions with experienced mentors. Receive advice, career insights
              to help and shape your academic and professional journey.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default StudentJoin;
