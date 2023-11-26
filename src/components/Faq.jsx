import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IndicatorOpen } from "../utils/IndicatorOpen";
import { IndicatorMobile } from "../utils/IndicatorMobile";

import { motion } from "framer-motion";
const Faq = () => {
  const content = [
    {
      key: 1,
      title: "1. What is getSync ?",
      desc: "getSync is a community based  platform that bridges the gap between students seeking valuable internships, mentors eager to share their expertise, and founders in search of top-tier talent.",
    },
    {
      key: 2,
      title: "2. Why would anyone join getSync Community ?",
      desc: "Students join for internship opportunities and mentorship, while founders seek a talented pool and valuable networking.",
    },
    {
      key: 3,
      title: "3. Do I have to pay for something ?",
      desc: "No, the community services are completely FREE.",
    },
  ];
  const contentMobile = [
    {
      key: 1,
      title: "What is getSync ?",
      desc: "getSync is a community based  platform that bridges the gap between students seeking valuable internships, mentors eager to share their expertise, and founders in search of top-tier talent.",
    },
    {
      key: 2,
      title: "Why would anyone join getSync Community ?",
      desc: "Students join for internship opportunities and mentorship, while founders seek a talented pool and valuable networking.",
    },
    {
      key: 3,
      title: "Do I have to pay for something ?",
      desc: "No, the community services are completely FREE.",
    },
  ];
  return (
    <div className="py-6 md:py-10">
      <motion.h1
        className="font-sedan text-[32px] md:text-[40px] big:text-[44px] lg:text-[48px] text-center"
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        FAQs
      </motion.h1>
      {/* for mobile */}
      <motion.div
        className="md:hidden w-[95%] mx-auto mt-10 mb-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Accordion variant="splitted">
          {contentMobile.map((c) => (
            <AccordionItem
              key={c.key}
              style={{
                marginBottom: "15px",
                border: "1px solid black",
                minHeight: "60px",
                fontWeight: "500",
              }}
              title={c.title}
              indicator={<IndicatorMobile />}
              className="font-helvetica text-[14px]"
            >
              <p className="pl-[8px] pb-[4px] font-normal text-[14px] font-helvetica">
                {c.desc}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
      {/* for desktop */}
      <motion.div
        className="hidden md:block w-[85%] mx-auto mt-10 mb-10"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Accordion variant="splitted">
          {content.map((c) => (
            <AccordionItem
              key={c.key}
              style={{
                marginBottom: "40px",
                border: "2px solid black",
                fontSize: "20px",
                minHeight: "77px",
                fontWeight: "700",
                paddingTop: "4px",
                paddingBottom: "3px",
              }}
              title={c.title}
              indicator={<IndicatorOpen />}
              className="font-noto"
            >
              <p className="px-8 pb-6 font-normal text-[20px] font-helvetica">
                {c.desc}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Faq;
