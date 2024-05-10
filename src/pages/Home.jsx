import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { easeIn, easeOut, motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800);
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="flex flex-col justify-center items-center"
    >
      <Header />
      <Main />
    </motion.div>
  );
};

export default Home;