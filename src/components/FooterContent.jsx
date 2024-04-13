import { information } from "../informations";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const FooterContent = () => {
  const sectionOne = information.content[0];
  const sectionTwo = information.content[1];
  const sectionThree = information.content[2];

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, x: 0, opacity: 1 });
  }, [view]);
  return (
    <div className="w-full h-96 flex flex-col md:h-auto">
      {/* list of services */}
      <div
        ref={ref}
        className="h-[220px] w-full flex flex-row-reverse justify-around text-end md:h-[220px] md:mt-10"
      >
        <div className="mt-6">
          <motion.h3
            initial={{ x: -2000, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            animate={animation}
            className="font-iranYekan opacity-90 text-sm sm:text-lg md:text-sm"
          >
            طراحی سایت
          </motion.h3>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            animate={animation}
            className="text-[11px] tracking-wide font-iranYekan mt-4 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-3"
          >
            طراحی وب سایت
          </motion.p>
          {sectionOne.map((section, index) => {
            return (
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 * (1 + index) + 1.8 }}
                animate={animation}
                key={index}
                className="text-[11px] tracking-wide font-iranYekan mt-2 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-1"
              >
                {section}
              </motion.p>
            );
          })}
        </div>
        <div className="mt-6">
          <motion.h3
            initial={{ x: -2000, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            animate={animation}
            className="font-iranYekan opacity-90 text-sm sm:text-lg md:text-sm"
          >
            پشتیبانی سایت
          </motion.h3>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            animate={animation}
            className="text-[11px] tracking-wide font-iranYekan mt-4 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-3"
          >
            خدمات پشتیبانی سایت
          </motion.p>
          {sectionTwo.map((section, index) => {
            return (
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 * (1 + index) + 1.8 }}
                animate={animation}
                key={index}
                className="text-[11px] tracking-wide font-iranYekan mt-2 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-1"
              >
                {section}
              </motion.p>
            );
          })}
        </div>

        {/* contact us */}
        {window.innerWidth >= "1024" && (
          <div className="mt-6">
            <motion.h3
              initial={{ x: -2000, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              animate={animation}
              className="font-iranYekan opacity-90 text-sm sm:text-lg md:text-sm"
            >
              ارتباط با ما
            </motion.h3>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              animate={animation}
              className="text-[11px] tracking-wide font-iranYekan mt-4 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-3"
            >
              درباره ما
            </motion.p>
            {sectionThree.map((section, index) => {
              return (
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 * (1 + index) + 1.8 }}
                  animate={animation}
                  key={index}
                  className="text-[11px] tracking-wide font-iranYekan mt-2 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-1"
                >
                  {section}
                </motion.p>
              );
            })}
          </div>
        )}

        {/* accept flex for over 768px screens */}
        {window.innerWidth >= "768" && (
          <div>
            <div className="h-[90px] w-full flex flex-col px-4">
              <motion.h3
                initial={{ x: -2000, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                animate={animation}
                className="text-end mt-1 font-iranYekan text-sm opacity-90 520:mr-14 sm:mt-5 sm:text-lg md:mt-6 md:text-sm md:mr-0"
              >
                راه های ارتباطی
              </motion.h3>
              <div className="flex flex-row-reverse justify-around relative mr-3 520:mr-14 md:mr-0">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  animate={animation}
                  className="w-1/2 h-16 text-end mt-4"
                >
                  <img
                    src={require("../assets/phone icon.png")}
                    alt="USEO"
                    className="absolute -right-1 sm:w-8 sm:-right-4 md:w-5 md:-right-0"
                  />
                  <h5 className="font-iranYekan text-sm mr-5 opacity-85 sm:text-lg md:text-sm md:mr-6 md:text-[9px]">
                    09188148436
                  </h5>
                  <p className="font-iranYekan text-xs opacity-80 mr-6 sm:text-base sm:mr-7 md:text-xs md:mr-7">
                    08:00 - 20:00
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  animate={animation}
                  className="w-1/2 h-16 text-end relative"
                >
                  <img
                    src={require("../assets/email icon.png")}
                    alt="USEO"
                    className="absolute top-4 right-0 sm:w-8 sm:-right-2 md:w-5"
                  />
                  <h5 className="font-iranYekan absolute top-4 right-7 text-sm opacity-85 sm:text-lg sm:top-5 md:text-sm md:right-5 md:top-4">
                    info@useo.ir
                  </h5>
                </motion.div>
              </div>
            </div>
            <div className="h-[50px] w-full px-2 flex flex-row-reverse justify-around items-center md:mt-10">
              <div className="text-end text-sm font-iranYekan opacity-90 sm:text-base">
                <motion.h4
                  initial={{ x: -500, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 2 }}
                  animate={animation}
                  className="text-xs"
                >
                  ما را در شبکه های اجتماعی دنبال کنید
                </motion.h4>
              </div>
              <div className="flex flex-row-reverse gap-2 mr-2">
                <motion.img
                  initial={{ x: -500, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  animate={animation}
                  src={require("../assets/telegram.png")}
                  alt="USEO"
                  className="w-4"
                />
                <motion.img
                  initial={{ x: -500, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  animate={animation}
                  src={require("../assets/twitter.png")}
                  alt="USEO"
                  className="w-4"
                />
                <motion.img
                  initial={{ x: -500, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  animate={animation}
                  src={require("../assets/instagram.png")}
                  alt="USEO"
                  className="w-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* under 768px (without flex) */}
      {/* contact ways */}
      {window.innerWidth < "768" && (
        <div className="h-[90px] w-full flex flex-col px-4">
          <motion.h3
            initial={{ x: -2000, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            animate={animation}
            className="text-end mt-1 font-iranYekan text-sm opacity-90 520:mr-14 sm:mt-5 sm:text-lg"
          >
            راه های ارتباطی
          </motion.h3>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            animate={animation}
            className="flex flex-row-reverse justify-around relative mr-3 520:mr-14"
          >
            <div className="w-1/2 h-16 text-end mt-4">
              <img
                src={require("../assets/phone icon.png")}
                alt="USEO"
                className="absolute -right-1 sm:w-8 sm:-right-4"
              />
              <h5 className="font-iranYekan text-sm mr-5 opacity-85 sm:text-lg">
                09188148436
              </h5>
              <p className="font-iranYekan text-xs opacity-80 mr-6 sm:text-base sm:mr-7">
                08:00 - 20:00
              </p>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              animate={animation}
              className="w-1/2 h-16 text-end relative"
            >
              <img
                src={require("../assets/email icon.png")}
                alt="USEO"
                className="absolute top-4 right-0 sm:w-8 sm:-right-2"
              />
              <h5 className="font-iranYekan absolute top-4 right-7 text-sm opacity-85 sm:text-lg sm:top-5">
                info@useo.ir
              </h5>
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* social medias */}
      {window.innerWidth < "768" && (
        <div className="h-[50px] w-full px-2 flex flex-row-reverse justify-around items-center sm:mt-12">
          <div className="text-end text-sm font-iranYekan opacity-90 sm:text-base">
            <motion.h4
              initial={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              animate={animation}
            >
              ما را در شبکه های اجتماعی دنبال کنید
            </motion.h4>
          </div>
          <div className="flex flex-row-reverse gap-1">
            <motion.img
              initial={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              animate={animation}
              src={require("../assets/telegram.png")}
              alt="USEO"
              className="w-5 sm:w-7"
            />
            <motion.img
              initial={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              animate={animation}
              src={require("../assets/instagram.png")}
              alt="USEO"
              className="w-5 sm:w-7"
            />
            <motion.img
              initial={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              animate={animation}
              src={require("../assets/twitter.png")}
              alt="USEO"
              className="w-5 sm:w-7"
            />
          </div>
        </div>
      )}
      <br />
      <motion.hr
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 3 }}
        animate={animation}
      />
    </div>
  );
};

export default FooterContent;
