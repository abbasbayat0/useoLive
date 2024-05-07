import { information } from "../informations";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const MainPosterDesc = () => {
  const options = information.options;

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view, animation]);
  return (
    <div
      className="w-full flex flex-col justify-center items-end -mt-10 md:w-1/2"
    >
      {/* texts */}
      <div className="p-6 900:pl-20">
        <motion.h2
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          animate={animation}
          className="font-morabba text-2xl opacity-70 font-bold text-end 375:mt-5 md:text-[#866ca0] md:opacity-95 900:text-3xl 1400:text-4xl"
        >
          پیاده سازی و طراحی وبسایت با استاندارد های روز دنیا
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          animate={animation}
          className="font-iranYekan text-end mt-2 opacity-70 tracking-wide md:text-xs md:mt-5 900:text-sm xl:w-11/12 xl:ml-auto 1400:text-base"
        >
          شما در کنار ما می توانید تجربه کسب و کار آنلاین را داشته باشید و به
          بزرگ ترین مارکت دنیا با 64 میلیون کاربر ایرانی دسترسی داشته باشید. فقط
          کافی است تا با استفاده از ابزار هایی که در اختیار دارید سیستم سازی کسب
          و کار آنلاین خود را شروع کنید. ما در این مسیر همراه شما هستیم
        </motion.p>
      </div>

      {/* options */}
      <div className="flex flex-col gap-5 px-6 1400:mt-5">
        {options.map((option, index) => {
          return (
            <motion.div
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: .4 * (index + 2) }}
              animate={animation}
              key={index}
              className="flex flex-row-reverse gap-2 1400:gap-4"
            >
              <img
                src={require("../assets/pen.png")}
                alt="USEO"
                className="w-4 h-4 mt-1 md:w-3 md:h-3 1100:w-4 1100:h-4 1100:mt-0 1400:w-5 1400:h-5 1400:mt-1"
              />
              <p className="text-[#866CA0] text-sm tracking-wider font-morabba font-bold md:text-xs 1100:text-sm 1400:mt-1 1400:text-base">
                {option}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPosterDesc;
