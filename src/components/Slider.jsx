import { motion } from "framer-motion";
import { information } from "../informations";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const examples = information.examples;

  const [scrollWidth, changeScrollWidth] = useState(0)
  const scroll = useRef()
  useEffect(()=>{
    changeScrollWidth(-scroll.current?.offsetLeft + 10)
  }, [])

  return (
    window.innerWidth < "768" && (
      <div className="w-full h-[600px] relative 425:mt-10 520:mt-16 sm:mt-24">
        {/* background dots */}
        <div className="w-full h-56">
          <img
            src={require("../assets/services background.png")}
            alt="USEO"
            className="opacity-20"
          />
          <div className="w-full h-96 bg-gradient-to-br from-[#E892F6] absolute -top-1 opacity-15"></div>

          {/* title */}
          <div className="bg-[#F3EAFC] w-40 h-10 absolute rounded-full top-9 right-5 flex justify-center items-center">
            <h3 className="text-[#3B4359] font-bold font-morabba">
              طراحی سایت
            </h3>
          </div>

          {/* description */}
          <div className="w-full p-5 absolute top-20">
            <p className="text-end font-bold font-morabba text-3xl opacity-75">
              ما می توانیم برای شما تجربه ای متفاوت از طراحی را داشته باشیم
            </p>
          </div>
        </div>

        {/* slider */}
        <motion.div className="w-full h-[400px] flex justify-center items-center relative">
          <motion.div
            ref={scroll}
            drag="x"
            dragConstraints={{ left: 0, right: scrollWidth }}
            whileTap={{ cursor: "grabbing" }}
            className="absolute right-2 flex gap-2 cursor-grab"
          >
            {examples.map((example, index) => {
              return (
                <div
                  key={index}
                  className="h-[350px] w-[240px] bg-white rounded-2xl flex justify-center items-center relative border-2 shadow-lg sm:h-[400px] sm:w-[300px]"
                >
                  {/* poster */}
                  <div className="w-10/12 h-44 bg-red-600 flex justify-center items-center absolute top-5 sm:mt-8">
                    <img src={example.image} alt="USEO" className="w-full" />
                  </div>

                  {/* created with */}
                  <p className="absolute right-8 top-52 font-sans text-xs sm:top-64 sm:text-base">
                    {example.createdBy}
                  </p>

                  {/* title */}
                  <h3 className="absolute right-8 top-[225px] font-bold font-morabba text-2xl opacity-70 sm:top-[280px]">
                    {example.title}
                  </h3>

                  {/* description */}
                  <div className="w-full h-8 absolute top-[250px] flex justify-center items-center sm:top-[315px]">
                    <p className="absolute text-[10px] tracking-wide font-iranYekan opacity-80 sm:text-[12px]">
                      {example.description}
                    </p>
                  </div>

                  {/* go to website */}
                  <div className="w-full h-10 flex justify-center items-center absolute top-[290px] sm:top-[350px]">
                    <p className="border-2 rounded-md w-32 h-8 flex justify-center items-center text-xs font-iranYekan tracking-wide opacity-70 sm:text-sm sm:opacity-80">
                      مشاهده جزئیات
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    ))
};

export default Slider;
