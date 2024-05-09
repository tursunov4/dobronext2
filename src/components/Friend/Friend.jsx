"use client";
import React, { useEffect, useState } from "react";
import arrow from "../../assets/Images/svg/raskitarrow.svg";
import "./friend.css";
import http from "../../service/axios";
import Image from "next/image";
const Friend = () => {
  const [opendata, setOpendata] = useState(true);
  const [data, setData] = useState([]);
  const getData = () => {
    http
      .get("/aboutabout-company/")
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="friend">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="friend__title"
        >
          <span className="friend__titlebold">Добро Септик:</span> вы точно
          посоветуете нас друзьям и знакомым!
        </h2>
        <div className="friend__wrapper">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="friend__imgs__box"
          >
            <Image
              loader={() => data?.images?.at(0)?.image}
              className="friend__imgs__mainimg"
              src={data?.images?.at(0)?.image}
              alt="friendimg"
              width={200}
              height={200}
            />
            <ul className="friend__imgs__list">
              {data?.images?.slice(1, 4)?.map((item, index) => (
                <li key={index} className="firend__imgs__listitem">
                  <Image
                    loader={() => item?.image}
                    className="friend__imgs__listitem__img"
                    src={item?.image}
                    alt="frienditem-img"
                    width={"250"}
                    height={"100"}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="friend__imgs__textbox"
          >
            {data?.text
              ?.split("\r\n")
              ?.slice(0, 1)
              .map((item, index) => (
                <p className="friend__imgs__texbox__text" key={index}>
                  {item}
                </p>
              ))}

            <div className={opendata && "sewage__mobile__nonlist"}>
              {data?.text
                ?.split("\r\n")
                ?.slice(1, data?.text?.split("\r\n").length)
                .map((item, index) => (
                  <p className="friend__imgs__texbox__text" key={index}>
                    {item}
                  </p>
                ))}
            </div>
            <div className="sewage__mobile__arrowwrapper">
              <button
                onClick={() => setOpendata(!opendata)}
                className="sewage__mobile__arrow__btn"
              >
                <Image
                  className={!opendata && "swege__arrow__rotate"}
                  src={arrow}
                  alt="arrow"
                />
                {opendata ? "Раскрыть" : "Свернуть"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friend;
