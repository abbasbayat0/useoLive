import React, { useEffect } from "react";
import AllProjects from "../components/AllProjects";
import { easeIn, motion } from "framer-motion";

const Projects = () => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <motion.div
      exit={{ opacity: 0, x: -2000 }}
      transition={{ duration: 0.8, ease: easeIn }}
    >
      <AllProjects />
    </motion.div>
  );
};

export default Projects;
