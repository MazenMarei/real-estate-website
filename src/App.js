import CostumeNavbar from "./components/shared/Navbar/CostumeNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CostumeFooter from "./components/shared/Footer/CustomFooter";
import ScrollBtn from "./components/ScrollBtn";

export default function App() {
  // * returning the JSX of App
  return (
    <>
      <Router>
        <CostumeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <ScrollBtn />
        <CostumeFooter />
      </Router>
    </>
  );
}
