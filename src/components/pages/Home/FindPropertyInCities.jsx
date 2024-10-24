import miami from "../../../assets/images/miami.jpg";
import los from "../../../assets/images/los.jpg";
import newyork from "../../../assets/images/newyork.jpg";
import florida from "../../../assets/images/florida.jpg";
import { Link } from "react-router-dom";

export default function FindPropertyInCities() {
  return (
    <section id="homeFindPropertyInCities">
      <div className="container py-5">
        {/* <!-- ----------------------------- header row ------------------------------ --> */}
        <div className="row">
          <h1 className="text-center fw-bold gray-text-color">
            Find Property in Cities
          </h1>
          <p className="text-center gray-text-color">
            Find the best property in your city
          </p>
        </div>

        {/* <!-- ----------------------------- cities row ------------------------------ --> */}
        <div className="row justify-content-center gap-3 mb-4">
          {/* <!-- ----------------------------- city card ------------------------------ --> */}
          <div className="col-10 col-md-3 col-sm-11 position-relative overflow-hidden p-0 rounded city-card">
            <Link href="#">
              <img src={miami} alt="miami" className="w-100 h-100" />
              <div className="position-absolute bottom-0 d-flex flex-column align-s-center justify-content-end h-100 gradient-overlay w-100">
                <h3 className="text-capitalize text-white text-center">
                  miami
                </h3>
                <p className="text-capitalize text-white text-center">
                  24 properties
                </p>
              </div>
            </Link>
          </div>
          {/* <!-- ----------------------------- city card ------------------------------ --> */}
          <div className="col-10 col-md-8 col-sm-11 position-relative overflow-hidden p-0 rounded city-card">
            <Link href="#">
              <img src={los} alt="miami" className="w-100 h-100" />
              <div className="position-absolute bottom-0 d-flex flex-column align-items-center justify-content-end h-100 gradient-overlay w-100">
                <h3 className="text-capitalize text-white text-center">
                  los angeles
                </h3>
                <p className="text-capitalize text-white text-center">
                  18 properties
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* <!-- ----------------------------- cities row ------------------------------ --> */}
        <div className="row justify-content-center gap-3 mb-4">
          {/* <!-- ----------------------------- city card ------------------------------ --> */}
          <div className="col-10 col-md-8 col-sm-11 position-relative overflow-hidden p-0 rounded city-card">
            <Link href="#">
              <img src={newyork} alt="miami" className="w-100 h-100" />
              <div className="position-absolute bottom-0 d-flex flex-column align-items-center justify-content-end h-100 gradient-overlay w-100">
                <h3 className="text-capitalize text-white text-center">
                  new york
                </h3>
                <p className="text-capitalize text-white text-center">
                  89 properties
                </p>
              </div>
            </Link>
          </div>
          {/* {<!-- ----------------------------- city card ------------------------------ -->} */}
          <div className="col-10 col-lg-3 col-md-3 col-sm-11 position-relative overflow-hidden p-0 rounded city-card">
            <Link href="#">
              <img src={florida} alt="miami" className="w-100 h-100" />
              <div className="position-absolute bottom-0 d-flex flex-column align-items-center justify-content-end h-100 gradient-overlay w-100">
                <h3 className="text-capitalize text-white text-center">
                  florida
                </h3>
                <p className="text-capitalize text-white text-center">
                  47 properties
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
