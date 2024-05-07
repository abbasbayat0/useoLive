import React from "react";
const SinglePorject = () => {
  return (
    <div>
      <div className="w-full mt-20 px-2 flex flex-col justify-center sm:mt-24 md:mt-10 overflow-x-hidden">
        {/* poster & descriptions */}
        <div className="flex justify-center items-center flex-col md:flex-row-reverse">
          <div className="flex justify-center items-center md:w-2/3 md:-mr-8">
            <img
              src={require("../assets/singlePoster.png")}
              alt="USEO"
              className="w-10/12 md:mt-10 rounded-r-2xl lg:w-9/12"
            />
          </div>
          <div className="md:w-1/2 md:mt-10 810:mt-8 lg:mt-10 lg:-mr-10 xl:mt-0">
            <header className="flex justify-center items-center flex-col md:justify-end">
              <p className="text-center font-morabba opacity-60 md:w-full md:text-end xl:text-lg">
                جزئیات پروژه
              </p>
              <h1 className="text-center font-morabba text-2xl font-bold opacity-90 md:w-full md:text-end 810:text-3xl xl:mt-5 xl:text-4xl">
                FIT داروخانه فیت فارما
              </h1>
              {/* stars */}
              <div className="mt-2 md:w-full md:text-end xl:mt-3">
                <i className="fa-solid fa-star text-[#FFCD1A] xl:text-lg"></i>
                <i className="fa-solid fa-star text-[#FFCD1A] xl:text-lg xl:ml-2"></i>
                <i className="fa-solid fa-star text-[#FFCD1A] xl:text-lg xl:ml-2"></i>
                <i className="fa-solid fa-star text-[#FFCD1A] xl:text-lg xl:ml-2"></i>
                <i className="fa-solid fa-star text-[#FFCD1A] xl:text-lg xl:ml-2"></i>
              </div>
            </header>
            <main>
              <p className="text-center font-iranYekan tracking-wide mt-5 opacity-70 text-sm md:w-11/12 md:ml-auto md:text-end md:text-xs md:mt-2 810:mt-4 lg:text-sm xl:text-base">
                داروخانه آنلاین فیت فارما بعنوان داروخانه آنلاین در زمینه فروش
                مکمل های تخصصی ،مکمل های غذایی ،مکمل های بدنسازی ،مراقبت از پوست
                و مو،بهداشتی ،مادر و کودک ، تجهیزات پزشکی و محصولات آرایشی با
                فراهم کردن کامل ترین اپلیکیشن داروخانه آنلاین ، از بهترین و
                معتبر ترین برند های حال حاضر ، این امکان را فراهم آورده تا شما
                عزیزان ضمن خریدی سریع و آسان ، از کیفیت برتر محصولات بهره مند
                شوید
              </p>
              <div className="w-full h-20 mt-8 flex justify-center items-center flex-row-reverse gap-5 md:flex-col md:items-end md:gap-2 md:mt-5 810:mt-7 lg:gap-3 xl:gap-5 xl:mt-14">
                <div className="flex flex-col justify-center items-center w-1/3 md:flex-row-reverse md:w-2/3">
                  <img src={require("../assets/singleAttr1.png")} alt="USEO" className="mx-auto w-5/12 520:w-14 md:w-6 xl:w-9" />
                  <p className="text-center font-iranYekan text-xs mt-2 opacity-80 md:text-nowrap md:w-full md:text-end md:mr-2 md:opacity-100 md:mt-0 lg:text-sm xl:text-base">واکنش گرا</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3 md:flex-row-reverse md:w-2/3">
                  <img src={require("../assets/singleAttr2.png")} alt="USEO" className="mx-auto w-5/12 520:w-14 md:w-6 xl:w-9" />
                  <p className="text-center font-iranYekan text-xs mt-2 opacity-80 md:text-nowrap md:w-full md:text-end md:mr-2 md:opacity-100 md:mt-0 lg:text-sm xl:text-base">افزودن نامحدود محصول</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3 md:flex-row-reverse md:w-2/3">
                  <img src={require("../assets/singleAttr3.png")} alt="USEO" className="mx-auto w-5/12 520:w-14 md:w-6 xl:w-9" />
                  <p className="text-center font-iranYekan text-xs mt-2 opacity-80 md:text-nowrap md:w-full md:text-end md:mr-2 md:opacity-100 md:mt-0 lg:text-sm xl:text-base">سرعت و بهینه سازی سئو</p>
                </div>
              </div>
            </main>
            <footer className="flex justify-center items-center mt-10 md:mt-0 md:justify-start 810:mt-10">
              <div className="w-32 h-8 bg-black text-white flex justify-center items-center rounded-2xl font-sans text-xs 425:w-44 425:h-10 425:text-sm md:h-7 md:w-32 md:text-[12px] md:ml-5 900:ml-8 1100:w-36 1100:h-9 xl:text-base xl:w-40 xl:h-10 xl:ml-10">
              {`<`} پیش نمایش سایت
              </div>
            </footer>
          </div>
        </div>

        {/* similar projects */}
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col justify-center items-center md:w-full md:flex-row-reverse md:gap-3 md:justify-start">
            <img src={require("../assets/taaj.png")} alt="USEO" className="w-12" />
            <p className="font-morabba font-bold">نمونه کار های مشابه</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-5 sm:flex-row sm:flex-wrap">
            <img src={require("../assets/similar1.png")} alt="USEO" className="w-10/12 425:w-11/12 520:w-full sm:w-1/3 md:w-1/6" />
            <img src={require("../assets/similar2.png")} alt="USEO" className="w-10/12 425:w-11/12 520:w-full sm:w-1/3 md:w-1/6" />
            <img src={require("../assets/similar3.png")} alt="USEO" className="w-10/12 425:w-11/12 520:w-full sm:w-1/3 md:w-1/6" />
            <img src={require("../assets/similar4.png")} alt="USEO" className="w-10/12 425:w-11/12 520:w-full sm:w-1/3 md:w-1/6" />
            <img src={require("../assets/similar5.png")} alt="USEO" className="w-10/12 425:w-11/12 520:w-full sm:w-1/3 md:w-1/6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePorject;
