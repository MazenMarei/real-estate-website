import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import brand6 from "../../assets/images/brand06.png";
import brand5 from "../../assets/images/brand05.png";
import brand4 from "../../assets/images/brand04.png";
import brand3 from "../../assets/images/brand03.png";
import brand1 from "../../assets/images/brand01.png";

export default function OurPartners() {
  return (
    <section id="homeOurPartners">
      <div className="container pt-5">
        {/* <!-- ----------------------------- header row ------------------------------ --> */}
        <div className="row mb-5">
          <h1 className="text-center fw-bold gray-text-color pt-5">
            Our Partners
          </h1>
          <p className="text-center gray-text-color fs-5 fw-semibold">
            We only work with the best companies around the globe
          </p>
        </div>

        {/* <!-- ----------------------------- partners row swiper ----------------------------- --> */}
        <div className="row justify-content-center gap-5 mb-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              992: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {/* partner swiper slides */}
            <SwiperSlide>
              <div className="card p-4 border-0 h-100">
                <div className="p-5 h-100 d-flex flex-row justify-content-end align-items-end">
                  <img
                    src={brand1}
                    className="align-bottom"
                    alt="partner brand"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* partner swiper slides */}

            <SwiperSlide>
              <div className="card p-4 border-0 h-100">
                <div className="p-5 h-100 d-flex flex-row justify-content-end align-items-end">
                  <img
                    src={brand3}
                    className="align-bottom"
                    alt="partner brand"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* partner swiper slides */}

            <SwiperSlide>
              <div className="card p-4 border-0 h-100">
                <div className="p-5 h-100 d-flex flex-row justify-content-end align-items-end">
                  <img
                    src={brand4}
                    className="align-bottom"
                    alt="partner brand"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* partner swiper slides */}
            <SwiperSlide>
              <div className="card p-4 border-0 h-100">
                <div className="p-5 h-100 d-flex flex-row justify-content-end align-items-end">
                  <img
                    src={brand5}
                    className="align-bottom"
                    alt="partner brand"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* partner swiper slides */}
            <SwiperSlide>
              <div className="card p-4 border-0 h-100">
                <div className="p-5 h-100 d-flex flex-row justify-content-end align-items-end">
                  <img
                    src={brand6}
                    className="align-bottom"
                    alt="partner brand"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
