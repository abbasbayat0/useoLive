import { motion } from "framer-motion"
import HeadPicture from "./HeadPicture"
import HeadText from "./HeadText"
import HiddenLogo from "./HiddenLogo"

const Header = () => {
  return (
    <motion.header
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full overflow-hidden relative rounded-b-[60px] shadow-2xl shadow-gray-200 md:flex sm:rounded-b-[100px]"
      >
        <HeadPicture />
        <HeadText />
        <HiddenLogo />
      </motion.header>
  )
}

export default Header