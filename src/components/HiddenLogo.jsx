import { motion } from "framer-motion";

const HiddenLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1, delay: 3 }}
      className="w-full absolute hidden top-10 right-2 sm:flex justify-end items-start lg:top-16 lg:right-3"
    >
      <img
        src={require("../assets/hiddenLogo.png")}
        alt="USEO"
        className="absolute w-24"
      />
      <img
        src={require("../assets/US.png")}
        alt="USEO"
        className="absolute w-24"
      />
    </motion.div>
  );
};

export default HiddenLogo;
