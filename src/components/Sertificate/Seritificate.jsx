"use client";
import React, { useEffect, useRef, useState } from "react";
import "./sertificate.css";
import Caruselbtn from "../Couruselbuttuns/Caruselbtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import sertificateborder from "../../assets/Images/svg/sertificateborder.svg";
import "swiper/css";
// import "react-fancybox/lib/fancybox.css";
import "swiper/css/pagination";
import Fancybox from "../Fancybox/Fancybox";
import http from "../../service/axios";
import Image from "next/image";
const Seritificate = () => {
  const swiperRef = useRef(null);
  const [data, setData] = useState([]);
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };
  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-pagination__sertificate",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const getData = () => {
    http
      .get("/certificatecertificates/")
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="sertificate">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="sertificate__title"
        >
          <span className="sertificate__titlebold"> Добро Септик </span>–
          официальный дилер многих производителей!
        </h2>
        <Fancybox>
          <div className="sertificate__wrapper">
            <div className="sertificate__prevbutton">
              <Caruselbtn
                handleClick={prevHandler}
                styleadd={"caruselback"}
                type={"prev"}
              />
            </div>
            <div className="sertificate__nextbutton">
              <Caruselbtn handleClick={nextHandler} styleadd={"caruselback"} />
            </div>
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="sertificate__swiper"
              spaceBetween={24}
              loop
              breakpoints={{
                370: { slidesPerView: 2 },
                550: { slidesPerView: 2 },
                700: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index} className="sertificate__slide">
                  <a
                    data-fancybox="gallery"
                    href={item?.image}
                    className="sertificate__slide__img"
                  >
                    <Image
                      className="sertificate__sertificate__border"
                      src={sertificateborder}
                      alt="border"
                    />
                    <Image
                      loader={() => item?.image}
                      height={300}
                      width={300}
                      className="sertificate__sertificate__img"
                      src={item?.image}
                      alt="sertificate"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Fancybox>
        <div className="swiper-custom-pagination__sertificate" />
      </div>
    </section>
  );
};

export default Seritificate;
