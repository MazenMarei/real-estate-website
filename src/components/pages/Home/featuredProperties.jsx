import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CarouselCard from "../../shared/CarouselCard/CarouselCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFeaturedProperties } from "../../../Apis/properties";

export default function FeaturedProperties() {
  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch();

  // Get the properties from the server
  useEffect(() => {
    dispatch(getFeaturedProperties()).then((response) => {
      if (response.payload.status !== 200) return;      
      setProperties(
        response.payload.data.properties
          
      );
    });
  }, [dispatch]);

  return (
    <section className=" light-gray-bg" id="featuredProperties">
      <div className="container pt-5">
        {/* /* ------------------------------- header row ------------------------------- */}
        <div className="row text-center gray-text-color pt-5">
          <h1 className="fw-bold">Featured Properties</h1>
          <p>Handpicked properties by our team</p>
        </div>

        {/* /* ------------------------------- properties swiper row ------------------------------- */}
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
            {properties.length > 0 &&
              properties.map((property, index) => (
                <SwiperSlide key={index} className="h-100">
                  <div className="p-4 p-md-0">
                    <CarouselCard {...property} />
                  </div>
                </SwiperSlide>
              ))}
          </div>
          <div
            className={`row justify-content-center ${
              properties.length > 3 ? "" : "d-lg-none"
            }`}
          >
            <div className="home-swiper-pagination justify-content-center d-flex flex-row p-3 fs-2"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
