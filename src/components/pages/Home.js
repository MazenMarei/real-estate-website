import HomeMainImage from "../homeMainImage";
import CarouselCard from "../shared/CarouselCard/CarouselCard";
import image from "../../assets/images/8-850x550.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ToastContainer } from "react-toastify";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import miami from "../../assets/images/miami.jpg";
import los from "../../assets/images/los.jpg";
import newyork from "../../assets/images/newyork.jpg";
import florida from "../../assets/images/florida.jpg";
import houseIsolatedImg from "../../assets/images/house-isolated-field-1.webp";
import characteristicsImg from "../../assets/images/9-characteristics-4.jpg";
import blogImg from "../../assets/images/blog2-op5h9ukqohpvlj56kvz57kxf15eqhdeymxa36hjeck.jpg";
import { Link } from "react-router-dom";
import kate from "../../assets/images/6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <HomeMainImage />
      <section className=" light-gray-bg">
        <div className="container pt-5">
          <div className="row text-center gray-text-color pt-5">
            <h1 className="fw-bold">Featured Properties</h1>
            <p>Handpicked properties by our team</p>
          </div>
          <Swiper
            className="p-2"
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            rewind={true}
            pagination={{
              clickable: true,
              el: ".home-swiper-pagination",
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
            onSlideChange={() => console.log("big slide change")}
          >
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 p-md-0">
                    <CarouselCard image={image} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="row justify-content-center">
              <div className="home-swiper-pagination justify-content-center d-flex flex-row p-3 fs-2"></div>
            </div>
          </Swiper>
        </div>
      </section>

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

      {/* <!-- --------------------------- why us section ---------------------------- --> */}
      <section id="homeWhyUs" className="light-gray-bg">
        <div className="container py-5 justify-content-center">
          {/* <!-- ----------------------------- header row ------------------------------ --> */}
          <div className="row mt-4">
            <h1 className="text-center fw-bold gray-text-color text-capitalize">
              why choose us
            </h1>
            <p className="text-center gray-text-color fs-5">
              We provide full service at every step.
            </p>
          </div>

          {/* <!-- ----------------------------- why us row ------------------------------ --> */}
          <div className="row justify-content-center gap-5 py-5">
            <div className="col-11 px-0 row h-100">
              <Swiper
                rewind={true}
                pagination={{
                  clickable: true,
                  el: ".why-us-swiper-pagination",
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
                <SwiperSlide>
                  {/* <!-- -------------------------------- card --------------------------------- --> */}
                  <div className="h-100 bg-white rounded d-flex flex-column justify-content-center align-items-center text-center p-5 gap-5">
                    {/* <!-- ------------------------------ card top ------------------------------- --> */}
                    <div className="rounded-circle lighter-primary-bg p-5">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="fs-1 fw-bold primary-color"
                      />
                    </div>
                    {/* <!-- ------------------------------ card body ------------------------------- --> */}
                    <div>
                      <h4 className="fw-semibold gray-text-color">
                        Trusted By Thousands
                      </h4>
                      <p className="fw-semibold gray-text-color">
                        Aliquam dictum elit vitae mauris facilisis at dictum
                        urna dignissim donec vel lectus velis.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* <!-- -------------------------------- card --------------------------------- --> */}
                  <div className="h-100 bg-white rounded d-flex flex-column justify-content-center align-items-center text-center p-5 gap-5">
                    {/* <!-- ------------------------------ card top ------------------------------- --> */}
                    <div className="rounded-circle lighter-primary-bg p-5">
                      <FontAwesomeIcon
                        icon={faHome}
                        className="fs-1 fw-bold primary-color"
                      />
                    </div>
                    {/* <!-- ------------------------------ card body ------------------------------- --> */}
                    <div>
                      <h4 className="fw-semibold gray-text-color">
                        Wide Renge Of Properties
                      </h4>
                      <p className="fw-semibold gray-text-color">
                        Aliquam dictum elit vitae mauris facilisis at dictum
                        urna dignissim donec vel lectus velis.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* <!-- -------------------------------- card --------------------------------- --> */}
                  <div className="h-100 bg-white rounded d-flex flex-column justify-content-center align-items-center text-center p-5 gap-5">
                    {/* <!-- ------------------------------ card top ------------------------------- --> */}
                    <div className="rounded-circle lighter-primary-bg p-5">
                      <FontAwesomeIcon
                        icon={faHandHoldingDollar}
                        className="fs-1 fw-bold primary-color"
                      />
                    </div>
                    {/* <!-- ------------------------------ card body ------------------------------- --> */}
                    <div>
                      <h4 className="fw-semibold gray-text-color">
                        Financing Made Easy
                      </h4>
                      <p className="fw-semibold gray-text-color">
                        Aliquam dictum elit vitae mauris facilisis at dictum
                        urna dignissim donec vel lectus velis.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="row justify-content-center">
                <div className="why-us-swiper-pagination d-lg-none justify-content-center d-flex flex-row p-3 fs-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ----------------------- Articles & Tips Section ----------------------- --> */}
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
    </>
  );
}
