import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import TypeWriterText from "./TypeWriterText";
import { useEffect, useState } from "react";

const HeroText = ({ shouldRunAnimation, setShouldRunAnimation }) => {
  // Run only once logic

  useEffect(() => {
    // Check if the animation has already run (using local storage or any other persistent storage)
    const hasAnimationRunBefore = localStorage.getItem("hasAnimationRunBefore");

    if (hasAnimationRunBefore) {
      setShouldRunAnimation(false);
    } else {
      // Set the flag indicating that the animation has run
      localStorage.setItem("hasAnimationRunBefore", "true");
    }
  }, []);

  return (
    <div className="flex justify-center mt-8 lg:mt-0 lg:items-center h-[270px] sm:h-[280px] w-full">
      {/* for desktop */}
      <div className="hidden md:block lg:mt-12 xl:mt-16 md:h-[185px]">
        <div className="md:h-[100px] big:h-[110px] lg:h-[120px] mx-6 md:mx-0">
          <motion.h2
            initial={shouldRunAnimation ? { y: -50, opacity: 0 } : {}}
            animate={shouldRunAnimation ? { y: 0, opacity: 1 } : {}}
            transition={
              shouldRunAnimation
                ? {
                    delay: 2.3,
                    duration: 1,
                  }
                : {}
            }
            className=" leading-6 text-[#FFED48] text-center py-[2px] px-[15px] w-fit md:w-full rounded-[12px] bg-black md:bg-transparent text-[16px] md:text-[24px] big:text-[26px] lg:text-[28px] xl:text-[30px] font-helvetica"
          >
            A Community Where
          </motion.h2>
          <motion.h1
            className=" font-helvetica mt-3 md:mt-0 md:text-center text-white font-[600] text-[45px] md:text-[38px] big:text-[40px] lg:text-[50px] xl:text-[60px] tracking-[2px] leading-[45px] md:leading-none"
            initial={shouldRunAnimation ? { opacity: 0, scale: 0.85 } : {}}
            animate={shouldRunAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 3 }}
          >
            Talent meets Opportunity
          </motion.h1>
        </div>
        <motion.p
          initial={shouldRunAnimation ? { opacity: 0 } : {}}
          animate={shouldRunAnimation ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 4 }}
          className="mt-6 md:-mt-4 min-w-[300px] max-w-[500px] md:w-[520px] text-white mx-6 md:mx-auto md:text-center text-[17px] md:text-[19px] leading-[22px] md:leading-0"
        >
          <Typewriter
            words={[
              "",
              "getSync is a community-based platform that empowers students and founders to learn, earn, and network",
            ]}
            typeSpeed={shouldRunAnimation ? 32 : 25}
            delaySpeed={shouldRunAnimation ? 4000 : 0}
          />
          {/* <TypeWriterText /> */}
        </motion.p>
      </div>

      {/* for mobile */}
      <div className=" md:hidden lg:mt-12 xl:mt-16 md:h-[185px]">
        <div className="md:h-[100px] big:h-[110px] lg:h-[120px] mx-6 md:mx-0">
          <motion.h2
            initial={
              shouldRunAnimation ? { x: -65, opacity: 0 } : { opacity: 0 }
            }
            animate={shouldRunAnimation ? { x: 0, opacity: 1 } : { opacity: 1 }}
            transition={
              shouldRunAnimation
                ? {
                    delay: 1.8,
                    duration: 1,
                  }
                : { duration: 1 }
            }
            className=" leading-6 text-[#FFED48] text-center py-[2px] px-[15px] w-fit md:w-full rounded-[12px] bg-black md:bg-transparent text-[16px] md:text-[24px] big:text-[26px] lg:text-[28px] xl:text-[30px] font-helvetica"
          >
            A Community Where
          </motion.h2>
          <motion.h1
            className=" font-helvetica mt-3 md:mt-0 md:text-center text-white font-[600] text-[45px] md:text-[38px] big:text-[40px] lg:text-[50px] xl:text-[60px] tracking-[2px] leading-[45px] md:leading-none"
            initial={
              shouldRunAnimation ? { opacity: 0, scale: 0.85 } : { opacity: 0 }
            }
            animate={
              shouldRunAnimation ? { opacity: 1, scale: 1 } : { opacity: 1 }
            }
            transition={
              shouldRunAnimation
                ? { duration: 0.9, delay: 2.5 }
                : { duration: 1 }
            }
          >
            Talent meets Opportunity
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            shouldRunAnimation ? { duration: 1, delay: 3 } : { duration: 1 }
          }
          className="mt-6 md:-mt-4 min-w-[300px] max-w-[500px] md:w-[520px] text-white mx-6 md:mx-auto md:text-center text-[17px] md:text-[19px] leading-[22px] md:leading-0"
        >
          <Typewriter
            words={[
              "",
              "getSync is a community-based platform that empowers students and founders to learn, earn, and network",
            ]}
            typeSpeed={shouldRunAnimation ? 32 : 25}
            delaySpeed={shouldRunAnimation ? 3000 : 0}
          />
          {/* <TypeWriterText /> */}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
