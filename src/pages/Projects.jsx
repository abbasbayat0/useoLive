import React from "react";
import AllProjects from "../components/AllProjects";
import { easeIn, motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: easeIn }}
    >
      <AllProjects />
    </motion.div>
  );
};

export default Projects;
