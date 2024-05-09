import React, { useRef } from "react";
import "./city.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import previmg from "../../assets/Images/svg/prev.svg";
import nextimg from "../../assets/Images/svg/next.svg";
import Fancybox from "../Fancybox/Fancybox";
import Image from "next/image";
const Citycard = ({ item }) => {
  const swiperRef = useRef(null);
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-citycardpagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  return (
    <div className="citycard">
      <Fancybox>
        <div className="citycard__carusel__wrapper">
          <div className="citycard__prevbutton">
            <Image
              src={previmg}
              onClick={prevHandler}
              styleadd={"caruselback"}
              type={"prev"}
              alt="prev"
            />
          </div>
          <div className="citycard__nextbutton">
            <Image
              alt="next"
              src={nextimg}
              onClick={nextHandler}
              styleadd={"caruselback"}
            />
          </div>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="citycard__carusel"
            spaceBetween={24}
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {item?.images?.map((item, index) => (
              <SwiperSlide key={index} className="partner__swiper-slide">
                <a data-fancybox="gallery" href={item?.image}>
                  <Image
                    loader={() => item?.image}
                    className="citycard__caruselimg"
                    src={item?.image}
                    alt="citycardimg"
                    width={"300"}
                    height={"300"}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fancybox>

      <div className="swiper-custom-citycardpagination" />
      <h3 className="citycard__name">{item?.city}</h3>
      <h5 className="citycard__about">{item?.title}</h5>
      <h6 className="citycard__price">
        {item?.price} <span className="citycard__currency">руб</span>
      </h6>
    </div>
  );
};

export default Citycard;
