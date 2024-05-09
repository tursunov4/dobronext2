"use client";
import React, { useEffect, useRef, useState } from "react";
import Caruselbtn from "../Couruselbuttuns/Caruselbtn";
import Comandcard from "./Comandcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./comand.css";
import http from "../../service/axios";
const Comand = () => {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-comandpagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const getData = () => {
    http
      .get("/teamteams/")
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
    <section className="comand">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="comand__title"
        >
          <span className="comand__titlebol">Команда, </span>
          которой стоит доверить свое будущее жилище!
        </h2>
        <div className="conmand__wrapper">
          <div className="comand__prevbutton">
            <Caruselbtn
              handleClick={prevHandler}
              styleadd={"caruselback"}
              type={"prev"}
            />
          </div>
          <div className="comand__nextbutton">
            <Caruselbtn handleClick={nextHandler} styleadd={"caruselback"} />
          </div>
          <Swiper
            slidesPerView={"auto"}
            pagination={pagination}
            modules={[Pagination]}
            className="comand__swiper"
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 2 },
              670: { slidesPerView: 3 },
              1260: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="comand__swiper-slide">
                <Comandcard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-custom-comandpagination" />
      </div>
    </section>
  );
};

export default Comand;
