import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  // change mobile navbar status
  const [navStatus, changeNavStatus] = useState(false);
  return (
    <motion.div
      className="w-full flex justify-end"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* navbar icon */}
      <div
        className="w-8 h-7 z-30 sm:hidden mt-5 mr-2 absolute"
        onClick={() => changeNavStatus(!navStatus)}
      >
        <div
          className={`w-full h-2 bg-gray-600 rounded-lg transition-all duration-500 ${
            navStatus ? "rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-full h-2 bg-gray-600 rounded-lg mt-1 transition-all duration-500 ${
            navStatus ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-full h-2 bg-gray-600 rounded-lg transition-all duration-500 ${
            navStatus ? "-mt-5 -rotate-45" : "mt-1"
          }`}
        ></div>
      </div>

      {/* navbar contents */}
      <div
        className={`w-full h-screen absolute flex flex-col justify-center items-center gap-16 transition-all duration-500 sm:max-h-[60px] sm:shadow-md sm:bg-opacity-100 sm:translate-y-0 sm:opacity-100 sm:flex-row sm:items-start sm:justify-around md:max-h-[50px] lg:max-h-[60px] z-10 bg-white bg-opacity-95 ${
          navStatus
            ? "translate-y-0 opacity-100"
            : "-translate-y-[100%] opacity-0"
        }`}
      >
        {/* USEO logo */}
        <div
          onClick={() => changeNavStatus(false)}
          className="absolute top-20 sm:static sm:mt-3 sm:ml-2 md:mt-2 lg:mt-3 lg:ml-5"
        >
          <Link to="/useoLive" className="cursor-pointer">
            <img
              src={require("../assets/USEO address.png")}
              alt="USEO"
              className="sm:w-[170px] md:w-[170px] lg:w-8/12"
            />
          </Link>
        </div>

        {/* nav Links */}
        <ul className="absolute top-44 flex flex-col gap-10 text-center font-sans text-2xl sm:static sm:flex-row-reverse sm:text-nowrap sm:text-sm sm:mt-5 sm:mr-2 sm:gap-7 md:gap-4 md:mt-4 md:-ml-10 md:text-xs lg:text-sm lg:mt-5 lg:gap-10">
          <li onClick={() => changeNavStatus(false)}>
            <Link to="/useoLive/projects" className="cursor-pointer">
              نمونه کارها
            </Link>
          </li>
          <li onClick={() => changeNavStatus(false)}>
            <Link to="/useoLive/projects" className="cursor-pointer">
              پلن قیمت
            </Link>
          </li>
          <li onClick={() => changeNavStatus(false)}>
            <Link to="/useoLive/projects" className="cursor-pointer">
              خدمات یوسئو
            </Link>
          </li>
          <li onClick={() => changeNavStatus(false)}>
            <Link to="/useoLive/blog" className="cursor-pointer">
              وبلاگ
            </Link>
          </li>
          <li onClick={() => changeNavStatus(false)}>
            <Link to="/useoLive/contact" className="cursor-pointer">
              تماس با ما
            </Link>
          </li>
        </ul>

        {/* contact Us */}
        <div className="absolute top-[550px] flex flex-col items-end sm:static sm:hidden md:flex md:mt-3 md:mr-2 lg:mt-4 lg:mr-5">
          <img
            src={require("../assets/phoneIcon.png")}
            alt="USEO"
            className="absolute -top-5 mt-10 mr-32 w-7 sm:top-3 md:w-5 md:mt-1 md:mr-[90px] lg:w-5 lg:mr-[110px] lg:mt-2"
          ></img>
          <p className="opacity-70 text-nowrap md:text-[9px] lg:text-[8px] font-sans">
            با ما در تماس باشید
          </p>
          <a href="tel:+989034300314">
            <p className="cursor-pointer md:text-xs lg:text-sm font-iranYekan font-bold">
              0903 430 0314
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
