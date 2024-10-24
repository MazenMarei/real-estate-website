import CostumeNavbar from "./components/shared/Navbar/CostumeNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import CostumeFooter from "./components/shared/Footer/CustomFooter";
import ScrollBtn from "./components/shared/ScrollBtn";
import Page404 from "./components/pages/Page404";

import Services from "./components/pages/services/services"
import Contact from "./components/pages/Contact/Contact"
export default function App() {
  // * returning the JSX of App

  return (
    <>
      <Router>
        <CostumeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/contact-us" element={<Contact />} />
          
          
        </Routes>
        <ScrollBtn />
        <CostumeFooter />
      </Router>
    </>
  );
}
