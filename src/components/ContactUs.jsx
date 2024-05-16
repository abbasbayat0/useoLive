import { motion } from "framer-motion";
import HiddenLogo from "./HiddenLogo";

const ContactUs = () => {
  return (
    <div className="w-screen max-w-[1536px] flex flex-col sm:flex-row-reverse relative justify-between items-center mt-10 p-10 900:-mb-28 xl:-mb-40">
      <HiddenLogo />

      {/* header */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="bg-[#B094CA] rounded-3xl p-10 shadow-md m-10 w-full sm:w-1/3 flex flex-col gap-8 sm:absolute sm:z-10 sm:left-0 375:w-10/12 425:w-8/12 520:w-6/12 810:w-4/12 900:w-3/12 900:left-5 1100:left-14 xl:left-20 xl:w-72 1400:left-28"
      >
        <h3 className="text-center sm:text-end font-morabba font-bold tracking-wider text-white text-xl">
          تماس با ما
        </h3>
        <div className="flex flex-row-reverse gap-4">
          <i class="fa-regular fa-envelope text-white opacity-80 text-2xl w-2/12 text-end"></i>
          <p className="w-10/12 text-end text-white opacity-90">
            test@test.com
          </p>
        </div>
        <div className="flex flex-row-reverse gap-4">
          <i class="fa-solid fa-phone text-white opacity-80 text-2xl w-2/12 text-end"></i>
          <p className="w-10/12 text-end text-white opacity-90">
            0000000000000
          </p>
        </div>
        <div className="flex flex-row-reverse gap-4">
          <i class="fa-regular fa-building text-white opacity-80 text-2xl w-2/12 text-end"></i>
          <p className="w-10/12 text-end text-white opacity-90">test adress</p>
        </div>
        <div className="flex flex-row-reverse gap-4">
          <i class="fa-regular fa-clock text-white opacity-80 text-2xl w-2/12 text-end"></i>
          <p className="w-10/12 text-end text-white opacity-90">
            00:00 - 00:00
          </p>
        </div>
      </motion.div>

      {/* main */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="w-full sm:w-8/12 p-2 sm:mr-0 900:mr-5 1100:mr-14 xl:mr-20 1400:mr-28"
      >
        <h1 className="text-[#B094CA] font-morabba text-4xl font-bold text-center sm:text-end text-nowrap">
          با ما صحبت کنید
        </h1>
        <p className="font-iranYekan text-black opacity-70 text-center sm:text-end sm:text-sm sm:w-10/12 sm:ml-auto mt-3">
          با ما تماس بگیرید ؛ همکاران ما آماده ی پاسخگویی به شما در کوتاه ترین
          زمان ممکن هستند
        </p>
        <form
          action="#"
          className="flex flex-col justify-center items-center sm:items-end gap-5 mt-10 425:gap-6"
        >
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            type="text"
            placeholder="نام"
            required
            maxLength={15}
            className="text-center sm:text-end w-1/2 sm:w-3/12 border-b-2 p-2 xl:w-2/12 outline-none focus:border-black focus:placeholder:text-black transition-all duration-300"
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            type="text"
            placeholder="ایمیل"
            required
            maxLength={30}
            className="text-center sm:text-end w-9/12 sm:w-6/12 border-b-2 p-2 xl:w-4/12 outline-none focus:border-black focus:placeholder:text-black transition-all duration-300"
          />
          <motion.textarea
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            type="textarea"
            placeholder="پیغام"
            required
            maxLength={300}
            className="text-center sm:text-end w-full sm:w-10/12 border-b-2 px-2 py-5 xl:w-6/12 outline-none focus:border-black focus:placeholder:text-black transition-all duration-300 resize-none"
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            type="submit"
            value="ارسال"
            className="w-1/4 h-8 rounded-xl text-white bg-[#b094ca] xl:w-1/5 hover:scale-110 transition-all duration-200"
          />
        </form>
      </motion.div>

      {/* icons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="bg-[#F4E9FF] w-full rounded-full sm:rounded-lg mt-10 sm:mt-0 sm:w-4/12 sm:h-[450px] flex justify-around sm:items-end p-5 sm:ml-0 375:w-8/12 425:w-7/12 520:w-5/12 810:w-3/12 900:w-2/12 900:ml-5 1100:ml-14 xl:ml-20 xl:w-60 1400:ml-28"
      >
        <i class="fa-brands fa-instagram text-xl"></i>
        <i class="fa-brands fa-instagram text-xl"></i>
        <i class="fa-brands fa-instagram text-xl"></i>
      </motion.div>
    </div>
  );
};

export default ContactUs;
