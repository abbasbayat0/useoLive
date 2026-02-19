import { useEffect, useRef } from "react";
import { information } from "../informations";
import { motion, useAnimation, useInView } from "framer-motion";

const FooterContent = () => {
  const sectionOne = information.content[0];
  const sectionTwo = information.content[1];
  const sectionThree = information.content[2];

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();
  useEffect(() => {
    if (view) animation.start({ x: 0, opacity: 1 });
  }, [view, animation]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      animate={animation}
      className="w-full h-96 flex flex-col md:h-auto"
    >
      {/* list of services */}
      <div className="h-[220px] w-full flex flex-row-reverse justify-around text-end md:h-[220px] md:mt-10">
        <div className="mt-6">
          <h3 className="font-iranYekan opacity-90 text-sm sm:text-lg md:text-sm">
            طراحی سایت
          </h3>
          <p className="text-[11px] tracking-wide font-iranYekan mt-4 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-3">
            طراحی وب سایت
          </p>
          {sectionOne.map((section, index) => {
            return (
              <p
                key={index}
                className="text-[11px] tracking-wide font-iranYekan mt-2 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-1"
              >
                {section}
              </p>
            );
          })}
        </div>
        <div className="mt-6">
          <h3 className="font-iranYekan opacity-90 text-sm sm:text-lg md:text-sm">
            پشتیبانی سایت
          </h3>
          <p className="text-[11px] tracking-wide font-iranYekan mt-4 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-3">
            خدمات پشتیبانی سایت
          </p>
          {sectionTwo.map((section, index) => {
            return (
              <p
                key={index}
                className="text-[11px] tracking-wide font-iranYekan mt-2 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-1"
              >
                {section}
              </p>
            );
          })}
        </div>

        {/* contact us */}
        {window.innerWidth >= "1024" && (
          <div className="mt-6">
            <h3 className="font-iranYekan opacity-90 text-sm sm:text-lg md:text-sm">
              ارتباط با ما
            </h3>
            <p className="text-[11px] tracking-wide font-iranYekan mt-4 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-3">
              درباره ما
            </p>
            {sectionThree.map((section, index) => {
              return (
                <p
                  key={index}
                  className="text-[11px] tracking-wide font-iranYekan mt-2 opacity-80 sm:text-[12px] sm:opacity-85 md:text-[10px] md:mt-1"
                >
                  {section}
                </p>
              );
            })}
          </div>
        )}

        {/* accept flex for over 768px screens */}
        {window.innerWidth >= "768" && (
          <div>
            <div className="h-[90px] w-full flex flex-col px-4">
              <h3 className="text-end mt-1 font-iranYekan text-sm opacity-90 520:mr-14 sm:mt-5 sm:text-lg md:mt-6 md:text-sm md:mr-0">
                راه های ارتباطی
              </h3>
              <div className="flex flex-row-reverse justify-around relative mr-3 520:mr-14 md:mr-0">
                <div className="w-1/2 h-16 text-end mt-4">
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
                </div>
                <div className="w-1/2 h-16 text-end relative">
                  <img
                    src={require("../assets/email icon.png")}
                    alt="USEO"
                    className="absolute top-4 right-0 sm:w-8 sm:-right-2 md:w-5"
                  />
                  <h5 className="font-iranYekan absolute top-4 right-7 text-sm opacity-85 sm:text-lg sm:top-5 md:text-sm md:right-5 md:top-4">
                    info@useo.ir
                  </h5>
                </div>
              </div>
            </div>
            <div className="h-[50px] w-full px-2 flex flex-row-reverse justify-around items-center md:mt-10">
              <div className="text-end text-sm font-iranYekan opacity-90 sm:text-base">
                <h4 className="text-xs">
                  ما را در شبکه های اجتماعی دنبال کنید
                </h4>
              </div>
              <div className="flex flex-row-reverse gap-2 mr-2">
                <img
                  src={require("../assets/telegram.png")}
                  alt="USEO"
                  className="w-4"
                />
                <img
                  src={require("../assets/twitter.png")}
                  alt="USEO"
                  className="w-4"
                />
                <img
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
          <h3 className="text-end mt-1 font-iranYekan text-sm opacity-90 520:mr-14 sm:mt-5 sm:text-lg">
            راه های ارتباطی
          </h3>
          <div className="flex flex-row-reverse justify-around relative mr-3 520:mr-14">
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
            <div className="w-1/2 h-16 text-end relative">
              <img
                src={require("../assets/email icon.png")}
                alt="USEO"
                className="absolute top-4 right-0 sm:w-8 sm:-right-2"
              />
              <h5 className="font-iranYekan absolute top-4 right-7 text-sm opacity-85 sm:text-lg sm:top-5">
                info@useo.ir
              </h5>
            </div>
          </div>
        </div>
      )}

      {/* social medias */}
      {window.innerWidth < "768" && (
        <div className="h-[50px] w-full px-2 flex flex-row-reverse justify-around items-center sm:mt-12">
          <div className="text-end text-sm font-iranYekan opacity-90 sm:text-base">
            <h4>ما را در شبکه های اجتماعی دنبال کنید</h4>
          </div>
          <div className="flex flex-row-reverse gap-1">
            <img
              src={require("../assets/telegram.png")}
              alt="USEO"
              className="w-5 sm:w-7"
            />
            <img
              src={require("../assets/instagram.png")}
              alt="USEO"
              className="w-5 sm:w-7"
            />
            <img
              src={require("../assets/twitter.png")}
              alt="USEO"
              className="w-5 sm:w-7"
            />
          </div>
        </div>
      )}
      <br />
      <hr initial={{ opacity: 0 }} transition={{ duration: 0.6, delay: 3 }} />
    </motion.div>
  );
};

export default FooterContent;
