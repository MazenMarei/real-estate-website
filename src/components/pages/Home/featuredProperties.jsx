import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import image from "../../../assets/images/8-850x550.jpg";
import CarouselCard from "../../shared/CarouselCard/CarouselCard";

export default function FeaturedProperties() {
  return (
    <section className=" light-gray-bg" id="featuredProperties">
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
  );
}
