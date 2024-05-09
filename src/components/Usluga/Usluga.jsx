"use client";
import React, { useContext, useEffect, useState } from "react";
import "./usluga.css";
import http from "../../service/axios";
import { Context } from "../../context/Context";
const Usluga = () => {
  const { openModal } = useContext(Context);
  const [data, setData] = useState([]);
  const getData = () => {
    http
      .get("/serviceservices/")
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
    <section id="usluga" className="usluga">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="usluga__title"
        >
          Наши услуги
        </h2>
        <ul className="usluga__list">
          {data?.map((item, index) => (
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              key={index}
              style={{
                background: `linear-gradient( 45deg,      rgba(20, 20, 20, 0.8) 0%,      rgba(20, 20, 20, 0) 100%    ),    url(${item?.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={
                index - 0 === 4
                  ? "usluga__listitem usuluga__mainlist"
                  : "usluga__listitem "
              }
            >
              <h2 className="usluga__listitem__text">{item?.title}</h2>
              <div className="usluga__inner__wrapper">
                <div className="usluga__listitem__box">
                  <span>от</span>
                  <p className="usluga__listitem__price">{item?.price}</p>
                  <span>руб</span>
                </div>
                <button onClick={() => openModal()} className="usluga__btn">
                  Подробнее
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Usluga;
