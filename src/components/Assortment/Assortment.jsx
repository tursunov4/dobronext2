"use client";
import React, { useEffect, useRef, useState } from "react";
import "./assortment.css";
import arrowimg from "../../assets/Images/svg/raskitarrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import http from "../../service/axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Assortment = () => {
  const swiperRef = useRef(null);
  const [number, setNumber] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useRouter();
  const pagination = {
    el: ".swiper-custom-assortmentpagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const getData = () => {
    http
      .get("/productsproduct-list/")
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
    <section id="catalog" className="assortment">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="assortment__title"
        >
          <span className="assortment__title__bold">
            {" "}
            Добро Септик: самый большой ассортимент
          </span>{" "}
          очистных сооружений по умеренным ценам!
        </h2>
        <ul className="assortment__list">
          {data?.slice(0, number ? data.length : 4)?.map((item, index) => (
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              key={index}
              className="assortment__listitem"
            >
              <div
                onClick={() => navigate.push(`/product/${item?.slug}`)}
                style={{
                  background: `url(${item?.images[0]?.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="assortment___listbacimg"
              ></div>
              <div className="assortment__listbox">
                <h3 className="assortment__listname">{item?.title}</h3>
                <h5 className="assortment__price">
                  <span className="assortment__price__about">от</span>
                  {item?.price}
                  <span className="assortment__price__about">руб</span>
                </h5>
                <button
                  onClick={() => navigate.push(`/product/${item?.slug}`)}
                  className="assortment__btn"
                >
                  Подробнее
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setNumber(!number)}
          className="assortment__bottom__btn"
        >
          <Image
            className={number && "assortment__img__rotate"}
            src={arrowimg}
            alt="arrowimg"
          />
          {number ? "Свернуть список" : "Развернуть список"}
        </button>
        <div className="assortment__mobilewrapper">
          <Swiper
            slidesPerView={"auto"}
            pagination={pagination}
            modules={[Pagination]}
            className="assortment__swiper"
            spaceBetween={24}
            loop
            breakpoints={{
              300: { slidesPerView: 2 },
              630: { slidesPerView: 2 },
              1260: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index} className="assortment__item">
                <div className="assortment__listitem">
                  <div
                    onClick={() => navigate.push(`/product/${item?.slug}`)}
                    style={{
                      background: `url(${item?.images[0]?.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      cursor: "pointer",
                    }}
                    className="assortment___listbacimg"
                  ></div>
                  <div className="assortment__listbox">
                    <h4 className="assortment__listname">{item?.title}</h4>
                    <h5 className="assortment__price">
                      <span className="assortment__price__about">от</span>
                      {item?.price}
                      <span className="assortment__price__about">руб</span>
                    </h5>
                    <button
                      onClick={() => navigate.push(`/product/${item?.slug}`)}
                      className="assortment__btn"
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-custom-assortmentpagination" />
        </div>
      </div>
    </section>
  );
};

export default Assortment;
