import du from "../assets/du.svg";
import cu from "../assets/cu.svg";
import su from "../assets/su.svg";
import au from "../assets/au.svg";
import lpu from "../assets/lpu.svg";
import aktu from "../assets/aktu.svg";
import { motion } from "framer-motion";

const Connections = () => {
  return (
    <div className="pt-24 pb-24">
      <motion.h2
        className="font-helvetica text-[16px] sm:text-[18px] md:text-[20px] text-center"
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        OUR COMMUNITY MEMBERS COME FROM
      </motion.h2>
      {/* <motion.div
        className="flex flex-col xs:flex-row flex-wrap items-center justify-around w-[80%] md:w-[98%] mx-auto gap-10 sm:gap-10 md:gap-6 big:gap-4 lg:gap-2 my-12 "
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={du}
          className="w-[15%] lg:w-[10%] min-w-[150px] md:w-[170px] lg:min-w-[200px] min-h-[100px]  object-contain"
          alt="DU"
        />
        <img
          src={lpu}
          className="w-[15%] lg:w-[10%] min-w-[150px] md:w-[170px] lg:min-w-[250px] min-h-[100px] object-contain"
          alt="LPU"
        />
        <img
          src={cu}
          className="w-[15%] lg:w-[10%] min-w-[150px] md:w-[170px] lg:min-w-[200px]  object-contain"
          alt="CU"
        />
        <img
          src={su}
          className="w-[15%] lg:w-[10%] min-w-[150px] md:w-[170px] lg:min-w-[200px]  min-h-[100px] object-contain"
          alt="SU"
        />
        <img
          src={au}
          className="w-[15%] lg:w-[10%] min-w-[150px] md:w-[170px] lg:min-w-[200px]   object-contain"
          alt="AU"
        />
        <img
          src={aktu}
          className="w-[15%] lg:w-[10%] min-w-[150px] md:w-[170px] lg:min-w-[200px]   object-contain"
          alt="AKTU"
        />
      </motion.div> */}
      <motion.div
        className="flex overflow-x-auto md:justify-around w-full sm:px-[40px] md:px-[50px] big:px-[100px] mx-auto my-12 gap-8 px-8"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={du}
          className="w-[80px] s:w-[90px] sm:w-[120px] md:w-[14%] big:w-[16%] lg:w-[18%]"
          alt="DU"
        />
        <img
          src={lpu}
          className="w-[80px] s:w-[90px] sm:w-[120px] md:w-[14%] big:w-[16%] lg:w-[18%]"
          alt="LPU"
        />
        <img
          src={cu}
          className="w-[80px] s:w-[90px] sm:w-[120px] md:w-[14%] big:w-[16%] lg:w-[18%]"
          alt="CU"
        />
        <img
          src={su}
          className="w-[80px] s:w-[90px] sm:w-[120px] md:w-[14%] big:w-[16%] lg:w-[18%]"
          alt="SU"
        />
        <img
          src={au}
          className="w-[80px] s:w-[90px] sm:w-[120px] md:w-[14%] big:w-[16%] lg:w-[18%]"
          alt="AU"
        />
        <img
          src={aktu}
          className="w-[80px] s:w-[90px] sm:w-[120px] md:w-[14%] big:w-[16%] lg:w-[18%]"
          alt="AKTU"
        />
        {/* w-[15%] lg:w-[10%] min-w-[100px] md:min-w-[150px]  lg:min-w-[200px]   object-contain */}
      </motion.div>
    </div>
  );
};

export default Connections;
