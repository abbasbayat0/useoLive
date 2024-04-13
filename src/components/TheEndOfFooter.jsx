import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const TheEndOfFooter = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, x: 0, opacity: 1 });
  }, [view]);
  return (
    <div
      ref={ref}
      className="w-full h-40 flex flex-col justify-center items-center mt-5 sm:mt-10 sm:h-44 md:flex-row md:justify-around md:h-32 md:mt-4"
    >
      <div className="flex gap-2 425:gap-5">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          animate={animation}
          className="bg-[#3B373C] bg-opacity-20 w-[70px] h-20 rounded-lg flex justify-center items-center 425:w-[80px] sm:w-[110px] sm:h-28 md:w-[80px] md:h-20"
        >
          <img
            src={require("../assets/trustOne.png")}
            alt="USEO"
            className="sm:w-20 md:w-16"
          />
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          animate={animation}
          className="bg-[#3B373C] bg-opacity-20 w-[70px] h-20 rounded-lg flex justify-center items-center 425:w-[80px] sm:w-[110px] sm:h-28 md:w-[80px] md:h-20"
        >
          <img
            src={require("../assets/trustTwo.png")}
            alt="USEO"
            className="sm:w-20 md:w-16"
          />
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          animate={animation}
          className="bg-[#3B373C] bg-opacity-20 w-[70px] h-20 rounded-lg flex justify-center items-center 425:w-[80px] sm:w-[110px] sm:h-28 md:w-[80px] md:h-20"
        >
          <img
            src={require("../assets/trustThree.png")}
            alt="USEO"
            className="sm:w-20 md:w-16"
          />
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          animate={animation}
          className="bg-[#3B373C] bg-opacity-20 w-[70px] h-20 rounded-lg flex justify-center items-center 425:w-[80px] sm:w-[110px] sm:h-28 md:w-[80px] md:h-20"
        >
          <img
            src={require("../assets/trustFour.png")}
            alt="USEO"
            className="sm:w-20 md:w-16"
          />
        </motion.div>
      </div>
      <div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          animate={animation}
          className="font-iranYekan text-xs mt-6 sm:text-base md:text-xs opacity-90 md:-mt-2"
        >
          💛 طراحی،‌میزبانی و پشتیبانی توسط تیم یوسئو
        </motion.p>
      </div>
    </div>
  );
};

export default TheEndOfFooter;
