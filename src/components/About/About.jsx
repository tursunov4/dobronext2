"use client";
import React from "react";
import "./about.css";
import aboutpersonimg from "../../assets/Images/webg/aboutpersonimg.webp";
import Image from "next/image";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="about__title"
        >
          <span className="about__title-bold">Сотрудничество</span> с Добро
          Септик – это просто и удобно!
        </h2>
        <div className="about__wrapper">
          <ul
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="about__list"
          >
            <li className="about__list__item">
              <div>
                {" "}
                <span className="about__list__item__number"> 01</span>
              </div>
              <div className="about__list__item-box">
                <h4 className="about__list__item__title">
                  Оставьте заявку на сайте
                </h4>
                <p className="about__list__item__doc">
                  Наш менеджер перезвонит вам в ближайшее время.
                </p>
              </div>
            </li>
            <li className="about__list__item">
              <div>
                {" "}
                <span className="about__list__item__number"> 02</span>
              </div>
              <div className="about__list__item-box">
                <h4 className="about__list__item__title">
                  Примите звонок и обсудите нюансы заказа
                </h4>
                <p className="about__list__item__doc">
                  Сотрудник уточнит основную информацию и согласует дату приезда
                  инженера.
                </p>
              </div>
            </li>
            <li className="about__list__item">
              <div>
                {" "}
                <span className="about__list__item__number"> 03</span>
              </div>
              <div className="about__list__item-box">
                <h4 className="about__list__item__title">
                  Дождитесь приезда специалиста
                </h4>
                <p className="about__list__item__doc">
                  Он выполнит замеры и подберет максимально подходящее решение
                  для вашего участка
                </p>
              </div>
            </li>
            <li className="about__list__item">
              <div>
                {" "}
                <span className="about__list__item__number"> 04</span>
              </div>
              <div className="about__list__item-box">
                <h4 className="about__list__item__title">
                  Ознакомьтесь с проектом
                </h4>
                <p className="about__list__item__doc">
                  Не бойтесь говорить, о том, что вас беспокоит. Мы учтем все
                  пожелания.
                </p>
              </div>
            </li>
            <li className="about__list__item">
              <div>
                {" "}
                <span className="about__list__item__number"> 05</span>
              </div>
              <div className="about__list__item-box">
                <h4 className="about__list__item__title">
                  Наблюдайте за монтажом и запуском
                </h4>
                <p className="about__list__item__doc">
                  Мы готовы выполнить установку уже через 24 часа после
                  оформления заявки!
                </p>
              </div>
            </li>
          </ul>
          <Image
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="about__list__img"
            src={aboutpersonimg}
            alt="aboutlistimg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
