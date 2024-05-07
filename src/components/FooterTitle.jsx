import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const FooterTitle = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();
  const viewHeight =
    window.location.href === "http://localhost:3000/useoLive/" ||
    "https://abbasbayat0.github.io/useoLive" || "https://abbasbayat0.github.io/useoLive/";

  useEffect(() => {
    if (view) animation.start({ y: 0, x: 0, opacity: 1 });
  }, [view]);

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      animate={animation}
      className={`w-full h-28 bg-[#866CA0] mt-16 relative pt-5 900:mt-20 ${
        viewHeight ? "1100:mt-36 xl:mt-48" : ""
      }`}
    >
      <motion.h2
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        animate={animation}
        className="w-full  text-end px-2 font-iranYekan font-bold text-white text-nowrap text-lg 375:px-5 sm:px-14 sm:text-xl md:px-10 xl:px-28"
      >
        با ما صحبت کنید؛ خوشحال می شویم
      </motion.h2>

      {/* :) */}
      <motion.img
        ref={ref}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        animate={animation}
        src={require("../assets/smile.png")}
        alt="USEO"
        className="absolute top-6 375:left-5 sm:left-14 sm:w-10 sm:top-5 md:w-8 md:left-96 900:left-[500px] lg:left-[600px] 1100:left-[700px] xl:left-[800px]"
      />
      <motion.p
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        animate={animation}
        className="w-full absolute mt-4 opacity-80 font-iranYekan text-white text-xs text-center tracking-wide 375:px-2 sm:mt-6 sm:text-base md:text-end md:px-10 md:text-xs xl:px-28"
      >
        همکاران ما در تیم پشتیبانی یوسئو آماده پاسخگویی به سوالات شما هستند
      </motion.p>

      {/* phone number */}
      {window.innerWidth >= "768" && (
        <div className="w-1/3 h-20 absolute top-5 flex justify-center items-center flex-col">
          <motion.h2
            ref={ref}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            animate={animation}
            className="font-iranYekan text-white tracking-wider"
          >
            ۰۹۰۳۴۳۰۰۳۱۴
          </motion.h2>
          <motion.p
            ref={ref}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            animate={animation}
            className="font-iranYekan text-white opacity-70 text-xs"
          >
            هر ساعت از روز ، هر روز از هفته
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};

export default FooterTitle;
