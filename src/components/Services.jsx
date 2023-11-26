import bullet from "../assets/bullet.svg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="py-20">
      <div>
        <motion.h1
          className="text-center font-sedan text-[32px] md:text-[40px] big:text-[44px] lg:text-[48px] mb-4"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 p-4 tracking-wide ">
        <motion.div
          className="flex flex-col bg-[#7B209B] border-2 border-black md:border-r-4 md:border-b-5 md:w-[595px] lg:h-[500px] rounded-[6px] md:rounded-[20px] px-[20px] md:px-[30px] py-[20px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-[85%]">
            <h1 className="text-[#FFED48] font-semibold text-[18px] md:text-[32px] big:text-[36px] lg:text-[40px] md:text-center mb-2">
              STUDENTS
            </h1>
            <ul className="text-white text-[12px] md:text-[22px] space-y-1 md:space-y-2 list-disc md:px-4 md:pr-8">
              <li className="flex gap-2 md:gap-4  items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Regular Internship Updates
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Competitions, Events & Hackathons Updates
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Community of Students Across India
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Guaranteed Internships
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Engaging Meet-ups{" "}
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                1:1 Mentorship Sessions
              </li>
            </ul>
          </div>
          <button className="mt-4 md:mt-12 font-bold md:w-[190px] text-[12px] md:text-[16px] big:text-[18px] lg:text-[20px] bg-[#FFED48] border-[1px] md:border-2 border-black border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] block md:mx-auto rounded-[5px] px-2 py-1 md:py-2 md:shadow-sm md:shadow-black w-fit self-end">
            KNOW MORE
          </button>
        </motion.div>
        <motion.div
          className="flex flex-col bg-[#7B209B] border-2 border-black md:border-r-4 md:border-b-5 md:w-[595px] lg:h-[500px] rounded-[6px] md:rounded-[20px] px-[20px] md:px-[30px] py-[20px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-[85%]">
            <h1 className="text-[#FFED48] font-semibold text-[18px] md:text-[32px] big:text-[36px] lg:text-[40px] md:text-center mb-2">
              STARTUPS
            </h1>
            <ul className="text-white text-[12px] md:text-[22px] space-y-1 md:space-y-2 list-disc md:px-4 big:pr-14">
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Hire talented Interns
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Connects with other entrepreneurs
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Exclusive Resources(Podcasts, Blogs etc)
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Connect & Collaborate with students from all across India
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Mentorship session with experts
              </li>
              <li className="flex gap-2 md:gap-4 items-baseline">
                <img src={bullet} className="w-[12px] md:w-auto" alt="" />
                Regular Meetups
              </li>
            </ul>
          </div>
          <button className="mt-4 md:mt-12 font-bold md:w-[190px] text-[12px] md:text-[16px] big:text-[18px] lg:text-[20px] bg-[#FFED48] border-[1px] md:border-2 border-black border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] block md:mx-auto rounded-[5px] px-2 py-1 md:py-2 md:shadow-sm md:shadow-black w-fit self-end">
            KNOW MORE
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
