import { useEffect } from "react";
import ContactUs from "../components/ContactUs";
import { motion, easeIn } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <motion.div
    exit={{ opacity: 0, x: -2000 }}
    transition={{ duration: 0.8, ease: easeIn }}
      className="flex flex-col justify-center items-center"
    >
      <ContactUs />
    </motion.div>
  );
};

export default Contact;
