import { Nav, Navbar } from "react-bootstrap";
import whiteLogo from "../../../assets/images/white-logo.png";
import logo from "../../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import { useSelector } from "react-redux";
import UserWidget from "./userWidget";

export default function CostumeNavbar() {
  const location = useLocation();
  const [home, setHome] = useState(true);
  const [show, setShow] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const userInformation = useSelector((state) => state.userInfo);

  const handleLoginShow = (e) => {
    e.target.innerText === "Login" ? setLoginForm(true) : setLoginForm(false);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
    handleLoginShow(e);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);

  return (
    <>
      {/* <!-- Login and sign up Modal --> */}

      <LoginAndRegister
        show={show}
        handleClose={handleClose}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        handleLoginShow={handleLoginShow}
      />

      <Navbar
        expand="lg"
        id="navbar"
        className={`navbar-dark z-3 w-100 top-0 ${
          home ? "home-navbar " : "shadow-sm"
        } position-sticky p-3 px-md-5 px-sm-3 px-3 position-sticky top-0 bg-white `}
      >
        {/* -------------------------- navbar toggler button ------------------------- */}
        <Navbar.Toggle
          aria-controls="navbarNav"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbarToggler"
          className="primary-bg primary-outline-focus "
          type="button"
        />

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
        <Navbar.Brand
          className={`align-middle m-0 ${home ? "d-lg-none" : ""} `}
        >
          <Link to="./" className="text-decoration-none">
            <img src={logo} alt="logo" />
            <span className="align-bottom fs-4 fw-bold gray-text-color">
              FindHouse
            </span>
          </Link>
        </Navbar.Brand>

        {/* -------------------------- navbar collapse div -------------------------- */}
        <Navbar.Collapse id="navbarNav" className="justify-content-end order-1 order-lg-0">
          {/* ----------------------------- navbar links ----------------------------- */}
          <Nav className="ml-auto text-capitalize fs-5">
            <ul className="navbar-nav ml-auto text-capitalize fs-5 ">
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item order-lg-0 order-1">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to="./"
                >
                  home
                </Link>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item order-1">
                <a
                  className="nav-link dark-secondary-color primary-color-hover"
                  href="#featuredProperties"
                >
                  property
                </a>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item order-lg-2 order-1">
                <a
                  className="nav-link dark-secondary-color primary-color-hover"
                  href="#about"
                >
                  services
                </a>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item order-lg-3 order-1">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to={"/contact-us"}
                >
                  blog
                </Link>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item order-lg-4 order-1">
                <Link
                  className="nav-link dark-secondary-color primary-color-hover"
                  to={"/about-us"}
                >
                  about us
                </Link>
              </li>
              {/* <!-- ------------------------------ nav item ------------------------------- --> */}
              <li className="nav-item order-lg-5 order-1">
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
        {/* <!-- ------------------------------ user login ------------------------------- --> */}
        <div className="row d-flex h-100 flex-row gap-1 justify-content-around align-items-center px-lg-3 px-0 ms-1 left-small-border order-0 order-lg-1">
          {userInformation.token ? (
            <UserWidget home={home} />
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} className="fs-4  p-0 col m-0" />
              <div className="d-flex flex-row gap-0 justify-content-around align-items-center col">
                <button
                  className="bg-transparent border-0 col p-0 primary-color-hover"
                  onClick={handleShow}
                >
                  Login
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="m7 21l7.9-18H17L9.1 21z" />
                </svg>
                <button
                  className="bg-transparent border-0 col p-0 primary-color-hover"
                  onClick={handleShow}
                >
                  Register
                </button>
              </div>
            </>
          )}
        </div>
      </Navbar>
    </>
  );
}
