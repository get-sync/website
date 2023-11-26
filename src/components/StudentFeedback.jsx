import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import profile from "../assets/studentProfile.svg";
import quoteOpen from "../assets/quoteOpen.svg";
import { motion } from "framer-motion";

const StudentFeedback = () => {
  const slides = [
    {
      key: 1,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
    {
      key: 2,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
    {
      key: 3,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
  ];
  return (
    <motion.div
      className="mt-4 mb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        watchSlidesProgress={true}
        initialSlide={0}
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper  mx-auto text-white font-kite"
      >
        {slides.map((card) => (
          <SwiperSlide
            key={card.key}
            className="max-w-[95%] w-[65%] min-w-[330px] min-h-[500px] md:w-[540px] md:h-[500px] mx-[15px] md:mx-[50px] flex items-center"
          >
            {({ isActive }) => (
              <div
                className={`bg-[#E95557]  mx-auto w-full rounded-[8px] md:rounded-[15px] border-2 border-black px-[38px]  py-[25px] ${
                  isActive
                    ? "opacity-100 h-full"
                    : "px-[20px] opacity-60 w-[500px] h-[370px] "
                } transition-all ease-in-out`}
              >
                <div
                  className={`flex flex-col items-center  ${
                    isActive ? "" : ""
                  } `}
                >
                  <img
                    src={profile}
                    alt=""
                    className={`mb-6 ${
                      isActive
                        ? "w-[180px] h-[180px] md:w-[230px] md:h-[230px]"
                        : "w-[150px] h-[150px] md:w-[185px] md:h-[185px]"
                    }`}
                  />
                  <div className="flex flex-col px-1 ">
                    <img src={quoteOpen} alt="" className={`w-[26px] `} />
                    <p
                      className={`block px-[25px] ${
                        isActive ? "text-[16px]" : "text-[10px]"
                      } font-semibold`}
                    >
                      {card.content}
                    </p>
                    <div
                      className={`flex items-center self-end gap-10 ${
                        isActive ? "" : ""
                      }`}
                    >
                      <p
                        className={`font-sedan text-right ${
                          isActive ? "text-[20px]" : " text-[14px]"
                        }`}
                      >
                        -{card.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="mt-32">
        <motion.div
          className="bg-white mx-auto rounded-[10px] w-[60%] md:w-[700px] big:w-[850px] lg:w-[900px] border-[1px] border-black px-[30px] py-[15px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="">
            <h3 className="text-[18px] md:text-[22px] leading-[26px] text-center md:text-left font-semibold">
              Join us at <span className="font-bold">getSync</span>
            </h3>
            <p className="mt-2 md:mt-0 text-[14px] md:text-[20px] leading-[23px] text-center md:text-left ">
              and contribute to the fastest growing student community of India
            </p>
          </div>
          <a
            href="https://nas.io/get.sync"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold text-[12px] md:text-[14px] big:text-[18px] lg:text-[20px] bg-[#FFED48] text-black border-[1px] md:border-2 border-black border-b-[2px] border-r-[2px] md:border-b-[3px] md:border-r-[3px] block rounded-[5px] px-[20px] big:px-[30px] py-1 md:py-2  w-fit">
              APPLY NOW
            </button>
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default StudentFeedback;
