import React from "react";
import WhyUsImg from "../assets/WhyUsImg.svg";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="py-20 ">
      <motion.img
        src={WhyUsImg}
        className="mx-auto"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default WhyUs;
