import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import burgerIcon from "../assets/burger.svg"; // Add a burger icon

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";

const Navbar = () => {
  const pathname = useLocation();
  // const tabs = ["Home", "Student", "Startup", "Mentor", "Contact"];
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const pathname = location.pathname;
    const tabName = pathname.split("/")[1] || "home";
    setActiveTab(tabName);
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="z-[100] absolute top-0 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.3 }}
        className="z-10  w-[90%] mx-auto flex px-4 py-6 justify-between items-center"
      >
        <div>
          <img className="w-[65px] md:w-full" src={logo} alt="logo" />
        </div>
        {/* Mobile menu burger icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          <img src={burgerIcon} className="w-[20px]" alt="menu" />
        </div>
        <div className="hidden md:flex">
          {" "}
          {/* Displayed on desktop */}
          <ul className="flex text-[19px] font-sans md:gap-6 big:gap-12">
            <Link to="/" className="" onClick={() => handleTabClick("home")}>
              <li
                className={`cursor-pointer ${
                  activeTab === "home" ? "text-white font-medium" : "text-black"
                }`}
              >
                Home
              </li>
            </Link>
            <Link
              to="/student"
              className=""
              onClick={() => handleTabClick("student")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "student"
                    ? "text-white font-medium"
                    : "text-black"
                }`}
              >
                Student
              </li>
            </Link>
            <Link
              to="/startup"
              className=""
              onClick={() => handleTabClick("startup")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "startup"
                    ? "text-white font-medium"
                    : "text-black"
                }`}
              >
                Startup
              </li>
            </Link>
            <Link
              to="/dev"
              className=""
              onClick={() => handleTabClick("mentor")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "mentor"
                    ? "text-white font-medium"
                    : "text-black"
                }`}
              >
                Mentor
              </li>
            </Link>
            <Link
              to="/career"
              className=""
              onClick={() => handleTabClick("career")}
            >
              <li
                className={`cursor-pointer ${
                  activeTab === "career"
                    ? "text-white font-medium"
                    : "text-black"
                }`}
              >
                Career
              </li>
            </Link>
          </ul>
        </div>
        {/* Mobile menu options (hidden by default) */}
        {mobileMenuOpen && (
          <ul className="bg-white flex flex-col rounded-[10px] px-10 mr-8 md:hidden text-[19px] font-sans gap-4 p-4 absolute right-0 top-16">
            <Link to="/">
              <li
                className={`cursor-pointer ${
                  activeTab === "home"
                    ? "text-[#4F0968] font-medium"
                    : "text-black"
                }`}
                onClick={() => {
                  handleTabClick("home");
                  handleMobileMenuToggle();
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/student">
              <li
                className={`cursor-pointer ${
                  activeTab === "student"
                    ? "text-[#4F0968] font-medium"
                    : "text-black"
                }`}
                onClick={() => {
                  handleTabClick("student");
                  handleMobileMenuToggle();
                }}
              >
                Student
              </li>
            </Link>
            <Link to="/startup">
              <li
                className={`cursor-pointer ${
                  activeTab === "startup"
                    ? "text-[#4F0968] font-medium"
                    : "text-black"
                }`}
                onClick={() => {
                  handleTabClick("startup");
                  handleMobileMenuToggle();
                }}
              >
                Startup
              </li>
            </Link>
            <Link to="/dev">
              <li
                className={`cursor-pointer ${
                  activeTab === "mentor"
                    ? "text-[#4F0968] font-medium"
                    : "text-black"
                }`}
                onClick={() => {
                  handleTabClick("mentor");
                  handleMobileMenuToggle();
                }}
              >
                Mentor
              </li>
            </Link>
            <Link to="/career">
              <li
                className={`cursor-pointer ${
                  activeTab === "career"
                    ? "text-[#4F0968] font-medium"
                    : "text-black"
                }`}
                onClick={() => {
                  handleTabClick("career");
                  handleMobileMenuToggle();
                }}
              >
                Career
              </li>
            </Link>
          </ul>
        )}
        <div className="hidden md:block">
          <button className="bg-[#4F0968] border-[1px] border-white text-white rounded-[5px] font-sans w-[146px] h-[41px] text-[18px] shadow-black shadow-sm">
            HACK 2.0
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
