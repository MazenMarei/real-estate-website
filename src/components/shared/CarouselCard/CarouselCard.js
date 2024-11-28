import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import style from "./carousel-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faLocationDot,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function CarouselCard({
  type,
  title,
  saleType,
  location,
  locationLink,
  price,
  bedrooms,
  bathrooms,
  aria,
  gallery,
  propertyImage,
  date,
  _id,
  owner,
}) {
  const [swiperMain, setSwiperMain] = useState(null);
  const [savedToFavorite, setSavedToFavorite] = useState(false);
  const [saveTocompare, setSaveTocompare] = useState(false);
  const images = [...gallery, propertyImage];

  return (
    <Card className={`gray-border border-0 ${style.card}`}>
      <div className="mx-2 mt-2">
        {/* ------------------------ swiper component and prop ----------------------- */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => setSwiperMain(swiper)}
        >
          {/* ---------------------------- overlay colo div ---------------------------- */}
          <div
            className={`${style.overlay} w-100 h-100 z-1 top-0 position-absolute rounded-3 overlay-lighter-dark-bg`}
          >
            {/* ----------------------------- control buttons ---------------------------- */}
            <div className="position-absolute w-100 d-flex flex-row justify-content-between  z-3 start-0 top-50 translate-middle-y">
              <Button
                className={`mx-2 border-0 ${style.controlBtn} overlay-dark-bg-hover`}
                onClick={() => {
                  swiperMain.slidePrev();
                }}
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="fs-2 fw-light mt-1"
                />
              </Button>
              <Button
                className={`mx-2 border-0 ${style.controlBtn} overlay-dark-bg-hover`}
                onClick={() => swiperMain.slideNext()}
              >
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="fs-2 fw-light mt-1"
                />
              </Button>
            </div>

            {/* ----------------------------- featured and sale type absolute taps ---------------------------- */}
            <div className="row position-absolute z-3 text-white start-0 top-0 ms-3 mt-3 gap-2">
              <div className="col text-capitalize rounded rounded-1 py-1 light-secondary-bg px-3">
                <p className="mb-0">featured</p>
              </div>
              <div className="col text-capitalize rounded rounded-1 py-1 primary-bg px-3">
                <p className="m-0">{saleType}</p>
              </div>
            </div>

            <div className="container position-absolute bottom-0 z-1 w-100">
              {/* price , love and compare buttons */}
              <div className="row justify-content-start pb-2 gap-4 align-items-center">
                {/* price */}
                <h3 className="col-6 col-sm-6 my-auto col-lg-7 text-white fw-bold align-bottom align-items-center">
                  ${price}
                  <span className="fs-5">/mo</span>
                </h3>
                {/* love and compare buttons */}
                <div className="col-4 d-flex flex-row justify-content-end gap-2">
                  <Button
                    className={`fs-5 bg-opacity-50  text-white  rounded primary-bg-hover border-0 ${
                      saveTocompare ? "primary-bg" : "black-50-bg"
                    }`}
                    onClick={() => {
                      setSaveTocompare(!saveTocompare);
                      if (!saveTocompare) {
                        toast.success("Added to compare", {
                          closeOnClick: true,
                          pauseOnHover: true,
                        });
                      } else {
                        toast.error("Removed from compare", {
                          closeOnClick: true,
                          pauseOnHover: true,
                        });
                      }
                    }}
                  >
                    <FontAwesomeIcon
                      className="my-auto py-auto"
                      icon={faRightLeft}
                    />
                  </Button>
                  <Button
                    className={`fs-5 bg-opacity-50  text-white  rounded primary-bg-hover border-0 ${
                      savedToFavorite ? "primary-bg" : "black-50-bg"
                    }`}
                    onClick={() => {
                      setSavedToFavorite(!savedToFavorite);
                      if (!savedToFavorite) {
                        toast.success("Added to favorites", {
                          closeOnClick: true,
                          pauseOnHover: true,
                        });
                      } else {
                        toast.error("Removed from favorites", {
                          closeOnClick: true,
                          pauseOnHover: true,
                        });
                      }
                    }}
                  >
                    <FontAwesomeIcon
                      className="my-auto py-auto"
                      icon={faHeart}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------- images slider container ------------------------ */}
          <div>
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                <Card.Img
                  alt={"Card image"}
                  src={item}
                  variant="top"
                  className="rounded-3"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <Card.Body>
        <Card.Title className="text-capitalize fw-bold">
          <Link to="#" className="text-decoration-none">
            <p className="primary-color fw-semibold fs-5">{type}</p>
          </Link>

          <Link to="#" className="text-decoration-none">
            <h4 className="gray-text-color fw-bold primary-color-hover">
              {title}
            </h4>
          </Link>

          <div className="d-flex flex-row gap-1 align-items-center text-center primary-color-hover">
            <FontAwesomeIcon icon={faLocationDot} />
            <Link
              to={locationLink}
              className="gray-text-color my-auto fs-6 fw-medium text-decoration-none primary-color-hover"
            >
              {location}
            </Link>
          </div>

          {/* /* ---------------------------- property details ---------------------------- */}
          <div className="flex-row d-flex gap-5 mt-3 ps-1">
            <p className="fs-6 fw-medium">Beds: {bedrooms}</p>
            <p className="fs-6 fw-medium">Bath: {bathrooms}</p>
            <p className="fs-6 fw-medium">SqFt: {aria}</p>
          </div>
        </Card.Title>
      </Card.Body>

      <Card.Footer className="bg-transparent">
        <div className="row p-3 px-1">
          <div className="d-flex flex-row col-8 gap-2">
            <div className="col-3 rounded-circle p-1">
              <img
                src={`./uploads/${owner.profileImage}`}
                alt="profile"
                className="rounded-circle w-100"
              />
            </div>
            <div className="col-8 h-100 d-flex align-items-end pt-3">
              <p className="text-capitalize gray-text-color">{owner.name}</p>
            </div>
          </div>

          <div className="d-flex col-4 align-items-end justify-content-end">
            <p className="p-0">{timeSince(new Date(date).getTime())}</p>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
