import join_main from "../assets/join_main.svg";
import join_1 from "../assets/join_1.svg";
import join_2 from "../assets/join_2.svg";
import join_3 from "../assets/join_3.svg";

import joinMobile from "../assets/joinMainMobile.svg";
import join1Mobile from "../assets/join1Mobile.svg";
import join2Mobile from "../assets/join2Mobile.svg";
import join3Mobile from "../assets/join3Mobile.svg";

import { motion } from "framer-motion";

const JoinSection = () => {
  const linkUrl = "https://nas.io/get.sync";
  return (
    <section className="pb-20">
      <div className="py-10 w-[85%] mx-auto">
        <motion.img
          src={joinMobile}
          className="block md:hidden w-full mt-20 mb-8"
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={join_main}
          className="hidden md:block w-full mt-20 mb-8"
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="text-justify md:text-center text-[14px]  md:text-[20px] font-noto font-[500] "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Welcome to our vibrant community, where connection, learning, and
          growth take centre stage. Our platform bridges the gap between
          students seeking valuable internships, mentors eager to share their
          expertise, and founders in search of top-tier talent.
        </motion.p>
        <motion.p
          className="hidden md:block text-center text-[14px]  md:text-[20px] font-noto font-[500] mt-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          By coming together, we pave the way for a brighter and more promising
          future, empowering individuals to thrive and succeed.
        </motion.p>
      </div>

      <div>
        <motion.h1
          className=" mt-24 mb-10 text-[32px] md:text-[40px] big:text-[44px] lg:text-[48px] font-normal text-center font-sedan"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          WHO CAN JOIN ?
        </motion.h1>

        <div className="space-y-20 max-w-[95%] mx-auto relative">
          <div className="flex flex-col md:flex-row md:gap-6 big:w-[95%] lg:w-[85%] mx-auto justify-around ">
            <div>
              <motion.img
                src={join_1}
                className="hidden md:block"
                alt=""
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={join1Mobile}
                className="z-0 md:hidden block mx-auto"
                alt=""
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="z-10 max-w-[80%] -mt-6 md:mt-0 mx-auto md:mx-0 md:w-[760px] xl:h-[291px] bg-white border-[1px] md:border-r-[2px] md:border-b-[4px] border-black rounded-[6px] md:rounded-[10px] py-[8px] md:py-[12px] px-[10px] md:px-[30px] "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-[77%]">
                <h2 className="text-[16px] md:text-[24px] big:text-[26px] lg:text-[28px] text-center md:text-left font-bold md:font-semibold font-sans">
                  STUDENTS
                </h2>
                <p className="text-[12px] md:text-[17px] big:text-[19px] lg:text-[20px] mt-[4px] text-justify md:text-left">
                  Whether you're a high school or college student seeking
                  internships, we welcome you to join us. We offer internship
                  opportunities to every student, irrespective of your
                  background or qualifications, as we believe that internships
                  should be accessible to all.
                </p>
              </div>

              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <button className="mb-[2px] md:mb-0 text-[12px] md:text-[16px] bg-[#A244C3] font-semibold text-white py-[3px] md:py-[10px] px-[16px] rounded-[3px] md:rounded-[5px] border-[1px] border-b-[2px] border-r-[2px] border-black md:border-r-[3px] md:border-b-[4px] block mx-auto mt-[4px]">
                  JOIN NOW
                </button>
              </a>
            </motion.div>
          </div>

          <div className="flex big:w-[95%] lg:w-[85%] md:gap-6 flex-col-reverse md:flex-row  mx-auto  justify-around ">
            <motion.div
              className="max-w-[80%] -mt-6 md:mt-0  mx-auto md:mx-0 md:w-[760px] xl:h-[300px] bg-white border-[1px] md:border-r-[2px] md:border-b-[4px] border-black rounded-[6px] md:rounded-[10px] py-[8px] md:py-[12px] px-[10px] md:px-[30px] z-10"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-[77%]">
                <h2 className="text-[16px] md:text-[24px] big:text-[26px] lg:text-[28px] text-center md:text-left font-bold md:font-semibold font-sans">
                  STARTUPS
                </h2>
                <p className="text-[12px] md:text-[17px] big:text-[19px] lg:text-[20px] mt-[4px] text-justify md:text-left">
                  Connect with our platform to tap into a pool of motivated,
                  internship-seeking talent. Identify potential future hires,
                  foster relationships with emerging talent, and offer
                  mentorship opportunities to students.{" "}
                  <span className="md:hidden">
                    {" "}
                    Showcase your organization's distinct culture, values, and
                    programs to attract top talent. Elevate your recruitment
                    game with us.
                  </span>
                </p>
                <p className="hidden md:block text-[12px] md:text-[17px] big:text-[19px] lg:text-[20px] md:mt-1">
                  Showcase your organization's distinct culture, values, and
                  programs to attract top talent. Elevate your recruitment game
                  with us.
                </p>
              </div>
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <button className="mb-[2px] md:mb-0 text-[12px] md:text-[16px] bg-[#A244C3] font-semibold text-white py-[3px] md:py-[10px] px-[16px] rounded-[3px] md:rounded-[5px] border-[1px] border-b-[2px] border-r-[2px] border-black md:border-r-[3px] md:border-b-[4px] block mx-auto mt-[10px]">
                  JOIN NOW
                </button>
              </a>
            </motion.div>
            <div>
              <motion.img
                src={join_2}
                className="hidden md:block"
                alt=""
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={join2Mobile}
                className="md:hidden block mx-auto z-10"
                alt=""
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="flex big:w-[95%] lg:w-[85%] md:gap-6 flex-col md:flex-row  mx-auto  justify-around">
            <div>
              <motion.img
                src={join_3}
                className="hidden md:block"
                alt=""
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={join3Mobile}
                className="md:hidden block mx-auto z-0"
                alt=""
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="max-w-[80%] mx-auto md:mx-0 md:w-[760px] xl:h-[300px] bg-white border-[1px] md:border-r-[3px] md:border-b-[4px] border-black rounded-[6px] md:rounded-[10px] py-[8px] md:py-[12px] px-[10px] md:px-[30px] z-10"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-[77%]">
                <h2 className="text-[16px] md:text-[24px] big:text-[26px] lg:text-[28px] text-center md:text-left font-bold md:font-semibold font-sans">
                  MENTORS
                </h2>
                <p className="text-[12px] md:text-[17px] big:text-[19px] lg:text-[20px] mt-[4px] text-justify md:text-left">
                  Join our community and become an invaluable resource for both
                  students and founders.
                  <span className="md:hidden">
                    {" "}
                    Share your expertise with the next generation and gain
                    exposure for your services. Connect with motivated students
                    seeking guidance and collaborate with innovative founders.
                  </span>
                </p>
                <p className="hidden md:block text-[12px] md:text-[17px] big:text-[19px] lg:text-[20px] md:mt-2">
                  Share your expertise with the next generation and gain
                  exposure for your services. Connect with motivated students
                  seeking guidance and collaborate with innovative founders.
                </p>
              </div>
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <button className="mb-[2px] md:mb-0 text-[12px] md:text-[16px] bg-[#A244C3] font-semibold text-white py-[3px] md:py-[10px] px-[16px] rounded-[3px] md:rounded-[5px] border-[1px] border-b-[2px] border-r-[2px] border-black md:border-r-[3px] md:border-b-[4px] block mx-auto mt-[10px]">
                  JOIN NOW
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
