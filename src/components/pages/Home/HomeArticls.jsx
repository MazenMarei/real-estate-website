import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import houseIsolatedImg from "../../../assets/images/house-isolated-field-1.webp";
import characteristicsImg from "../../../assets/images/9-characteristics-4.jpg";
import blogImg from "../../../assets/images/blog2-op5h9ukqohpvlj56kvz57kxf15eqhdeymxa36hjeck.jpg";
import kate from "../../../assets/images/6.jpg";
import ArticleCard from "../../shared/ArticleCard/ArticleCard";

/// Articles array data
const articles = [
  {
    id: 1,
    category: "Business",
    image: houseIsolatedImg,
    title: "Skills That You Can Learn In The Real Estate Market",
    date: "7 August 2022",
    author: "ali tufan",
    authorImage: kate,
  },
  {
    id: 2,
    category: "Construction",
    title: "Bedroom Colors You will Never this Regret",
    image: characteristicsImg,
    date: "7 August 2022",
    author: "ali tufan",
    authorImage: kate,
  },
  {
    id: 3,
    category: "Business",
    title: "5 Essential Steps for Buying everyone Investment",
    image: blogImg,
    date: "7 August 2022",
    author: "ali tufan",
    authorImage: kate,
  },
];

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
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleCard {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row justify-content-center">
            <div className="articles-swiper-pagination d-lg-none justify-content-center d-flex flex-row p-3 fs-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
