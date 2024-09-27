import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import style from "./carousel-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
export default function CarouselCard({ title, description, image }) {
  const [swiperMain, setSwiperMain] = useState(null);

  return (
    <Card className={`pt-2 p-0 gray-border border-0 ${style.card}`}>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiperMain(swiper)}
        >
          <div
            className={`${style.overlay} w-100 h-100 z-1 top-0 position-absolute`}
          >
            {/* <!-- ----------------------------- prev button ----------------------------- --> */}
            <button>
            <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            {/* <!-- ----------------------------- next button ----------------------------- --> */}
            <button>
              <span>Next</span>
            </button>
          </div>
          <SwiperSlide>
            <div style={{width:"100px" , height:"150px"}}>

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Card>
  );
}
