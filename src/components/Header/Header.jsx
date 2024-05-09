"use client";
import React, { useContext, useState } from "react";
import "./header.css";
import sitelogo from "../../assets/Images/svg/sitelogo.svg";
import demand from "../../assets/Images/svg/demand.svg";
import starImage from "../../assets/Images/svg/star.svg";
import telegram from "../../assets/Images/svg/telegram.svg";
import whatsapp from "../../assets/Images/svg/whatsapp.svg";
import phone from "../../assets/Images/svg/phone.svg";
import hamburImage from "../../assets/Images/svg/hambur.svg";
import closeImage from "../../assets/Images/svg/close.svg";
import { Context } from "../../context/Context";
import http from "../../service/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  const [yandexreate, setYandexreate] = useState({});
  const { openModal, contactdata } = useContext(Context);
  const [hambur, setHambur] = useState(false);
  const navigate = useRouter();
  const getYandex = () => {
    http
      .get("/aboutyandex-rating/")
      .then((res) => {
        setYandexreate(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getYandex();
  }, []);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="header__mian__bac">
        <section className={scrolling ? "header header__fixed " : "header"}>
          <div className="container">
            <div className="header__mainwrapper">
              <div className="header__main__logowrap">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate.push("/")}
                >
                  <Image
                    height={45}
                    className="header__logo"
                    src={sitelogo}
                    alt="logo"
                  />
                </div>
                {yandexreate?.hidden && (
                  <div className="header__main__yandex">
                    <div className="header__main__demand-img">
                      <div className="header__main__demand__mainimg">
                        <Image src={demand} alt="" />
                        <div className="header__main__demand__number">
                          <span>{yandexreate?.rating}</span>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="header__main__yandex__inner">
                      <ul className="header__main__yandex__stars">
                        <li>
                          <Image src={starImage} alt="star" />
                        </li>
                        <li>
                          <Image src={starImage} alt="star" />
                        </li>
                        <li>
                          <Image src={starImage} alt="star" />
                        </li>
                        <li>
                          <Image src={starImage} alt="star" />
                        </li>
                        <li>
                          <Image src={starImage} alt="star" />
                        </li>
                      </ul>
                      <h5 className="header__main__yandex__text">
                        Рейтинг в{" "}
                        <span className="header__main__yandex__textbold">
                          Яндекс
                        </span>
                      </h5>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__main__social__wrapper">
                <ul className="header__mian__social__messangers">
                  <li>
                    <a
                      target="_blank"
                      className="header__main__social__img"
                      href={contactdata?.telegram}
                    >
                      <Image src={telegram} alt="telegramimg" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="header__main__social__img"
                      href={contactdata?.whatsapp}
                    >
                      <Image src={whatsapp} alt="whatsappimg" />
                    </a>
                  </li>
                </ul>
                <div className="header__main__social__phone">
                  <div className="header__main__social__phone__box">
                    <a
                      className="header__main__social__phone__text"
                      href={`tel: ${contactdata?.phone}`}
                    >
                      {contactdata?.phone}
                    </a>
                    <p
                      onClick={() => openModal()}
                      className="header__main__social__phone__zakaztext"
                    >
                      Заказать обратный звонок
                    </p>
                  </div>
                  {!hambur && (
                    <a
                      className="header__main__mobile__phone"
                      href={`tel:${contactdata?.phone}`}
                    >
                      <Image
                        className="header__main__mobile__phone__img"
                        src={phone}
                        alt="phone"
                      />
                    </a>
                  )}
                </div>
                <button
                  onClick={() => openModal()}
                  className="header__main__btn"
                >
                  Рассчитать стоимость
                </button>
                <button
                  aria-label="hambur"
                  onClick={() => setHambur(!hambur)}
                  className="header__main__hambur"
                >
                  <Image
                    className="header__main__hambur__img"
                    src={hambur ? closeImage : hamburImage}
                    alt="hambur"
                  />
                </button>
              </div>
            </div>
            <nav className="header__nav">
              <ul className="header__nav__list">
                <li>
                  <Link
                    href={"/#usluga"}
                    className="header__nav__list__item"
                    style={{ cursor: "pointer" }}
                  >
                    Услуги
                  </Link>
                </li>
                <li>
                  <a
                    onClick={() => navigate.push("/#catalog")}
                    className="header__nav__list__item"
                    style={{ cursor: "pointer" }}
                  >
                    Каталог
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate.push("/#about")}
                    className="header__nav__list__item"
                    style={{ cursor: "pointer" }}
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate.push("/#product")}
                    className="header__nav__list__item"
                    style={{ cursor: "pointer" }}
                  >
                    Проекты
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate.push("/#contact")}
                    className="header__nav__list__item"
                    style={{ cursor: "pointer" }}
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className={
                hambur
                  ? "header__mobile__box header__mobile__box__active"
                  : "header__mobile__box"
              }
            >
              <div className="header__mobile__innerbox">
                <ul className="header__mobile__list">
                  <li>
                    <a
                      onClick={() => {
                        setHambur(!hambur);
                        navigate.push("/#usluga");
                      }}
                      className="header__mobile__list__item"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setHambur(!hambur);
                        navigate.push("/#catalog");
                      }}
                      className="header__mobile__list__item"
                    >
                      Каталог
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setHambur(!hambur);
                        navigate.push("/#about");
                      }}
                      className="header__mobile__list__item"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setHambur(!hambur);
                        navigate.push("/#product");
                      }}
                      className="header__mobile__list__item"
                    >
                      Проекты
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setHambur(!hambur);
                        navigate.push("/#contact");
                      }}
                      className="header__mobile__list__item"
                      href="#contact"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
                <button
                  onClick={() => openModal()}
                  className="header__mobile__btn"
                >
                  Рассчитать стоимость
                </button>
                <div className="header__mobile__phone">
                  <div className="header__mobile__phone__box">
                    <a
                      className="header__mobile__phone__text"
                      href={`tel:${contactdata?.phone}`}
                    >
                      {contactdata?.phone ? contactdata.phone : ""}
                    </a>
                    <a
                      onClick={() => openModal()}
                      className="header__mobile__phone__zakaztext"
                    >
                      Заказать обратный звонок
                    </a>
                  </div>
                </div>
                <ul className="header__mobile__social">
                  <li>
                    <a href={contactdata?.telegram}>
                      <Image src={telegram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={contactdata?.whatsapp}>
                      <Image src={whatsapp} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
