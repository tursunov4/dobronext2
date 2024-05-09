import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Caruselbtn from "../Couruselbuttuns/Caruselbtn";
import Useraboutcard from "../Useraboutcard/Useraboutcard";
import "swiper/css";
import "swiper/css/pagination";
import "./usercarusel.css";

const Usercarusel = ({ data }) => {
  const swiperRef = useRef(null);
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-userpagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  return (
    <div   className="usercarusel">
      <div className="usercarusel__wrapper">
        <div className="user__prevbutton">
          <Caruselbtn
            handleClick={prevHandler}
            styleadd={"caruselback"}
            type={"prev"}
          />
        </div>
        <div className="user__nextbutton">
          <Caruselbtn handleClick={nextHandler} styleadd={"caruselback"} />
        </div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="user__swiper"
          spaceBetween={24}
          loop
          breakpoints={{
            630: { slidesPerView: 2 },
            1170: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Useraboutcard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="swiper-custom-userpagination" />
    </div>
  );
};

export default Usercarusel;
