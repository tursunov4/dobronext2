"use client";
import React, { useEffect, useRef, useState } from "react";
import Caruselbtn from "../Couruselbuttuns/Caruselbtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Citycard from "./Citycard";
import "./city.css";
import http from "../../service/axios";
const City = () => {
  const swiperRef = useRef(null);
  const [data, setData] = useState([]);
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-citypagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const getData = () => {
    http
      .get("/projectsprojects/")
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
    <section id="product" className="city">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="400"
          className="city__title"
        >
          {" "}
          <span className="city__titlebold">Проекты,</span> которыми мы
          гордимся!
        </h2>
        <div className="city__wrapper">
          <div className="city__prevbutton">
            <Caruselbtn
              handleClick={prevHandler}
              styleadd={"caruselback"}
              type={"prev"}
            />
          </div>
          <div className="city__nextbutton">
            <Caruselbtn handleClick={nextHandler} styleadd={"caruselback"} />
          </div>
          <Swiper
            slidesPerView={"auto"}
            pagination={pagination}
            modules={[Pagination]}
            className="city__swiper"
            spaceBetween={24}
            loop
            breakpoints={{
              500: { slidesPerView: 2 },
              1070: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index} className="city__swiper-slide">
                  <Citycard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-custom-citypagination" />
      </div>
    </section>
  );
};

export default City;
