import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.png";

export default function Page404() {
  return (
    <>
      <section className="light-gray-bg">
        <div className="container py-5">
          <div className="row justify-content-center pb-3">
            <div className="col-6">
              <img src={errorImg} alt="error 404" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <h1 className="text-center fw-bold gray-text-color pt-5 fs-1">
              404
            </h1>
            <p className="text-center fw-bold gray-text-color fs-3">
              Sorry but the page you are looking for does not exist.
            </p>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-2">
              <Link
                to="/"
                className="text-decoration-none fw-normal fs-5 text-center btn primary-bg text-white mt-5 w-100"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
