"use client";
import React, { useEffect, useRef, useState } from "react";
import "./partner.css";
import Caruselbtn from "../Couruselbuttuns/Caruselbtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import http from "../../service/axios";
const Partner = () => {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const getData = () => {
    http
      .get("/partnerpartner/list/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="partner">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="partner__title"
        >
          <span className="partner__title__bold">Сотрудничаем </span> только{" "}
          <br /> с надежными производителями!
        </h2>
        <div className="partner__wrapper">
          <div className="parter__prevbutton">
            <Caruselbtn
              handleClick={prevHandler}
              styleadd={"caruselback"}
              type={"prev"}
            />
          </div>
          <div className="partner__nextbutton">
            <Caruselbtn handleClick={nextHandler} styleadd={"caruselback"} />
          </div>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="partner__swiper"
            spaceBetween={24}
            loop
            breakpoints={{
              300: { slidesPerView: 2 },
              630: { slidesPerView: 3 },
              1260: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data?.map((item, index) => (
              <SwiperSlide
                key={index}
                style={{
                  background: `url(${item?.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "80%",
                }}
                className="partner__item"
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-custom-pagination" />
      </div>
    </section>
  );
};

export default Partner;
