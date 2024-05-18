import { useEffect, useState } from "react";
import { useRef } from "react";

const Blog = () => {
  const items = [1, 2, 3, 4, 5, 6];
  const ref = useRef();
  const [activeSlide, changeActiveSlide] = useState(5);
  useEffect(() => {
    ref.current.scrollTo(ref.current.scrollWidth, 0);
  }, []);
  useEffect(() => {
    if (activeSlide !== 0) {
      setTimeout(() => {
        const eachOne = (ref.current.scrollWidth - 20) / 6;
        ref.current.scrollTo(eachOne * activeSlide + 6, 0);
        changeActiveSlide(activeSlide - 1);
      }, 5000);
    }
  }, [activeSlide]);
  return (
    <div className="w-screen max-w-[1536px] flex flex-col justify-center items-center mt-16 p-2">
      {/* slider */}
      <div
        ref={ref}
        className="hello flex w-full h-96 gap-5 overflow-scroll p-5 scroll-smooth"
      >
        {items.map((item) => {
          return (
            <div
              key={item}
              className="flex flex-col justify-center rounded-xl min-w-[270px] bg-fuchsia-200 overflow-hidden"
            >
              {/* image */}
              <div className="">
                <img src={require("../assets/article.png")} alt="USEO" />
              </div>
              {/* descriptions */}
              <div>{item}</div>
            </div>
          );
        })}
      </div>
      {/* all articles */}
      <div></div>
    </div>
  );
};

export default Blog;
