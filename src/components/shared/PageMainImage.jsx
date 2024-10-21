import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function PageMainImage({ image, title }) {
  const location = useLocation();

  return (
    <section id="aboutUsMainImage">
      <div className="container-fluid p-0 position-relative w-100 justify-content-center">
        <div className="position-relative overflow-hidden h-100 overflow-hidden">
          <img
            src={image}
            alt="about us main img"
            className="img-fluid w-100"
          />
        </div>
        <div className="overlay-dark-bg h-100 w-100 position-absolute top-0"></div>
        <div className="position-absolute top-50 translate-middle start-50 container">
          <div className="row">
            <div className="d-flex flex-row align-items-center gap-1 mb-3">
              <Link
                to="/"
                className="text-decoration-none primary-color text-decoration-underline text-capitalize fw-semibold"
              >
                home
              </Link>
              {location.pathname.split("/").map((item, index) => {
                if (item === "") return null;
                return (
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-center align-items-center"
                    >
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-white me-1"
                      />
                      {location.pathname.split("/").length - 1 === index ? (
                        <p className="text-decoration-none text-white text-capitalize fw-semibold m-0">
                          {item.replaceAll("-", " ")}
                        </p>
                      ) : (
                        <Link
                        to={`/${item}`}
                         className={`text-decoration-none primary-color text-decoration-underline text-capitalize fw-semibold m-0`} >
                          {item.replaceAll("-", " ")}
                        </Link>
                      )}
                    </div>
                );
              })}
            </div>
            <h1 className="text-white fw-bold fs-1 text-capitalize">
              {title ??
                location.pathname.replaceAll("/", "").replaceAll("-", " ")}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
