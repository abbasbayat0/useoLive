import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { easeIn, easeOut, motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: easeIn }}
    >
      <Header />
      <Main />
    </motion.div>
  );
};

export default Home;
