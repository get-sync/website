import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import profile from "../assets/profileMobile.svg";
import quoteOpen from "../assets/quoteOpen.svg";
import quoteClose from "../assets/quoteClose.svg";
import star from "../assets/star.svg";

import { motion } from "framer-motion";

const Feedback = () => {
  const slides = [
    {
      key: 1,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
    {
      key: 2,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
    {
      key: 3,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
  ];
  return (
    <motion.div
      className="mt-2 mb-32"
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
            className="md:w-[690px]  max-w-[65%] md:max-w-none h-[400px] mx-[20px] md:mx-[50px] md:h-[275px] flex items-center"
          >
            {({ isActive }) => (
              <div
                className={`bg-[#E95557]  w-full rounded-[8px] md:rounded-[15px] border-2 border-black md:border-b-[5px] md:border-r-[4px] md:px-[55px] py-[25px] ${
                  isActive
                    ? "opacity-100 h-full"
                    : "px-[20px] md:px-[40px] opacity-60 h-[330px] md:h-[210px]"
                } transition-all ease-in-out`}
              >
                <div
                  className={`flex flex-col md:flex-row items-center  ${
                    isActive ? "md:gap-10" : "md:gap-4"
                  } `}
                >
                  <img
                    src={profile}
                    alt=""
                    className={` ${
                      isActive ? "w-[140px] h-[140px]" : "w-[100px] h-[100px]"
                    }`}
                  />
                  <div className="flex flex-col mt-2 md:mt-0  md:w-auto gap-3 px-1 md:px-0">
                    <img
                      src={quoteOpen}
                      alt=""
                      className={`w-[15px] ml-3 md:ml-0 md:w-[42px]`}
                    />
                    <p
                      className={`md:hidden px-5 md:px-0 font-helvetica ${
                        isActive
                          ? "text-[12px] md:text-[17px]"
                          : "text-[11px] md:text-[14px]"
                      } font-semibold`}
                    >
                      Join this vibrant student community for knowledge,
                      support, and lifelong connections. A hub of learning,
                      sharing, and growth awaits you!
                    </p>
                    <p
                      className={`md:block hidden  ${
                        isActive ? "text-[17px]" : "text-[14px]"
                      } font-semibold`}
                    >
                      {card.content}
                    </p>
                    <img
                      src={quoteClose}
                      alt=""
                      className={`w-[15px] mr-3 md:mr-0 md:w-[42px] self-end`}
                    />
                    <div
                      className={`flex items-center self-center gap-10 ${
                        isActive ? "" : " md:-mt-10"
                      }`}
                    >
                      <img
                        src={star}
                        alt=""
                        className={`${
                          isActive ? "w-[100px] md:w-auto" : "w-[110px]"
                        }`}
                      />
                      <p
                        className={`font-sedan ${
                          isActive ? "" : " text-[14px]"
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
    </motion.div>
  );
};

export default Feedback;
