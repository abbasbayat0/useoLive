import React, { useState } from "react";
import { information } from "../informations";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AllProjects = () => {
  const projects = information.projects;
  const [filter, changeFilter] = useState("همه");
  const [active, changeActive] = useState(0);

  return (
    <div className="w-full mt-24 px-2 flex flex-col justify-center sm:mt-28">
      <div className="flex flex-col sm:flex-row-reverse justify-around">
        {/* logo & title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col gap-2 justify-center items-center sm:flex-row-reverse"
        >
          <div className="rounded-2xl w-10 h-10 bg-green-400 bg-opacity-40 flex justify-center items-center">
            <img src={require("../assets/projects.png")} alt="USEO" />
          </div>
          <h1 className="font-morabba text-xl tracking-wide font-bold opacity-90 lg:text-2xl">
            پروژه های اجرایی تیم یوسئو
          </h1>
        </motion.div>

        {/* filters */}
        <div className="flex flex-col gap-5 justify-center items-center mt-10 sm:mt-0 sm:gap-1 sm:flex-row-reverse">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            onClick={() => {
              changeFilter("همه");
              changeActive(0);
            }}
            className={`select-none rounded-xl border-2 hover:shadow-lg transition-all duration-500 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan text-nowrap lg:text-base lg:py-2 lg:px-5 cursor-pointer  ${
              active === 0
                ? "bg-[#866CA0] text-white"
                : "bg-[#866CA0] bg-opacity-0 text-gray-700"
            }`}
          >
            همه
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            onClick={() => {
              changeFilter("UI طراحی");
              changeActive(1);
            }}
            className={`select-none rounded-xl border-2 hover:shadow-lg transition-all duration-500 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan text-nowrap lg:text-base lg:py-2 lg:px-5 cursor-pointer  ${
              active === 1
                ? "bg-[#866CA0] text-white"
                : "bg-[#866CA0] bg-opacity-0 text-gray-700"
            }`}
          >
            UI طراحی
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.4 }}
            onClick={() => {
              changeFilter("وردپرس");
              changeActive(2);
            }}
            className={`select-none rounded-xl border-2 hover:shadow-lg transition-all duration-500 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan text-nowrap lg:text-base lg:py-2 lg:px-5 cursor-pointer  ${
              active === 2
                ? "bg-[#866CA0] text-white"
                : "bg-[#866CA0] bg-opacity-0 text-gray-700"
            }`}
          >
            طراحی های وردپرس
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.6 }}
            onClick={() => {
              changeFilter("کدنویسی");
              changeActive(3);
            }}
            className={`select-none rounded-xl border-2 hover:shadow-lg transition-all duration-500 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan text-nowrap lg:text-base lg:py-2 lg:px-5 cursor-pointer  ${
              active === 3
                ? "bg-[#866CA0] text-white"
                : "bg-[#866CA0] bg-opacity-0 text-gray-700"
            }`}
          >
            طراحی کدنویسی
          </motion.div>
        </div>
      </div>

      {/* all projects */}
      <div className="w-full mt-5 flex flex-col gap-5 sm:flex-row flex-wrap sm:justify-around md:gap-0 1400:mt-20">
        {projects.map((project, index) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .8 + index * 0.5, delay: 1.5 }}
              className="w-full h-[400px] flex justify-center items-center relative sm:w-[40%] sm:mt-5 md:w-[33%] xl:mt-14 xl:w-[25%]"
              key={index}
            >
              <div
                className={`h-[350px] w-[240px] bg-white transition-all duration-700 rounded-2xl flex justify-center items-center border-2 relative sm:h-[400px] sm:w-[250px] lg:w-[300px] xl:w-[320px] xl:h-[420px] ${
                  project.show.includes(filter)
                    ? "opacity-100 shadow-lg"
                    : "opacity-40 shadow-none"
                }`}
              >
                {/* poster */}project
                <div className="w-10/12 h-44 flex justify-center items-center absolute top-5 sm:mt-8">
                  <img src={project.image} alt="USEO" className="w-full" />
                </div>
                {/* created with */}
                <p className="absolute right-8 top-52 font-sans text-xs sm:top-64 sm:text-base xl:top-[270px]">
                  {project.createdBy}
                </p>
                {/* title */}
                <h3 className="absolute right-8 top-[225px] font-bold font-morabba text-2xl opacity-70 sm:top-[280px] xl:top-[300px]">
                  {project.title}
                </h3>
                {/* description */}
                <div className="w-full h-8 absolute top-[250px] flex justify-center items-center sm:top-[315px] xl:top-[330px]">
                  <p className="absolute text-[10px] tracking-wide font-iranYekan opacity-80 sm:text-[12px]">
                    {project.description}
                  </p>
                </div>
                {/* go to website */}
                <div className="w-full h-10 flex justify-center items-center absolute top-[290px] sm:top-[350px] xl:top-[360px]">
                  <Link
                    to="/projects/fitFarma"
                    className="border-2 rounded-md w-32 h-8 flex justify-center items-center text-xs font-iranYekan tracking-wide opacity-70 sm:text-sm sm:opacity-80"
                  >
                    <motion.p whileHover={{ scale: 1.1, color: "black" }}>
                      مشاهده جزئیات
                    </motion.p>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;
