import { useRef } from "react";
import { information } from "../informations";
import { useEffect } from "react";

const Blog = () => {
  const articles = information.articles;
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTo(2000, 0);
  }, []);
  return (
    <div className="w-screen max-w-[1536px] mt-16 flex flex-col justify-center items-center lg:-mb-10">
      {/* header */}
      <div className="w-full flex flex-col justify-center items-center sm:flex-row-reverse sm:gap-2 sm:justify-start sm:my-5 sm:-ml-12 900:-ml-44 1400:-ml-60">
        <div className="w-10 h-10 rounded-2xl bg-blue-500 bg-opacity-40 flex justify-center items-center">
          <i className="fa-solid fa-blog text-blue-500 text-2xl"></i>
        </div>
        <h2 className="font-morabba text-xl tracking-wide font-bold opacity-90 mt-2 lg:text-2xl sm:mt-0">
          وبلاگ
        </h2>
      </div>

      <div
        ref={ref}
        className="hello w-full p-5 flex flex-col justify-center items-center gap-5 520:flex-row 520:flex-wrap 520:p-0 520:py-5 sm:flex-nowrap sm:overflow-x-scroll sm:justify-start sm:w-[630px] md:w-[750px] 810:w-[790px] 900:w-[850px] lg:w-[950px] lg:h-[500px] 1100:w-[1000px] 1400:w-[1200px] 1400:h-[550px]"
      >
        {/* container for scroll */}
        <div className="flex flex-wrap justify-center gap-5 sm:flex-nowrap sm:h-80 sm:gap-1 md:gap-3 810:gap-2 900:gap-9 lg:-mt-32 1100:gap-4 1400:gap-10 1400:-mt-52">
          {articles.map((article, index) => {
            return (
              <div
                key={index}
                className="h-96 w-60 flex flex-col items-center border-2 rounded-lg overflow-hidden shadow-lg 425:w-64 520:w-[45%] sm:w-52 sm:h-80 md:w-60 810:w-64 lg:w-72 lg:h-[450px] 1100:w-80 1400:w-[370px] 1400:h-[500px]"
              >
                {/* image */}
                <div className="w-full h-1/3 overflow-hidden">
                  <img
                    src={require("../assets/article.png")}
                    alt="USEO"
                    className="hover:scale-125 transition-all duration-500"
                  />
                </div>

                <div className="pt-3 h-2/3 flex flex-col justify-center items-center bg-[#f4e9ff] bg-opacity-40 lg:pt-10">
                  {/* date and subject */}
                  <div className="w-8/12 rounded-3xl flex justify-center items-center p-4 py-3 h-3 bg-opacity-80 bg-[#F4E9FF] border sm:w-11/12 sm:mt-0 lg:w-9/12 lg:-mt-8 1400:-mt-5">
                    <p className="font-iranYekan text-[10px] opacity-70 lg:text-sm 1400:text-base">
                      {article.date} / {article.subject}
                    </p>
                  </div>

                  {/* title */}
                  <h3 className="p-4 tracking-wide opacity-90 text-center font-morabba font-bold text-base sm:text-sm lg:text-lg 1400:text-2xl">
                    {article.title}
                  </h3>

                  {/* description */}
                  <p className="font-iranYekan text-xs px-2 opacity-60 text-center sm:text-[10px] lg:text-sm lg:px-5 1400:text-base">
                    {article.description}
                  </p>

                  {/* view more */}
                  <div className="w-full h-10 mt-14 flex justify-between px-5 sm:mt-5 lg:mt-10 1400:px-10">
                    <span className="font-bold text-lg text-[#B094CA] 1400:text-xl">
                      &lt;
                    </span>
                    <p className="font-morabba text-sm tracking-wider font-bold text-[#B094CA] 1400:text-base">
                      مشاهده بیشتر
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
