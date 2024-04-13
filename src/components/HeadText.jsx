import { motion } from "framer-motion";

const HeadText = () => {
  return (
    <div className="w-full h-[400px] flex flex-col items-end px-9 mt-5 520:mt-10 sm:mt-36 sm:h-[280px] md:mt-[150px] md:h-[400px] lg:w-[500px] lg:mr-10 1100:w-[600px] xl:mr-24">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
         className="bg-[#EEDCFF] w-2/3 h-4 mt-4 rounded-full absolute -z-10 375:w-[220px] 520:mr-11 sm:w-8/12 md:mt-12 md:w-[200px] md:mr-0 lg:w-[300px] 1100:w-[200px]"></motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="font-morabba text-black text-end text-3xl font-black 520:text-center sm:mx-auto md:text-end xl:text-4xl"
      >
        تیم طراحی سایت و پشتیبانی وردپرس یوسئو
      </motion.h1>
      {window.innerWidth <= "640" ? (
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-iranYekan text-center mt-5 opacity-90 375:mt-5"
        >
          شما در کنار ما می توانید تجربه کسب و کار آنلاین را داشته باشید و به
          بزرگترین مارکت دنیا با 64 میلیون کاربر ایرانی دسترسی داشته باشید. فقط
          کافی است تا با ابزار هایی که در اختیار دارید سیستم سازی کسب و کار
          آنلاین خود را شروع کنید. ما در این مسیر همراه شما هستیم
        </motion.p>
      ) : (
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-iranYekan text-center mt-5 opacity-90 375:mt-5 sm:mt-8 md:text-sm md:mt-4 md:text-end xl:text-base xl:mt-5"
        >
          شما در کنار ما می توانید تجربه کسب و کار آنلاین را داشته باشید و به
          بزرگترین مارکت دنیا با 64 میلیون کاربر ایرانی دسترسی داشته باشید
        </motion.p>
      )}
    </div>
  );
};

export default HeadText;
