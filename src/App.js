import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chefs from "./pages/Chefs";
import Services from "./pages/Services";
import Chef from "./pages/Chef";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/chefs/:id" element={<Chef />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
