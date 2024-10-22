import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
export default function CostumeFooter() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setTimeout(() => {
        setValidated(false);
      }, 3000);
    } else {
      toast.success("Subscribed to site news!!", {
        closeOnClick: true,
        pauseOnHover: true,
      });
      event.target.reset();
      return setValidated(true);
    }

    setValidated(true);
  };

  return (
    <footer>
      {/* <!-- ----------------------------- top footer ------------------------------ --> */}
      <div className="w-100 secondary-bg justify-content-center p-5">
        <div className="container pt-5">
          <div className="row pt-3">
            {/* <!-- ----------------------------- about site ----------------------------- --> */}
            <div className="col-lg-3 col-sm-6 col-12">
              <h4 className="text-capitalize text-white fw-bold mb-4">
                about site
              </h4>
              <p className="light-gray-text-color fs-6 fw-semibold">
                We're reimagining how you buy, sell and rent. It's now easier to
                get into a place you love. So let's do this, together.
              </p>
            </div>

            {/* <!-- ----------------------------- Quick Links ----------------------------- --> */}
            <div className="col-lg-3 col-sm-6 col-12">
              <h4 className="text-capitalize text-white fw-bold mb-4">
                Quick Links
              </h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link
                    to="./about-us"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    about us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"#"}
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    terms & conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"#"}
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    user's guide
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"#"}
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    support center
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to={"#"}
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    press info
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- ----------------------------- contaact us ----------------------------- --> */}
            <div className="col-lg-3 col-sm-6 col-12">
              <h4 className="text-capitalize text-white fw-bold mb-4">
                contaact us
              </h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    href="mailto:info@findhouse.com"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    info@findhouse.com
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://maps.app.goo.gl/Meojq2NbvPpwNX6F7"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    Collins Street West, Victoria
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://maps.app.goo.gl/Meojq2NbvPpwNX6F7"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    8007, Australia.
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="tel:+1 246-345-0699"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    +1 246-345-0699
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="tel:+1 246-345-0695"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    +1 246-345-0695
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- ----------------------------- social media ----------------------------- --> */}
            <div className="col-lg-3 col-sm-6 col-12">
              <h4 className="text-capitalize text-white fw-bold mb-4">
                follow us
              </h4>
              <ul className="list-unstyled flex-row d-flex gap-4">
                <li className="mb-3">
                  <a
                    href="https://www.facebook.com/"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="fs-5" />
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://x.com/?lang=en"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="fs-5" />
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.instagram.com/"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="fs-5" />
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.pinterest.com/"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    <FontAwesomeIcon icon={faPinterest} className="fs-5" />
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/"
                    className="white-hover light-gray-text-color text-decoration-none text-capitalize fw-semibold"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="fs-5" />
                  </a>
                </li>
              </ul>

              {/* <!-- ----------------------------- subscribe ----------------------------- --> */}
              <h4 className="text-capitalize text-white fw-bold mb-4">
                Subscribe
              </h4>
              <Form
                validated={validated}
                onSubmit={handleSubmit}
                className="d-flex f-row gap-3"
                noValidate
              >
                <div className="position-relative">
                  <Form.Control
                    type="email"
                    id="subscribeEmail"
                    className="form-control rounded-pill"
                    aria-describedby="validationServerEmailSubcribe"
                    required
                    placeholder="Enter your email"
                  />
                  <div
                    id="validationServerEmailSubcribe"
                    className="invalid-feedback position-absolute"
                  >
                    Please Enter Your Email.
                  </div>
                </div>
                <button
                  className="btn primary-bg text-white rounded-circle"
                  type="submit"
                  data-bs-target="#my-toast"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ----------------------------- bottom footer ------------------------------ --> */}
      <div className="w-100 dark-secondary-bg p-5">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-lg-row flex-sm-column flex-column justify-content-between row-gap-5">
              <div className="d-flex">
                <ul className="list-unstyled d-flex flex-md-row flex-sm-column flex-column gap-4 my-auto">
                  <li>
                    <a
                      href="./"
                      className="white-hover light-gray-text-color text-decoration-none text-capitalize fs-5"
                    >
                      home
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="white-hover light-gray-text-color text-decoration-none text-capitalize fs-5"
                    >
                      listing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      className="white-hover light-gray-text-color text-decoration-none text-capitalize fs-5"
                    >
                      property
                    </Link>
                  </li>
                  <li>
                    <a
                      href="./about-us"
                      className="white-hover light-gray-text-color text-decoration-none text-capitalize fs-5"
                    >
                      about us
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"./blog"}
                      className="white-hover light-gray-text-color text-decoration-none text-capitalize fs-5"
                    >
                      blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact-us"}
                      className="white-hover light-gray-text-color text-decoration-none text-capitalize fs-5"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="light-gray-text-color fs-5">
                  © 2024 by compny. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
