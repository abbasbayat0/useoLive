import { easeIn, motion } from "framer-motion";
import { information } from "../informations";
import { useEffect, useState } from "react";

const Blog = () => {
  const articles = information.articles;
  const [activeSlide, changeActiveSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (activeSlide === 5) changeActiveSlide(0);
      else changeActiveSlide(activeSlide + 1);
    }, 10000);
  }, [activeSlide]);

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
        className="w-full flex flex-col justify-center items-center sm:flex-row-reverse sm:gap-2 sm:justify-start sm:my-5 sm:-ml-12 900:-ml-44 1400:-ml-60"
      >
        <div className="w-10 h-10 rounded-2xl bg-blue-500 bg-opacity-40 flex justify-center items-center">
          <i className="fa-solid fa-blog text-blue-500 text-2xl"></i>
        </div>
        <h2 className="font-morabba text-xl tracking-wide font-bold opacity-90 mt-2 lg:text-2xl sm:mt-0">
          وبلاگ
        </h2>
      </motion.div>
      {/* slider */}
      <div className="relative w-full mb-96 mt-5">
        {articles.map((article, index) => {
          return (
            <div
              className={`w-full h-[420px] rounded-xl transition-all duration-1000 flex flex-col items-center overflow-hidden absolute shadow-xl ${
                activeSlide === index
                  ? "opacity-100 delay-1000 ease-in"
                  : "opacity-0 ease-out"
              }`}
              key={index}
            >
              {/* slide image */}
              <img src={article.image} alt="USEO" />

              {/* slide informations */}
              <div className="flex justify-center items-center shadow-inner px-5 py-2 bg-[#F4E9FF] rounded-xl mt-2">
                <p className="font-iranYekan text-xs opacity-80">{`${article.date} / ${article.publisher}`}</p>
              </div>

              {/* title & more icon */}
              <div className="flex justify-center items-center gap-2 mt-8 hover:gap-5 transition-all duration-1000">
                <p className="font-morabba font-bold">{article.title}</p>
                <i className="fa-solid fa-right-long opacity-70"></i>
              </div>

              <p className="mt-3 text-center text-xs px-2 opacity-80 font-iranYekan">
                {article.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* all articles */}
      <div className="w-full flex justify-around items-center mt-8 flex-wrap">
        {articles.map((article, index) => {
          return (
            <div
              className="w-[45%] mt-10 rounded-xl overflow-hidden flex shadow-lg flex-col items-center bg-[#f4e9ff]"
              key={index}
            >
              {/* slide image */}
              <img src={article.image} alt="USEO" />

              {/* slide informations */}
              <div className="flex justify-center items-center w-11/12 shadow-inner px-5 py-1 bg-gray-400 bg-opacity-30 rounded-xl mt-2">
                <p className="font-iranYekan text-[10px] text-nowrap opacity-90">{`${article.date} / ${article.publisher}`}</p>
              </div>

              {/* title & more icon */}
              <p className="font-morabba text-sm text-center mt-2 font-bold">
                {article.title}
              </p>

              <p className="mt-1 text-center text-[10px] px-3 pb-2 opacity-90 font-iranYekan">
                {article.description}
              </p>

              {/* more */}
              <div className="flex justify-center items-center gap-2 pb-2 hover:gap-5 transition-all duration-1000">
                <p className="font-morabba font-bold text-xs opacity-80">بیشتر</p>
                <i className="fa-solid fa-right-long opacity-70"></i>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Blog;
