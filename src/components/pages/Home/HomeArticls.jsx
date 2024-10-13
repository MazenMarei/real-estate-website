import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import houseIsolatedImg from "../../../assets/images/house-isolated-field-1.webp";
import characteristicsImg from "../../../assets/images/9-characteristics-4.jpg";
import blogImg from "../../../assets/images/blog2-op5h9ukqohpvlj56kvz57kxf15eqhdeymxa36hjeck.jpg";
import { Link } from "react-router-dom";
import kate from "../../../assets/images/6.jpg";

export default function HomeArticls() {
  return (
    <section id="homeArticls" className="light-gray-bg">
      <div className="container pb-5">
        {/* <!-- ------------------------------ heder row ------------------------------ --> */}
        <div className="row text-center gray-text-color pt-5 mb-5">
          <h1 className="fw-bold">Articles & Tips</h1>
          <p className="fw-semibold fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* <!-- ----------------------------- Articles row ----------------------------- --> */}
        <div className="row justify-content-center gap-4 mx-auto mb-5 h-100">
          <Swiper
            rewind={true}
            pagination={{
              clickable: true,
              el: ".articles-swiper-pagination",
              bulletActiveClass: "custom-active-pagination-bullet",
              bulletClass: "custom-pagination-bullet",
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              992: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {/* <!-- ----------------------------- Article card ------------------------------ --> */}
            <SwiperSlide>
              <div className="h-100 card pt-2 p-0 gray-border border-0">
                {/* <!-- -------------------------- image card -------------------------- --> */}
                <div className="px-2">
                  <div className="slide position-relative overflow-hidden rounded-3">
                    <div className="carousel-item active">
                      <img
                        src={houseIsolatedImg}
                        className="d-block w-100"
                        alt="property"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- ----------------------------- card body ----------------------------- --> */}
                <div className="card-body">
                  <div className="card-title">
                    <p className="primary-color fw-semibold fs-5 text-capitalize">
                      Business
                    </p>
                    <Link to={"#"} className="text-decoration-none">
                      <h4 className="gray-text-color fw-bold text-capitalize primary-color-hover">
                        Skills That You Can Learn In The Real Estate Market
                      </h4>
                    </Link>
                  </div>
                </div>

                {/* <!-- ----------------------------- card footer ----------------------------- --> */}
                <div className="card-footer bg-transparent">
                  <div className="row p-3 px-1">
                    {/* <!-- ----------------------------- profile row ----------------------------- --> */}
                    <div className="d-flex flex-row col-7 gap-2">
                      <div className="col-3 rounded-circle p-1">
                        <img
                          src={kate}
                          alt="profile"
                          className="rounded-circle w-100"
                        />
                      </div>
                      <div className="col-8 h-100 d-flex align-items-end pt-3">
                        <p className="text-capitalize gray-text-color">
                          ali tufan
                        </p>
                      </div>
                    </div>
                    {/* <!-- --------------------------- posted time row --------------------------- --> */}
                    <div className="d-flex col-5 align-items-end justify-content-end">
                      <p className="p-0">7 August 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- ----------------------------- Article card ------------------------------ --> */}
            <SwiperSlide>
              <div className="h-100 card pt-2 p-0 gray-border border-0">
                {/* <!-- -------------------------- image card -------------------------- --> */}
                <div className="px-2">
                  <div className="slide position-relative overflow-hidden rounded-3">
                    <div className="carousel-item active">
                      <img
                        src={characteristicsImg}
                        className="d-block w-100"
                        alt="property"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- ----------------------------- card body ----------------------------- --> */}
                <div className="card-body">
                  <div className="card-title">
                    <p className="primary-color fw-semibold fs-5 text-capitalize">
                      Construction
                    </p>
                    <Link to={"#"} className="text-decoration-none">
                      <h4 className="gray-text-color fw-bold text-capitalize primary-color-hover">
                        Bedroom Colors You will Never this Regret
                      </h4>
                    </Link>
                  </div>
                </div>

                {/* <!-- ----------------------------- card footer ----------------------------- --> */}
                <div className="card-footer bg-transparent">
                  <div className="row p-3 px-1">
                    {/* <!-- ----------------------------- profile row ----------------------------- --> */}
                    <div className="d-flex flex-row col-7 gap-2">
                      <div className="col-3 rounded-circle p-1">
                        <img
                          src={kate}
                          alt="profile"
                          className="rounded-circle w-100"
                        />
                      </div>
                      <div className="col-8 h-100 d-flex align-items-end pt-3">
                        <p className="text-capitalize gray-text-color">
                          ali tufan
                        </p>
                      </div>
                    </div>
                    {/* <!-- --------------------------- posted time row --------------------------- --> */}
                    <div className="d-flex col-5 align-items-end justify-content-end">
                      <p className="p-0">7 August 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <!-- ----------------------------- Article card ------------------------------ --> */}
            <SwiperSlide>
              <div className="h-100 card pt-2 p-0 gray-border border-0">
                {/* <!-- -------------------------- image card -------------------------- --> */}
                <div className="px-2">
                  <div className="slide position-relative overflow-hidden rounded-3">
                    <div className="carousel-item active">
                      <img
                        src={blogImg}
                        className="d-block w-100"
                        alt="property"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- ----------------------------- card body ----------------------------- --> */}
                <div className="card-body">
                  <div className="card-title">
                    <p className="primary-color fw-semibold fs-5 text-capitalize">
                      Business
                    </p>
                    <Link to={"#"} className="text-decoration-none">
                      <h4 className="gray-text-color fw-bold text-capitalize primary-color-hover">
                        5 Essential Steps for Buying everyone Investment
                      </h4>
                    </Link>
                  </div>
                </div>

                {/* <!-- ----------------------------- card footer ----------------------------- --> */}
                <div className="card-footer bg-transparent">
                  <div className="row p-3 px-1">
                    {/* <!-- ----------------------------- profile row ----------------------------- --> */}
                    <div className="d-flex flex-row col-7 gap-2">
                      <div className="col-3 rounded-circle p-1">
                        <img
                          src={kate}
                          alt="profile"
                          className="rounded-circle w-100"
                        />
                      </div>
                      <div className="col-8 h-100 d-flex align-items-end pt-3">
                        <p className="text-capitalize gray-text-color">
                          ali tufan
                        </p>
                      </div>
                    </div>
                    {/* <!-- --------------------------- posted time row --------------------------- --> */}
                    <div className="d-flex col-5 align-items-end justify-content-end">
                      <p className="p-0">7 August 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="row justify-content-center">
            <div className="articles-swiper-pagination d-lg-none justify-content-center d-flex flex-row p-3 fs-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
