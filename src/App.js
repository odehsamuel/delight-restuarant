import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chefs from "./pages/Chefs";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import Chef from "./pages/Chef";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/chefs/:id" element={<Chef />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
