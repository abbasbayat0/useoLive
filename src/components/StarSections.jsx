import { information } from "../informations";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const StarSections = () => {
  const sections = information.sections;

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view]);

  return (
    <div className="w-screen flex justify-center items-center flex-col gap-14 -mt-8 375:-mt-28 425:-mt-24 520:-mt-36 sm:-mt-16 md:gap-5 md:-mt-28 md:flex-row md:px-5 1100:-mt-12 xl:-mt-5">
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className={`w-9/12 h-52 flex justify-center items-center relative ${
              section.positionOnSm == 0 && "md:mt-32"
            }`}
          >
            {/* rectangle container */}
            <motion.img
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6 }}
              animate={animation}
              src={require("../assets/starRectangle.png")}
              alt="USEO"
              className="w-64 h-56 425:w-72 520:w-80 520:h-60 xl:w-96 xl:h-72"
            />

            {/* verify icon */}
            <motion.div
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              animate={animation}
              className="w-9 h-9 rounded-full border-[3px] border-[#FFCD1A] flex justify-center items-center absolute top-2 xl:-top-5 xl:w-12 xl:h-12"
            >
              <img
                src={require("../assets/verify.png")}
                alt="USEO"
                className="w-10/12"
              />
            </motion.div>

            {/* start */}
            <motion.div
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              animate={animation}
              className="max-w-1/2 h-8 absolute top-12 flex items-center justify-around gap-2 xl:top-8"
            >
              {section.stars.map((star) => {
                return (
                  <i className="fa-solid fa-star text-[#FFCD1A]" key={star}></i>
                );
              })}
            </motion.div>

            {/* title underline */}
            <motion.div
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              animate={animation}
              className="w-2/5 h-3 bg-[#e7e7e7] absolute rounded-3xl top-[93px] 520:w-2/6 xl:w-2/6 xl:top-[80px]"
            ></motion.div>

            {/* title */}
            <motion.h2
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              animate={animation}
              className="absolute top-20 font-morabba font-bold text-xl text-[#4A4A4A] text-nowrap md:text-lg xl:text-2xl xl:top-16"
            >
              {section.titile}
            </motion.h2>

            {/* description */}
            <motion.p
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              animate={animation}
              className="absolute top-28 max-w-56 text-center font-sans text-sm md:text-xs md:max-w-52 xl:text-base xl:top-24"
            >
              {section.description}
            </motion.p>

            {/* mouse pointer */}
            {section.positionOnSm == 0 && (
              <motion.div
                ref={ref}
                initial={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                animate={animation}
                className="absolute w-10 h-10 top-48 left-32 xl:top-56"
              >
                <div className="absolute w-5 h-5 left-8 -top-5 rounded-full border-2 opacity-70 border-[#B094CA]"></div>
                <img
                  src={require("../assets/mouse pointer.png")}
                  alt="USEO"
                  className="absolute -top-4 left-3"
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarSections;
