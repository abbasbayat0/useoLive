import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import { information } from "../informations";
import { useEffect, useRef, useState } from "react";

const Blog = () => {
  const articles = information.articles;
  const [activeSlide, changeActiveSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (activeSlide === 5) changeActiveSlide(0);
      else changeActiveSlide(activeSlide + 1);
    }, 10000);
  }, [activeSlide]);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const ref = useRef();
  const view = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (view) animation.start({ y: 0, opacity: 1 });
  }, [view]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="w-screen max-w-[1536px] flex flex-col justify-center items-center mt-16 p-2"
    >
      {/* logo */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full flex flex-col justify-center items-center sm:flex-row-reverse sm:gap-2 sm:justify-start sm:my-5 sm:-ml-12 900:-ml-44 xl:-ml-80 1400:-ml-96"
      >
        <div className="w-10 h-10 rounded-2xl bg-blue-500 bg-opacity-40 flex justify-center items-center">
          <i className="fa-solid fa-blog text-blue-500 text-2xl"></i>
        </div>
        <h2 className="font-morabba text-xl tracking-wide font-bold opacity-90 mt-2 lg:text-2xl sm:mt-0">
          وبلاگ
        </h2>
      </motion.div>
      {/* slider */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="relative w-full mb-96 mt-5 720:w-11/12 bg-red-600 900:flex 900:justify-center"
      >
        {articles.map((article, index) => {
          return (
            <div
              className={`w-full h-[430px] rounded-xl transition-all duration-1000 flex flex-col items-center overflow-hidden absolute shadow-xl 375:h-[480px] 425:h-auto 900:w-auto ${
                activeSlide === index
                  ? "opacity-100 delay-1000 ease-in"
                  : "opacity-0 ease-out"
              }`}
              key={index}
            >
              {/* slide image */}
              <img src={article.image} alt="USEO" />

              {/* slide informations */}
              <div className="flex justify-center items-center shadow-inner px-5 py-2 bg-[#F4E9FF] rounded-xl mt-2 425:absolute 425:bottom-32 425:left-5 425:opacity-70">
                <p className="font-iranYekan text-xs opacity-80">{`${article.date} / ${article.publisher}`}</p>
              </div>

              {/* title & more icon */}
              <div className="flex justify-center items-center gap-2 mt-8 hover:gap-10 transition-all duration-500 425:absolute 425:bg-[#F4E9FF] 425:bg-opacity-80 425:bottom-20 425:left-5 425:p-2 425:rounded-xl 425:opacity-70">
                <p className="font-morabba font-bold select-none">{article.title}</p>
                <i className="fa-solid fa-right-long opacity-70 animate-pulse"></i>
              </div>

              <p className="mt-3 text-center text-xs px-2 opacity-80 font-iranYekan 425:absolute 425:bottom-5 425:left-5 425:bg-[#F4E9FF] 425:w-3/4 rounded-xl 425:p-2 425:opacity-60 ">
                {article.description}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* all articles */}
      <div className="w-full flex justify-around items-center mt-8 flex-wrap 375:mt-20 425:-mt-5 520:mt-5 580:mt-14 sm:mt-28 720:mt-36 810:mt-52 900:w-11/12 lg:w-10/12 lg:-mb-10 1100:-mb-20 xl:w-9/12 1400:w-8/12">
        {articles.map((article, index) => {
          return (
            <motion.div
              ref={ref}
              initial={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: (1 + index) * 0.5 }}
              animate={animation}
              className="w-[45%] mt-10 rounded-xl overflow-hidden flex shadow-lg flex-col items-center bg-[#f4e9ff] sm:w-[30%]"
              key={index}
            >
              {/* slide image */}
              <img src={article.image} alt="USEO" />

              {/* slide informations */}
              <div className="flex justify-center items-center w-11/12 shadow-inner px-5 py-1 bg-gray-400 bg-opacity-30 rounded-xl mt-2 lg:mt-4">
                <p className="font-iranYekan text-[10px] text-nowrap opacity-90">{`${article.date} / ${article.publisher}`}</p>
              </div>

              {/* title & more icon */}
              <p className="font-morabba text-sm text-center mt-2 font-bold 375:px-2">
                {article.title}
              </p>

              <p className="mt-1 text-center text-[10px] px-3 pb-2 opacity-90 font-iranYekan">
                {article.description}
              </p>

              {/* more */}
              <div className="flex justify-center items-center gap-2 pb-2 hover:gap-10 transition-all duration-500">
                <p className="font-morabba font-bold text-xs opacity-80 select-none">
                  بیشتر
                </p>
                <i className="fa-solid fa-right-long opacity-70"></i>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Blog;
