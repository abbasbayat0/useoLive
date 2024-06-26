import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import SinglePorject from "./pages/SingleProject";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Blog from "./pages/Blog";

function App() {
  const location = useLocation();

  // scroll to top after each refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-[1536px] flex justify-center items-center flex-col relative">
        <Navbar />
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/useoLive" element={<Home />} />
              <Route path="/useoLive/projects" element={<Projects />} />
              <Route path="/useoLive/projects/fitFarma" element={<SinglePorject />} />
              <Route path="/useoLive/contact" element={<Contact />} />
              <Route path="/useoLive/blog" element={<Blog />} />

              <Route path="/useoLive/*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
        <Footer />
    </div>
  );
}

export default App;
