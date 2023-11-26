import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import tw from "../assets/tw.svg";
import { Input, Textarea } from "@nextui-org/react";

const Footer = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative bg-[#232323] flex flex-col md:flex-row items-center md:w-full big:gap-12 lg:gap-24 py-[64px] md:px-[50px] lg:px-[108px] text-white">
      <div className=" flex flex-col big:h-[540px] max-w-[90%] w-[400px] border-[1px] border-white  bg-[#000000] rounded-[16px] p-[30px]">
        <h3 className="text-[#FFED48] text-[10px] font-helvetica font-light">
          FEEDBACK
        </h3>
        <h1 className="font-helvetica text-[20px] md:text-[28px] leading-7 md:mt-6 md:mb-6 mt-2 mb-10">
          Have any Feedback or Query?
        </h1>
        <form onSubmit={submit} className="space-y-5 flex flex-col">
          <Input
            type="text"
            label="FULL NAME"
            variant="bordered"
            className="h-[40px] md:h-auto dark"
          />

          <Input
            type="email"
            label="EMAIL"
            color=""
            variant="bordered"
            className="h-[40px] md:h-auto dark "
          />

          <Textarea label="MESSAGE" variant="bordered" className="dark" />
          <button className="border-[1px] border-b-[3px] border-r-[2px] border-white rounded-[50px] py-[10px] px-[30px] text-[12px] md:text-[14px] bg-[#7B209B] text-white w-fit  self-end md:self-start">
            Send
          </button>
        </form>
        <p className="text-[10px] opacity-40 font-helvetica mt-5 md:ml-2 mr-1 md:mr-0 self-end md:self-start">
          Privacy
        </p>
      </div>
      {/* for desktop */}
      <div className="md:block hidden w-[70%] md:min-w-[550px] big:min-w-[580px] h-[460px] p-4">
        <div className="flex justify-between items-start ">
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-10 px-6 ">
              <div className="w-[200px] h-[125px]">
                <h3 className="text-[#FFED48] text-[16px] font-helvetica font-medium mb-2">
                  COMPANY LINKS
                </h3>
                <ul className="font-helvetica space-y-1 text-[14px]">
                  <li>Home</li>
                  <li>Student</li>
                  <li>Startup</li>
                  <li>Mentor</li>
                  <li>Career</li>
                  <li>Privacy</li>
                </ul>
              </div>
              <div className="w-[240px] h-[125px]">
                <h3 className="text-[#FFED48] text-[16px] font-helvetica font-medium mb-2">
                  QUICK LINKS
                </h3>
                <ul className="font-helvetica space-y-1 text-[14px]">
                  <li>Student Internships</li>
                  <li>College Competitions</li>
                  <li>Startup Founded / Recruiter</li>
                </ul>
              </div>
              <div className="w-[240px] h-[125px] mt-4">
                <h3 className="text-[#FFED48] text-[16px] font-helvetica font-medium mb-2">
                  CONTACT US
                </h3>
                <ul className="font-helvetica space-y-1 text-[14px]">
                  <li> +91 9315 845277</li>
                  <li>team@getsync.in</li>
                  <li>Noida</li>
                </ul>
              </div>
            </div>
            <div className="w-[230px] h-[50px] ml-6 flex gap-4 ">
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={yt} alt="" />
              <img src={tw} alt="" />
            </div>
          </div>
          <img src={logo} alt="" className="" />
        </div>
        <p className="text-center text-[10px] font-light opacity-40 mt-20 text-[#ffffff]">
          © 2023 — Copyright
        </p>
      </div>

      {/* for mobile */}
      <div className="mt-24 w-[75%] flex flex-col md:hidden">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[#FFED48] text-[14px] font-helvetica font-medium mb-2">
              INFO
            </h3>
            <ul className="font-helvetica space-y-1 text-[12px]">
              <li>Home</li>
              <li>Student</li>
              <li>Startup</li>
              <li>Mentor</li>
              <li>Career</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFED48] text-[14px] font-helvetica font-medium mb-2">
              QUICK LINKS
            </h3>
            <ul className="font-helvetica space-y-1 text-[12px]">
              <li>Student Internships</li>
              <li>College Competitions</li>
              <li>Startup Founded / Recruiter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-start">
          <div>
            <h3 className="text-[#FFED48] text-[14px] font-helvetica font-medium mb-2">
              CONTACT US
            </h3>
            <ul className="font-helvetica space-y-1 text-[12px]">
              <li> +91 9315 845277</li>
              <li>team@getsync.in</li>
              <li>Noida</li>
            </ul>
          </div>
          <img src={logo} alt="" className="" />
        </div>
        <div className="mt-8 mx-auto flex gap-2 ">
          <img
            src={fb}
            className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px]"
            alt=""
          />
          <img
            src={ig}
            className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px]"
            alt=""
          />
          <img
            src={yt}
            className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px]"
            alt=""
          />
          <img
            src={tw}
            className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px]"
            alt=""
          />
        </div>
        <p className="text-center text-[12px] font-light opacity-40 mt-10 text-[#ffffff] font-helvetica">
          © 2023 — Copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
