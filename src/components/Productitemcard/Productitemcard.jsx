"use client";
import React, { useContext, useEffect, useState } from "react";
import "./productitem.css";
import { Context } from "../../context/Context";
import podrobarrow from "../../assets/Images/svg/raskitarrow.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Productitemcard = ({ data }) => {
  const { openModal } = useContext(Context);
  const navigate = useRouter();
  const [mainimg, setMainimg] = useState("");
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    setMainimg(data?.images?.at(0)?.image);
  }, [data]);
  return (
    <section className="productitem">
      <div className="container">
        <ul className="productitem__location">
          <li
            onClick={() => navigate.push("/")}
            className="productitem__location__inner"
          >
            Главная
          </li>
          /
          <a
            onClick={() => navigate.push("/#catalog")}
            className="productitem__location__inner"
          >
            Каталог
          </a>
          /<li className="productitem__location__inner">{data?.title}</li>
        </ul>
        <div className="productitem__wrapper">
          <div className="productitem__imgs">
            <div
              style={{
                background: `url(${mainimg})`,
                backgroundRepeat: "no-repeat !important",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              className="productitem__mainimg"
            ></div>

            <ul className="productitem__otherimg__list">
              {data?.images?.length > 1 &&
                data?.images?.slice(0, 5)?.map((item, index) => (
                  <li
                    onClick={() => setMainimg(item?.image)}
                    key={index}
                    style={{
                      cursor: "pointer",
                      background: `url(${item?.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                    className="productitem__otherimg"
                  ></li>
                ))}
            </ul>
          </div>
          <div className="productitem__aboutwrapper">
            <h1 className="productitem__name">{data?.title}</h1>
            <h4 className="productitem__price">от {data?.price} руб.</h4>
            <button
              onClick={() => openModal()}
              className="productitem__callbtn"
            >
              Оставить заявку
            </button>
            <div className="productitem__doc">
              <p className="productitem__doctitle">
                {data?.description
                  ?.split(" ")
                  .slice(
                    0,
                    filter ? data?.description?.split(" ")?.length : 100
                  )
                  .join(" ")
                  ?.split("\r\n")
                  ?.map((item, index) => (
                    <p className="productitem__docinnertext" key={index}>
                      {item}
                    </p>
                  ))}
              </p>
              {data?.description?.split(" ")?.length > 100 && (
                <button
                  onClick={() => setFilter(!filter)}
                  className="productitem__podrobbtn"
                >
                  {" "}
                  <Image
                    className={filter && "productitem__img__rotate"}
                    src={podrobarrow}
                    alt="podrobarrow"
                  />{" "}
                  {filter ? "Свернуть" : "Подробнее"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productitemcard;
