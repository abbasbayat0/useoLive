import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import SinglePorject from "./pages/SingleProject";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // scroll to top after each refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useoLive" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/fitFarma" element={<SinglePorject />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
