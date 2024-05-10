import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const MainPoster = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view, animation]);
  return (
    <div className="relative w-screen h-[350px] mt-10 flex justify-center items-center overflow-x-hidden 425:h-[420px] 520:h-[540px] sm:h-[630px] md:w-1/2 md:h-[400px] 900:h-[450px] lg:h-[550px] xl:h-[700px] 1400:h-[800px]">
      {/* poster */}
      <div className="w-full">
        <img src={require("../assets/posterOne.png")} alt="USEO" className="xl:w-10/12 xl:ml-10" />
      </div>

      {/* star */}
      <motion.div
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        animate={animation}
        className="absolute w-14 h-14 bg-white bg-opacity-50 rounded-full top-3 left-2 flex justify-center items-center md:top-10 lg:top-14 lg:left-5 xl:top-28 xl:w-20 xl:h-20"
      >
        <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center xl:w-16 xl:h-16">
          <a href="https://useo.ir/">
            <i className="fa-solid fa-star text-[#FFCD1A] text-xl -rotate-[20deg] xl:text-3xl"></i>
          </a>
        </div>
      </motion.div>

      {/* useo logo */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        animate={animation}
        className="absolute w-14 h-14 bg-white bg-opacity-50 rounded-full top-44 right-7 flex justify-center items-center md:top-52 md:right-0 lg:top-72 lg:right-16 xl:right-20 xl:top-80 xl:w-20 xl:h-20"
      >
        <div className="w-10 h-10 bg-white rounded-full xl:w-16 xl:h-16">
          <a href="https://useo.ir/">
            <img src={require("../assets/US.png")} alt="USEO" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MainPoster;
