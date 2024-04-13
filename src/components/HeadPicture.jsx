import { motion } from "framer-motion";

const HeadPicture = () => {
  return (
    <div className="w-full lg:w-2/3 h-[350px] relative 375:left-8 425:left-14 520:left-24 sm:top-16 sm:left-32 md:left-0 md:h-[480px] 900:left-16 lg:h-[500px] xl:h-[520px] xl:left-28">
      {/* the base shape */}
      <motion.div
        initial={{ y: -500, x: 500, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1, rotate: 20 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-[240px] 425:w-[260px] 520:w-[280px] sm:w-[300px] lg:w-[330px] 1100:w-[360px] h-[460px] 425:h-[480px] 520:h-[500px] sm:h-[520px] lg:h-[550px] 1100:h-[580px] bg-[#F4E9FF] rounded-b-full absolute -top-32 left-14 1100:left-20"
      ></motion.div>

      {/* upper dots */}
      <motion.img
        initial={{ y: -300, x: 300, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        src={require("../assets/up dots.png")}
        alt="USEO"
        className="absolute top-0 left-44 425:left-48 520:left-56 sm:left-64 lg:left-72 1100:left-80 animate-pulse"
      />

      {/* the higher shape */}
      <motion.div
        initial={{ y: -500, x: 500, opacity: 0, rotate: 18 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="w-[220px] 425:w-[240px] 520:w-[260px] sm:w-[280px] lg:w-[310px] 1100:w-[340px] h-[400px] 425:h-[420px] 520:h-[440px] sm:h-[460px] lg:h-[490px] 1100:h-[520px] bg-[#B094CA] rounded-b-full  absolute -top-20 left-14 1100:left-20"
      ></motion.div>

      {/* down dots */}
      <motion.img
        initial={{ x: -300, y: 300, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        src={require("../assets/down dots.png")}
        alt="USEO"
        className="absolute top-36 animate-pulse 425:top-40 520:top-44 sm:top-48 sm:-left-2 lg:top-52 lg:-left-5 1100:top-60"
      />

      {/* laptop image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        src={`${
          window.innerWidth >= "768"
            ? require("../assets/largeLaptop.png")
            : require("../assets/mobileLaptop.png")
        }`}
        alt="USEO"
        className="absolute w-[320px] 425:w-[340px] 520:w-[360px] sm:w-[380px] md:w-[400px] lg:w-[450px] 1100:w-[500px] md:top-8 md:left-2 810:-left-4 lg:top-0 xl:top-3 xl:-left-2 -left-2 -top-2"
      />

      {/* white section */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="w-[120px] h-9 bg-white rounded-md absolute top-24 right-6 text-nowrap px-2 flex flex-row-reverse items-center shadow-sm 375:right-20 425:right-28 520:top-28 520:right-48 sm:right-72 sm:top-32 md:top-64 md:w-[150px] md:h-12 md:-right-[370px] md:shadow-md md:drop-shadow-xl md:border 810:-right-[390px] 900:-right-[370px] lg:-right-[330px] 1100:-right-[380px] 1100:top-72 1100:w-[180px] 1100:h-14 1100:rounded-lg xl:-right-[350px]"
      >
        {/* callender icon */}
        <div className="hidden md:flex md:justify-center md:items-center h-5 rounded-md bg-[#866ca0] w-4/12 1100:w-2/12 1100:h-6">
          <i className="fa-solid fa-calendar-days text-white text-xs"></i>
        </div>

        {/* title & description */}
        <div className="flex flex-col items-end md:mr-2">
          <h3 className="text-md text-[#866CA0] font-morabba font-extrabold">
            یوسئو
          </h3>
          <p className="tracking-wide -mt-1 font-iranYekan text-[10px] 1100:text-[11px] 1100:-mt-0">
            پیاده سازی کاملا اصولی
          </p>
        </div>
      </motion.div>

      {/* purple section */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="w-[140px] h-9 bg-[#B094CA] rounded-md absolute top-56 left-2 text-nowrap p-2 flex flex-row-reverse items-end shadow-sm bg-opacity-90 425:top-60 520:top-64 sm:top-72 md:top-60 xl:top-72 md:bg-[#866CA0] md:bg-opacity-75 md:left-48 md:w-[160px] md:h-12 1100:left-72"
      >
        {/* letter icon */}
        <div className="bg-[#866CA0] h-5 w-2/12 rounded-md flex justify-center items-center -mr-1 md:mb-2">
          <i className="fa-solid fa-envelope text-xs text-slate-200 md:bg-[#866CA0]"></i>
        </div>

        {/* title & description */}
        <div className="flex flex-col items-end mr-1 w-9/12 md:mb-1">
          <h3 className="text-sm text-white -mb- font-morabba font-semibold">
            تیم یوسئو
          </h3>
          <p className="text-[8px] tracking-wide -mb-1 text-white font-iranYekan md:text-[10px] md:tracking-normal">
            طراحی بر اساس متد روز دنیا
          </p>
        </div>
      </motion.div>

      {/* mobile phone image */}
      {window.innerWidth >= "768" && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          src={require("../assets/phone.png")}
          alt="USEO"
          className="absolute md:w-[75px] top-28 left-10 lg:w-[90px] lg:top-24 1100:w-[100px] xl:top-28 xl:left-14"
        />
      )}

      {/* polygon */}
      <motion.img
        initial={{ rotate: 200, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        src={require("../assets/Polygon.png")}
        alt="USEO"
        className="absolute top-16 left-5 animate-pulse 1100:left-14"
      />

      {/* rectangle */}
      <motion.img
        initial={{ rotate: 200, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        src={require("../assets/Rectangle.png")}
        alt="USEO"
        className="absolute left-72 top-56 animate-pulse 520:left-80 sm:left-96 1100:left-[460px]"
      />
    </div>
  );
};

export default HeadPicture;
