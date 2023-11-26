import HeroText from "./HeroText";
import Navbar from "./Navbar";
import scroll from "../assets/scroll.svg";
import CountUp from "react-countup";

import { motion } from "framer-motion";
import frame from "../assets/Frame.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { bgURI } from "../utils/bgURI";
import gradient from "../assets/GradientCompressed.jpg";

const Hero = ({
  isLoaderDone,
  handleImageLoad,
  shouldRunAnimation,
  setShouldRunAnimation,
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    const animationDelay = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
    return () => {
      clearTimeout(animationDelay);
    };
  }, []);

  // const heroSectionStyle = {
  //   backgroundImage: `url(${bgURI})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  return (
    <div className="relative">
      <motion.div
        initial={isLoaderDone ? { opacity: 0 } : {}}
        animate={isLoaderDone ? { opacity: 1 } : {}}
        transition={isLoaderDone ? { delay: 0.2, duration: 1 } : {}}
        className={`hero z-10 relative h-[100vh]  overflow-hidden  `}
        // style={heroSectionStyle}
      >
        <aside className="-z-50 absolute top-0 left-0 h-[100vh] w-full">
          <img
            src={gradient}
            className="h-[100vh] w-full object-cover"
            alt=""
            onLoad={handleImageLoad}
          />
        </aside>
        {isLoaderDone ? (
          <>
            <div className="mt-[150px] md:mt-[210px] big:mt-[220px] lg:mt-[210px] flex h-[75%] md:h-[60%]   md:max-h-[700px] flex-col justify-between">
              <div className="">
                <HeroText
                  isLoaderDone={isLoaderDone}
                  shouldRunAnimation={shouldRunAnimation}
                  setShouldRunAnimation={setShouldRunAnimation}
                />
                {/* For mobile */}
                <motion.div
                  className="z-50 font-helvetica flex flex-wrap justify-around items-center md:hidden text-white border-[1px] rounded-[6px] py-[10px] px-[30px] min-w-[210px] w-[50%] min-h-[110px] gap-[15px] mx-auto mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={
                    shouldRunAnimation
                      ? { delay: 6.5, duration: 1 }
                      : { duration: 1 }
                  }
                >
                  <p className="w-[35%]  text-center text-[20px] font-bold leading-[13px]">
                    <CountUp
                      start={0}
                      end={1500}
                      duration={1.3}
                      scrollSpyOnce
                      delay={shouldRunAnimation ? 7 : 2}
                      separator=""
                    />
                    + <br />{" "}
                    <span className="text-[10px] font-normal">Students</span>
                  </p>
                  <p className="w-[35%]  text-center text-[20px] font-bold leading-[13px]">
                    <CountUp
                      start={0}
                      end={50}
                      duration={1.3}
                      scrollSpyOnce
                      delay={shouldRunAnimation ? 7 : 2}
                      separator=""
                    />
                    + <br />{" "}
                    <span className="text-[10px] font-normal">Startups</span>
                  </p>
                  <p className="w-[35%]  text-center text-[20px] font-bold leading-[13px]">
                    <CountUp
                      start={0}
                      end={1200}
                      duration={1.3}
                      scrollSpyOnce
                      delay={shouldRunAnimation ? 7 : 2}
                      separator=""
                    />
                    + <br />{" "}
                    <span className="text-[10px] font-normal">Internships</span>
                  </p>
                  <p className="w-[35%]  text-center text-[20px] font-bold leading-[13px]">
                    <CountUp
                      start={0}
                      end={450}
                      duration={1.3}
                      scrollSpyOnce
                      delay={shouldRunAnimation ? 7 : 2}
                    />
                    + <br />{" "}
                    <span className="text-[10px] font-normal">Events</span>
                  </p>
                </motion.div>
              </div>
              <motion.img
                initial={shouldRunAnimation ? { opacity: 0 } : {}}
                animate={shouldRunAnimation ? { opacity: 1 } : {}}
                transition={{ delay: 8, duration: 1 }}
                src={scroll}
                className="relative mt-12 md:mt-0 block mx-auto custom-bounce animate-duration-500"
                alt=""
              />
            </div>
          </>
        ) : (
          <></>
        )}

        {isLoaderDone ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-full top-40 hidden md:block"
          >
            {startAnimation && <Lottie animationData={frame} loop={false} />}
          </motion.div>
        ) : (
          <></>
        )}
      </motion.div>

      {/* for desktop */}

      {isLoaderDone ? (
        <motion.div
          className="hidden md:flex px-10 relative z-20 pt-10 pb-4 w-[85%] -mt-16 rounded-[20px] mx-auto bg-white font-helvetica  border-[2px] border-black justify-around items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-6xl font-bold leading-7 ">
            <CountUp
              start={0}
              end={1500}
              duration={1.3}
              scrollSpyOnce
              delay={shouldRunAnimation ? 9 : 2}
              separator=""
            />
            + <br /> <span className="text-2xl font-medium pl-2">Students</span>
          </p>
          <p className="text-6xl font-bold leading-7">
            <CountUp
              start={0}
              end={50}
              duration={1.3}
              scrollSpyOnce
              delay={shouldRunAnimation ? 9 : 2}
            />
            + <br /> <span className="text-2xl font-medium">Startups</span>
          </p>
          <p className="text-6xl font-bold leading-7">
            <CountUp
              start={0}
              end={1200}
              duration={1.3}
              scrollSpyOnce
              delay={shouldRunAnimation ? 9 : 2}
              separator=""
            />
            + <br />{" "}
            <span className="text-2xl font-medium pl-2">Internships</span>
          </p>
          <p className="text-6xl font-bold leading-7">
            <CountUp
              start={0}
              end={450}
              duration={1.3}
              scrollSpyOnce
              delay={shouldRunAnimation ? 9 : 2}
            />
            + <br /> <span className="text-2xl font-medium">Events</span>
          </p>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Hero;
