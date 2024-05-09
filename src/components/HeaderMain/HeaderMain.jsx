"use client";
import React from "react";
import "./headermain.css";

const HeaderMain = () => {
  return (
    <div className="header__main-seciton">
      <div className="container">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="header__mian-seciton__wrapper"
        >
          <h1 className="headermain__title">
            <span className="headermain__titlebold">
              Добро Септик: лучшие инженерные решения {}
            </span>
            для загородных домов и коттеджей!
          </h1>
          <a href="#catalog" className="headermain__btn">
            Каталог продукции
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
