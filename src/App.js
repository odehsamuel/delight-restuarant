import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SpecialOffers from "./components/SpecialOffers";
import ChefList from "./components/ChefList";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Chefs from "./pages/Chefs";

function App() {
  return (
    <Router>
      <NavBar />
      <section>
        <div className="content-container">
          <div className="content-header">
            <div className="discount__loading-2"></div>
            <div className="discount__loading-1"></div>
            <div className="discount__announcer">
              <p>
                <span>-30</span>% off sales
              </p>
            </div>
            <h1 className="content-header-title">What do you Delight...?</h1>
          </div>
        </div>
      </section>
      <Home />
      <About />
      <Chefs />
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chefs" element={<Chefs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
