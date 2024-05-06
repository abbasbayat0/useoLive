import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SinglePorject = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full mt-20 px-2 flex flex-col justify-center sm:mt-24">
        {/* poster & descriptions */}
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center">
            <img src={require("../assets/singlePoster.png")} alt="USEO" />
          </div>
          <div>
            <header>
              <p className="text-center font-morabba opacity-60">
                جزئیات پروژه
              </p>
              <h1 className="text-center font-morabba text-2xl font-bold opacity-90">
                fit داروخانه فیت فارما
              </h1>
              <p className="text-center font-iranYekan tracking-wide mt-5 opacity-70 text-sm">
                داروخانه آنلاین فیت فارما بعنوان داروخانه آنلاین در زمینه فروش مکمل های تخصصی ،مکمل های غذایی ،مکمل های بدنسازی ،مراقبت از پوست و مو،بهداشتی ،مادر و کودک ، تجهیزات پزشکی و محصولات آرایشی با فراهم کردن کامل ترین اپلیکیشن داروخانه آنلاین ، از بهترین و معتبر ترین برند های حال حاضر ، این امکان را فراهم آورده تا شما عزیزان ضمن خریدی سریع و آسان ، از کیفیت برتر محصولات بهره مند شوید 
              </p>
            </header>
            <main></main>
            <footer></footer>
          </div>
        </div>

        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePorject;
