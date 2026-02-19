import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PosterTwo = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  const [projectsCount, changeProjectsCount] = useState(0);
  const [supportNumbers, changeSupportNumbers] = useState(0);

  useEffect(() => {
    if (view) {
      if (projectsCount < 150) {
        setTimeout(() => {
          changeProjectsCount(projectsCount + 1);
        }, 25);
      }
      if (supportNumbers < 1000) {
        setTimeout(() => {
          changeSupportNumbers(supportNumbers + 1);
        }, 3);
      }
    }
  }, [view, projectsCount, supportNumbers]);

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view, animation]);

  return (
    <div ref={ref} className="w-full h-[600px] flex flex-col items-end 375:mt-10 sm:h-[700px] md:relative md:h-[350px] md:mt-5 xl:pr-10">

      {/* small title */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        animate={animation}
        className="w-32 h-10 bg-[#866CA0] bg-opacity-30 flex justify-center items-center rounded-2xl mx-5 sm:w-36 sm:h-10 md:w-28 md:h-7 xl:mt-20"
      >
        <h3 className="text-[#866CA0] font-morabba font-bold text-sm sm:text-base md:text-xs xl:h-10 xl:mt-5">
          بیشتر درباره ما بدانید
        </h3>
      </motion.div>

      {/* descriptions */}
      <div className="mt-5 mx-5 md:w-1/2">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          animate={animation}
          className="font-morabba font-bold text-[#00194C] opacity-75 text-2xl text-end sm:text-3xl md:opacity-85 1100:text-4xl xl:mt-5 xl:w-11/12 xl:ml-auto"
        >
          بهترین زیرساخت و پیاده سازی برای داشتن بالاترین رتبه
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          animate={animation}
          className="text-end font-sans opacity-95 mt-5 text-sm sm:text-base md:text-sm 1100:text-base xl:w-11/12 ml-auto xl:mt-8 1400:w-10/12"
        >
          شما در کنار ما می توانید تجربه کسب و کار آنلاین را داشته باشید و به
          بزرگترین مارکت دنیا با ۶۴ میلیون کاربر ایرانی دسترسی داشته باشید. فقط
          کافی است تا با استفاده از ابزارهایی که در اختیار دارید سیستم سازی کسب
          و کار آنلاین خود را شروع کنید. ما در این مسیر همراه شما هستیم
        </motion.p>
      </div>

      {/* history */}
      {window.innerWidth >= "768" && (
        <div className="w-80 h-16 mr-5 mt-5 flex justify-around items-center gap-4 xl:mt-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            animate={animation}
            className="w-1/2 h-14 border rounded-lg flex justify-around items-center px-3"
          >
            {/* icon */}
            <img src={require("../assets/cup.png")} alt="USEO" className="w-7" />

            {/* vertical line */}
            <div className="h-10 border"></div>

            {/* infornations */}
            <div className="flex flex-col text-center">
              <h3 className="text-xl font-extrabold">+{projectsCount}</h3>
              <p className="text-xs opacity-80">پروژه انجام شده</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            animate={animation}
            className="w-1/2 h-14 border rounded-lg flex justify-around items-center px-3"
          >
            {/* icon */}
            <img src={require("../assets/24.png")} alt="USEO" className="w-7" />

            {/* vertical line */}
            <div className="h-10 border"></div>

            {/* infornations */}
            <div className="flex flex-col text-center">
              <h3 className="text-xl font-extrabold">+{supportNumbers}</h3>
              <p className="text-xs opacity-80">ساعت پشتیبانی</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* main poster two */}
      <div className="w-full mt-16 relative md:w-1/2 md:absolute md:bottom-10 810:bottom-5 900:-bottom-10 lg:-bottom-14 1100:-bottom-16 xl:-bottom-32 md:-left-5 1400:-bottom-44 xl:ml-5 2xl:-bottom-36 2xl:w-[45%] 2xl:ml-14 1800:w-[40%]">
        {/* background dots */}
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          animate={animation}
          src={require("../assets/posterTwoBackDots.png")}
          alt="USEO"
        />

        {/* laptop */}
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          animate={animation}
          src={require("../assets/posterTwo.png")}
          alt="USEO"
          className="absolute -top-12 left-8 w-10/12 900:w-9/12 900:left-14 xl:w-8/12 xl:left-28 xl:-top-0"
        />

        {/* comunication icon */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          animate={animation}
          className="w-12 h-12 bg-white rounded-2xl shadow-md absolute top-32 right-1 flex justify-center items-center 425:top-44 425:right-5 md:top-40 900:right-10 900:top-36 xl:top-52 xl:right-14 xl:w-14 xl:h-14"
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-md flex justify-center items-center">
            <img
              src={require("../assets/comunication icon.png")}
              alt="USEO"
              className="w-8/12 xl:w-11/12"
            />
          </div>
        </motion.div>

        {/* upper icon i don't know what is that */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          animate={animation}
          className="w-14 h-14 rounded-2xl shadow-md absolute -top-4 left-8 -rotate-12 bg-white flex justify-center items-center md:top-0 900:left-16 xl:top-16 xl:left-28"
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-md flex justify-center items-center">
            <img
              src={require("../assets/unknown icon.png")}
              alt="USEO"
              className="w-8/12 rotate-12"
            />
          </div>
        </motion.div>

        {/* purple dot */}
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 2.6}}
          animate={animation}
          className="w-3 h-3 bg-[#8C7AFF] rounded-full absolute bottom-1 right-4 xl:bottom-10"
        ></motion.div>
      </div>
    </div>
  );
};

export default PosterTwo;
