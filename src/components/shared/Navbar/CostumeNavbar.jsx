import { Nav, Navbar } from "react-bootstrap";
import whiteLogo from "../../../assets/images/white-logo.png";
import logo from "../../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function CostumeNavbar() {
  const location = useLocation();
  const [home, setHome] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);

  return (
    <>
      <Navbar
        expand="lg"
        id="navbar"
        className={`navbar-dark z-3 w-100 top-0 ${
          home ? "home-navbar " : "shadow-sm"
        } position-sticky p-3 px-5 position-sticky top-0 bg-white`}
      >
        {/* --------------------- navbar brand for large devices --------------------- */}

        <Navbar.Brand
          className={`align-middle ${home ? "d-lg-block" : ""} d-none`}
        >
          <Link to="./" className="text-decoration-none text-white">
            <img src={whiteLogo} alt="logo" />
            <span className="align-bottom fs-4 fw-bold"> FindHouse </span>
          </Link>
        </Navbar.Brand>

        {/* --------------------- navbar brand for small devices --------------------- */}
        <Navbar.Brand className={`align-middle ${home ? "d-lg-none" : ""} `}>
          <Link to="./" className="text-decoration-none">
            <img src={logo} alt="logo" />
            <span className="align-bottom fs-4 fw-bold gray-text-color">
              FindHouse
            </span>
          </Link>
        </Navbar.Brand>

        {/* -------------------------- navbar toggler button ------------------------- */}
        <Navbar.Toggle
          aria-controls="navbarNav"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbarToggler"
          className="primary-bg primary-outline-focus"
          type="button"
        />

        {/* -------------------------- navbar collapse div -------------------------- */}
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          {/* ----------------------------- navbar links ----------------------------- */}
          <Nav className="ml-auto text-capitalize fs-5">
            <ul className="navbar-nav ml-auto text-capitalize fs-5">
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to="./"
                >
                  home
                </Link>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item">
                <a
                  className="nav-link dark-secondary-color primary-color-hover"
                  href="#featuredProperties"
                >
                  property
                </a>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item">
                <a
                  className="nav-link dark-secondary-color primary-color-hover"
                  href="#about"
                >
                  services
                </a>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to={"/contact-us"}
                >
                  blog
                </Link>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to={"/about-us"}
                >
                  about us
                </Link>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to={"/contact-us"}
                >
                  contact us
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
