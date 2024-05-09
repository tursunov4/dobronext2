"use client";
import React, { useContext, useEffect, useState } from "react";
import "./apptime.css";
import apptimetree from "../../assets/Images/webg/apptimetree.webp";
import apptimelefttree from "../../assets/Images/webg/apptimeleftree.webp";
import apptimecapplan from "../../assets/Images/webg/biocapplan.webp";
import mobileimgbiocam from "../../assets/Images/webg/mobilebiocap.webp";
import mobilecamtree from "../../assets/Images/webg/bicocammobiletree.webp";
import { Context } from "../../context/Context";
import Image from "next/image";
const Apptime = () => {
  const [time, setTime] = useState(() => {
    if (typeof window !== "undefined") {
      const localTime = localStorage.getItem("time");
      return localTime ? parseInt(localTime, 10) : 10 * 60;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          return 10 * 60; // 10 minutni sekundlarda ifodalash
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("time", time);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const { openModal } = useContext(Context);
  return (
    <section className="apptime">
      <div className="container">
        <div className="apptime__wrapper">
          <div className="apptime__righback">
            <Image src={apptimetree} alt="apptimeimg" />
          </div>
          <div className="apptime__leftback">
            <Image src={apptimelefttree} alt="apptimelefttree" />
          </div>
          <div className="apptime__plancapimg">
            <Image src={apptimecapplan} alt="apptimecapplan" />
          </div>
          <div className="apptime__mobiletree">
            <Image src={mobilecamtree} alt="mobilecamtree" />
          </div>
          <div className="apptime__mobileimgbio">
            <Image src={mobileimgbiocam} alt="mobileimgbiocam" />
          </div>
          <div className="apptime__box">
            <div className="apptime__text__wrapper">
              <h2 className="apptime__title">
                <span className="apptime__titlebold">Предложение, </span> от
                которого вы не сможете отказаться!
              </h2>
              <p className="apptime__doc">
                Скидка на стандартный монтаж каждому клиенту{" "}
                <br className="apptime__descbr" /> в размере – 50 % при заказе
                оборудования в этом месяце!
              </p>
              <div className="apptime__time__box">
                <span className="apptime__timebox__time">
                  {minutes.toString().padStart(2, "0")}
                </span>{" "}
                :
                <span className="apptime__timebox__time">
                  {seconds.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="apptime__time__btns">
                <button
                  onClick={() => openModal()}
                  className="apptime__callbtn"
                >
                  Оставить заявку
                </button>
                <a
                  href="#catalog"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="appitime__catalog__btn"
                >
                  Каталог продукции
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apptime;
