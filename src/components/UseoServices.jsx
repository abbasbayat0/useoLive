import { information } from "../informations";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const UseoServices = () => {
  const services = information.services;

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, x: 0, opacity: 1 });
  }, [view, animation]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden mt-14 h-[1300px] relative 425:h-[1340px] sm:h-[1450px] md:mt-0 md:h-[520px]"
    >
      {/* dots background */}
      <img
        src={require("../assets/services background.png")}
        alt="USEO"
        className="opacity-80 m-5"
      />

      {/* useo servises title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        animate={animation}
        className="w-32 h-8 rounded-full flex justify-center items-center bg-[#866CA0] bg-opacity-20 absolute top-7 right-7 text-[#866CA0] z-10 font-morabba font-bold text-sm md:w-36 md:text-xs 1400:right-14"
      >
        خدمات یوسئو
      </motion.div>

      {/* useo services description */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        animate={animation}
        className="font-morabba font-bold w-full absolute top-20 z-10 text-2xl text-center text-[#48485C] 375:px-2 425:top-24 md:text-[#734C9B] md:w-1/2 md:text-end md:absolute md:right-7 md:text-3xl md:top-20 1400:right-14"
      >
        ما می توانیم برای شما تجربه ای متفاوت از مارکتینگ باشیم
      </motion.p>

      {/* all of our services */}
      {window.innerWidth >= "768" && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6, delay: 3 }}
          animate={animation}
          className="w-32 h-8 bg-[#866CA0] absolute top-24 left-16 rounded-lg opacity-100 z-10 flex justify-around items-center 1400:left-20"
        >
          <p className="text-white text-lg mt-1">{`<`}</p>
          <p className="text-xs text-white font-sans">تمامی خدمات ما</p>
        </motion.div>
      )}

      {/* services */}
      <div className="w-10/12 h-[1200px] mx-auto -mt-40 flex justify-center items-center flex-col gap-5 sm:h-[1250px] md:h-[300px] md:w-full md:-mt-36 md:px-5 md:flex-row-reverse md:gap-2 900:gap-3 1100:gap-4 1400:gap-8 1400:w-11/12">
        {services.map((service, index) => {
          return (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 * (1 + index) }}
              animate={animation}
              key={index}
              className="w-10/12 h-[250px] bg-white z-10 rounded-lg shadow-xl flex flex-col justify-center items-center sm:w-8/12 sm:h-[280px] md:h-[200px] md:relative 900:h-[230px] 900:rounded-3xl xl:h-[250px] 1400:h-[280px]"
            >
              {/* icon */}
              <div
                className={`w-12 h-12 rounded-xl ${service.iconBg} bg-opacity-30 flex justify-center items-center sm:w-14 sm:h-14 md:h-[40px] md:w-[40px] md:py-2 md:absolute md:top-4 900:py-5 xl:mt-5 1400:w-[50px] 1400:h-[48px]`}
              >
                <img
                  src={service.icon}
                  alt="USEO"
                  className="md:w-5 md:h-5 900:w-8 900:h-8"
                />
              </div>

              {/* title */}
              <h2 className="font-morabba font-bold mt-2 opacity-90 sm:text-xl md:text-xs md:absolute md:top-16 900:text-base xl:mt-8 1400:text-xl 1400:mt-10">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-center p-5 text-xs opacity-70 sm:text-base sm:opacity-80 md:text-[10px] md:leading-[13px] md:px-5 md:py-2 md:absolute md:top-[88px] 900:text-xs 900:opacity-90 900:top-[96px] 1100:px-8 xl:mt-8 1400:text-sm 1400:mt-10">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* gradiant shadow */}
      <div className="w-full h-full bg-gradient-to-br from-[#FAF8FD] absolute top-0"></div>
    </div>
  );
};

export default UseoServices;
