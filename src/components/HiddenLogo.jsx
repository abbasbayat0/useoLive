import { motion } from "framer-motion";

const HiddenLogo = () => {
  return (
    <div className="w-full absolute hidden top-10 right-2 sm:flex justify-end items-center lg:top-16 lg:right-3">
      <img
        src={require("../assets/hiddenLogo.png")}
        alt="USEO"
        className="w-20"
      />
      <motion.img
        initial={{opacity:.5}}
        animate={{opacity:.05}}
        transition={{duration:1, delay:3}}
        src={require("../assets/US.png")}
        alt="USEO"
        className="absolute opacity-5"
      />
    </div>
  );
};

export default HiddenLogo;
