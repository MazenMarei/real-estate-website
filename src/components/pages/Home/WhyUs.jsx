import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHandHoldingDollar,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export default function WhyUs() {
  return (
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
                <div className="primary-bg-hover h-100 bg-white rounded d-flex flex-column justify-content-center align-items-center text-center p-5 gap-5">
                  {/* <!-- ------------------------------ card top ------------------------------- --> */}
                  <div className="rounded-circle lighter-primary-bg p-5">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="fs-1 fw-bold primary-color"
                    />
                  </div>
                  {/* <!-- ------------------------------ card body ------------------------------- --> */}
                  <div>
                    <h4 className="fw-semibold gray-text-color white-hover">
                      Trusted By Thousands
                    </h4>
                    <p className="fw-semibold gray-text-color white-hover-slow">
                      Aliquam dictum elit vitae mauris facilisis at dictum urna
                      dignissim donec vel lectus velis.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* <!-- -------------------------------- card --------------------------------- --> */}
                <div className="primary-bg-hover h-100 bg-white rounded d-flex flex-column justify-content-center align-items-center text-center p-5 gap-5">
                  {/* <!-- ------------------------------ card top ------------------------------- --> */}
                  <div className="rounded-circle lighter-primary-bg p-5">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="fs-1 fw-bold primary-color"
                    />
                  </div>
                  {/* <!-- ------------------------------ card body ------------------------------- --> */}
                  <div>
                    <h4 className="fw-semibold gray-text-color white-hover">
                      Wide Renge Of Properties
                    </h4>
                    <p className="fw-semibold gray-text-color white-hover-slow">
                      Aliquam dictum elit vitae mauris facilisis at dictum urna
                      dignissim donec vel lectus velis.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* <!-- -------------------------------- card --------------------------------- --> */}
                <div className="primary-bg-hover h-100 bg-white rounded d-flex flex-column justify-content-center align-items-center text-center p-5 gap-5">
                  {/* <!-- ------------------------------ card top ------------------------------- --> */}
                  <div className="rounded-circle lighter-primary-bg p-5">
                    <FontAwesomeIcon
                      icon={faHandHoldingDollar}
                      className="fs-1 fw-bold primary-color"
                    />
                  </div>
                  {/* <!-- ------------------------------ card body ------------------------------- --> */}
                  <div>
                    <h4 className="fw-semibold gray-text-color white-hover">
                      Financing Made Easy
                    </h4>
                    <p className="fw-semibold gray-text-color white-hover-slow">
                      Aliquam dictum elit vitae mauris facilisis at dictum urna
                      dignissim donec vel lectus velis.
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
  );
}
