import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const Performers = () => {
  return (
    <div className="mb-32 w-[90%] big:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto">
      <motion.h1
        className="font-sedan text-center text-[32px] md:text-[46px] big:text-[52px] lg:text-[56px] xl:text-[60px] text-[#800080]"
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Top Performers
      </motion.h1>
      <section className="mt-6 space-y-8">
        <motion.div
          className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-0 "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="min-w-[200px] w-[25%] flex flex-col items-center">
            <img src={profile} className="mb-2 " alt="" />
            <h3 className="font-medium">JAYA</h3>
            <p>Community Volunteer</p>
            <p>Nov 2023 - till date</p>
          </div>
          <div className="min-w-[200px]  w-[25%] flex flex-col items-center">
            <img src={profile} className="mb-2 " alt="" />
            <h3 className="font-medium">AVI</h3>
            <p>Community Volunteer</p>
            <p>Nov 2023 - till date</p>
          </div>
          <div className="min-w-[200px]  w-[25%] flex flex-col items-center">
            <img src={profile} className="mb-2 " alt="" />
            <h3 className="font-medium">HARSH</h3>
            <p>Community Volunteer</p>
            <p>Nov 2023 - till date</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-0 "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="min-w-[200px]  w-[25%] flex flex-col items-center">
            <img src={profile} className="mb-2" alt="" />
            <h3 className="font-medium">JAYA</h3>
            <p>Community Representative</p>
            <p>Jul - Sept 2023</p>
          </div>
          <div className="min-w-[200px]  w-[25%] flex flex-col items-center">
            <img src={profile} className="mb-2" alt="" />
            <h3 className="font-medium">AVI</h3>
            <p>Community Representative</p>
            <p>Jul - Sept 2023</p>
          </div>
          <div className="min-w-[200px]  w-[25%] flex flex-col items-center">
            <img src={profile} className="mb-2" alt="" />
            <h3 className="font-medium">HARSH</h3>
            <p>Community Representative</p>
            <p>Jul - Sept 2023</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Performers;
