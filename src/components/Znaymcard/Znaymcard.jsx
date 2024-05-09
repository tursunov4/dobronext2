"use client";
import React, { useContext } from "react";
import telegramimg from "../../assets/Images/svg/telegram.svg";
import whatsappimg from "../../assets/Images/svg/whatsapp.svg";
import "./znaymcard.css";
import zanaymbacktree from "../../assets/Images/webg/znaymbactree.webp";
import zanaymuskuna from "../../assets/Images/webg/znaymuskuna.webp";
import znaymplanuskuna from "../../assets/Images/webg/znaymplanuskuna.webp";
import znaymplantree from "../../assets/Images/webg/znaymplanbacktree.webp";
import znaymmobiletree from "../../assets/Images/webg/znaymobiletree.webp";
import { Context } from "../../context/Context";
import Image from "next/image";
const Znaymcard = () => {
  const { contactdata, openModal } = useContext(Context);
  return (
    <section className="znaym">
      <div className="container">
        <div className="znaym__wrapper">
          <div className="znaym__treeback">
            <Image src={zanaymbacktree} alt="znaymbacktree" />
          </div>
          <div className="znaym__uskuna">
            <Image
              className="znaym__uskuna__img"
              src={zanaymuskuna}
              alt="zanaymuskuna"
            />
          </div>
          <div className="znaym__planuskuna">
            <Image
              className="znaym__planuskuna__img"
              src={znaymplanuskuna}
              alt="znaymplanuskuna"
            />
          </div>
          <div className="znaym__plantree">
            <Image src={znaymplantree} alt="znaymplantree" />
          </div>
          <div className="znaym__mobiletree">
            <Image
              width={"auto"}
              src={znaymmobiletree}
              alt="znaym__mobiletree"
            />
          </div>
          <div className="znaym__box">
            <div className="znaym__box-item">
              <h2 className="znaym__box-title">
                <span className="znaym__box-title__bold">Мы знаем,</span> как
                сделать ваш дом автономным!
              </h2>
              <p className="znaym__box__doc">
                Оформите заявку на подбор автономной канализации и получите
                расчет стоимости в максимально короткие сроки!
              </p>
              <div className="znaym__box__bottom">
                <button onClick={() => openModal()} className="znaym__box__btn">
                  Хочу расчет
                </button>
                <div className="znaym__box__innerbottom">
                  <p className="znaym__box__bottom__text">
                    Или свяжитесь с нами в мессенджере
                  </p>
                  <ul className="znaym__box__bottom__list">
                    <li className="znaym__box__bottom__list-item">
                      <a target="_blank" href={contactdata?.telegram}>
                        <Image src={telegramimg} alt="telegramimg" />
                      </a>
                    </li>
                    <li className="znaym__box__bottom__list-item">
                      <a target="_blank" href={contactdata?.whatsapp}>
                        <Image src={whatsappimg} alt="whatsappimg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Znaymcard;
