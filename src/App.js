import MainPoster from "./components/MainPoster";
import MainPosterDesc from "./components/MainPosterDesc";
import PosterTwo from "./components/PosterTwo";
import Navbar from "./components/Navbar";
import StarSections from "./components/StarSections";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  // scroll to top after each refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-screen">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
