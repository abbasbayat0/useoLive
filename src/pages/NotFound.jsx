import { easeIn, motion } from "framer-motion";
import React from "react";

const NotFound = () => {
  return (
    <motion.div
      exit={{ opacity: 0, x: -2000 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <h1>404</h1>
      <p>page not found</p>
    </motion.div>
  );
};

export default NotFound;
