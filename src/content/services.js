import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import slideIcon from "./images/seemore.png";
import { locationData } from "../data/locations";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

import Frame from "../components/Frame/Frame";
const services = () => {
  const allFrame = locationData.map(
    (frame, key) => {
      return (
        <SwiperSlide key={key}>
          <Frame data={frame} />
        </SwiperSlide>
      );
    }
    /* <Frame data={frame} /> */
  );
  return (
    <div className="workpage">
      <div id="documented-areas" className="services-section">
        <div className="slide">
          <Link to="/map">
            <img src={slideIcon} alt="Slide Icon" />
          </Link>
        </div>
        <p className="OServices">
          Documented &nbsp;<span>Areas</span>
        </p>

        {/* Create a container for the frame */}
        <div className="frame-container">
          <Swiper
            modules={[Scrollbar, Navigation, Pagination, A11y]}
            spaceBetween={1}
            slidesPerView={4}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {allFrame}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default services;
