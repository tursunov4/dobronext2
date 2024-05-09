"use client";
import React, { useEffect, useState } from "react";
import presentimg from "../../assets/Images/svg/priceimg.svg";
import lockimg from "../../assets/Images/svg/lockimg.svg";
import "./helpcard.css";
import http from "../../service/axios";
import Image from "next/image";

const Helpcard = () => {
  const [data, setData] = useState({});
  const getData = () => {
    http
      .get("/quizperson-quiz/")
      .then((res) => {
        setData(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <aside className="helpcard">
      <Image className="helpcard__prestimg" src={presentimg} alt="" />
      <div className="helpcard__wrapper">
        <div className="helpcard__personbox">
          <Image
            loader={() => data?.image}
            width={128}
            height={128}
            className="helpcard__presonimg"
            src={data?.image}
            alt="personimg"
          />
          <div className="helpcard__personabout">
            <h3 className="helpcard__person__name">{data?.fio}</h3>
            <p className="helpcard__person__position">{data?.position}</p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="helpcard__doc"
        />
        <div className="helpcard__bottombox">
          <h5 className="helpcard__bottom__title">
            Ответив на вопросы{" "}
            <span className="helpcard__bottom__titlebold"> вы получите:</span>
          </h5>
          <ul className="helpcard__bottom__list">
            <li className="helpcard__bottom__list-item">
              <Image
                className="helpcard__bottom__lockimg"
                src={lockimg}
                alt="helpcardimg"
              />
              <h5 className="helpcard__bottom__listitem__text">
                <span className="helpcard__bottom__listitem__textbold">
                  Ваучер{" "}
                </span>{" "}
                на бесплатную доставку
              </h5>
            </li>
            <li className="helpcard__bottom__list-item2">
              <Image
                className="helpcard__bottom__lockimg"
                src={lockimg}
                alt="helpcardimg"
              />
              <h5 className="helpcard__bottom__listitem__text">
                <span className="helpcard__bottom__listitem__textbold">
                  Помощь{" "}
                </span>{" "}
                в подборе оборудования
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Helpcard;
