import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import OurPartners from "./pages/OurPartners";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/*" element={<AboutUs />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/sectors/*" element={<Sectors />} />
          <Route path="/our-partners/*" element={<OurPartners />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
