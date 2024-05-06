import React from "react";
import { information } from "../informations";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const example = information.examples[1];
  const count = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full mt-24 px-2 flex flex-col justify-center sm:mt-28">
      <div className="flex flex-col sm:flex-row-reverse justify-around">
        {/* logo & title */}
        <div className="flex flex-col gap-2 justify-center items-center sm:flex-row-reverse">
          <div className="rounded-2xl w-10 h-10 bg-green-400 bg-opacity-40 flex justify-center items-center">
            <img src={require("../assets/projects.png")} alt="USEO" />
          </div>
          <h1 className="font-morabba text-xl tracking-wide font-bold opacity-90 lg:text-2xl">
            پروژه های اجرایی تیم یوسئو
          </h1>
        </div>

        {/* filters */}
        <div className="flex flex-col gap-5 justify-center items-center mt-10 sm:mt-0 sm:gap-1 sm:flex-row-reverse">
          <div className="rounded-xl border-2 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan bg-[#866CA0] bg-opacity-90 text-white text-nowrap lg:text-base lg:py-2 lg:px-5">
            UI طراحی
          </div>
          <div className="rounded-xl border-2 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan text-nowrap lg:text-base lg:py-2 lg:px-5">
            طراحی های وردپرس
          </div>
          <div className="rounded-xl border-2 py-2 px-5 sm:px-2 sm:py-1 sm:text-xs font-iranYekan text-nowrap lg:text-base lg:py-2 lg:px-5">
            طراحی کدنویسی
          </div>
        </div>
      </div>

      {/* all projects */}
      <div className="w-full mt-5 flex flex-col gap-5 sm:flex-row flex-wrap sm:justify-around md:gap-0 1400:mt-20">
        {count.map((count) => {
          return (
            <div
              className="w-full h-[400px] flex justify-center items-center relative sm:w-[40%] sm:mt-5 md:w-[33%] xl:mt-14"
              key={count}
            >
              <div className="h-[350px] w-[240px] bg-white rounded-2xl flex justify-center items-center relative border-2 shadow-lg sm:h-[400px] sm:w-[250px] lg:w-[300px] xl:w-[320px] xl:h-[420px]">
                {/* poster */}
                <div className="w-10/12 h-44 flex justify-center items-center absolute top-5 sm:mt-8">
                  <img src={example.image} alt="USEO" className="w-full" />
                </div>

                {/* created with */}
                <p className="absolute right-8 top-52 font-sans text-xs sm:top-64 sm:text-base xl:top-[270px]">
                  {example.createdBy}
                </p>

                {/* title */}
                <h3 className="absolute right-8 top-[225px] font-bold font-morabba text-2xl opacity-70 sm:top-[280px] xl:top-[300px]">
                  {example.title}
                </h3>

                {/* description */}
                <div className="w-full h-8 absolute top-[250px] flex justify-center items-center sm:top-[315px] xl:top-[330px]">
                  <p className="absolute text-[10px] tracking-wide font-iranYekan opacity-80 sm:text-[12px]">
                    {example.description}
                  </p>
                </div>

                {/* go to website */}
                <div className="w-full h-10 flex justify-center items-center absolute top-[290px] sm:top-[350px] xl:top-[360px]">
                  <Link to="/projects/fitFarma" className="border-2 rounded-md w-32 h-8 flex justify-center items-center text-xs font-iranYekan tracking-wide opacity-70 sm:text-sm sm:opacity-80">
                    مشاهده جزئیات
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;