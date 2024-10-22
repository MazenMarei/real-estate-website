import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import image from "../../../assets/images/8-850x550.jpg";
import CarouselCard from "../../shared/CarouselCard/CarouselCard";
import profileImage from "../../../assets/images/6-150x150.jpg";

const properties = [
  {
    id: 1,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 2,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 3,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 4,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 5,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 6,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 7,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 8,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 9,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 10,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
  {
    id: 11,
    image: image,
    type: "Family House",
    title: "Eaton Garth Penthouse",
    sellType: "for rent",
    location: "1421 San Pedro St, Los Angeles, CA 900015",
    locationLink: "https://maps.app.goo.gl/Meojq2NbvPpwNX6F7",
    price: 1300,
    beds: 1,
    bath: 1,
    sqft: 8280,
    author: "kate john",
    authorImage: profileImage,
    postedTime: "1 day ago",
  },
];

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
            {properties.map((property, index) => (
              <SwiperSlide key={property.id}>
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
