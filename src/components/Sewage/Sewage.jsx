"use client";
import React, { useContext, useEffect, useState } from "react";
import correctimg from "../../assets/Images/svg/correct.svg";
import scheduleimg from "../../assets/Images/svg/schedule.svg";
import presentimg from "../../assets/Images/svg/present.svg";
import timeimg from "../../assets/Images/svg/time.svg";
import persons from "../../assets/Images/svg/user.svg";
import arrow from "../../assets/Images/svg/raskitarrow.svg";
import { Context } from "../../context/Context";
import "./sewage.css";
import http from "../../service/axios";
import Image from "next/image";
export const Sewage = () => {
  const [opendata, setOpendata] = useState(true);
  const { openModal } = useContext(Context);
  const [data, setData] = useState([]);
  const getData = () => {
    http
      .get("/aboutlist/")
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
    <section className="sewage">
      <div className="container">
        <div className="sewage__wrapper">
          <div className="sewage__firstbox">
            <h2
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="sewage__title"
            >
              <span className="sewage__title__bold">
                {" "}
                Автономная канализация
              </span>{" "}
              – максимальный комфорт и забота об экологии!
            </h2>
            <button
              onClick={() => openModal()}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__btn"
            >
              Рассчитать стоимость
            </button>
          </div>
          <div className="sewage__secondbox">
            <h3
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__secondbox__title"
            >
              Станция глубокой очистки – идеальное решение, если вы:
            </h3>
            <ul
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__list"
            >
              <li className="sewage__list-item">
                <Image src={correctimg} alt="correctimg" />
                <h4 className="sewage__list__title">
                  Планируете строительство частного дома и нуждаетесь в надежной
                  канализационной системе. СГБО – оптимальный вариант, ведь
                  такое оборудование удобно в эксплуатации, а служит до 50 лет.
                </h4>
              </li>
              <li className="sewage__list-item">
                <Image src={correctimg} alt="coorectimg" />
                <h4 className="sewage__list__title">
                  Делаете капитальный ремонт на дачном участке и хотите отдыхать
                  с комфортом. Правильно подобранное очистное сооружение избавит
                  вас от лишних проблем, а отдых на даче будет всегда в
                  удовольствие.
                </h4>
              </li>
              <li className="sewage__list-item">
                <Image src={correctimg} alt="correctimg" />
                <h4 className="sewage__list__title">
                  Проживаете загородом и устали тратить деньги на выкачку
                  сливной ямы. Современный септик отлично справится со сбором
                  воды и отходов, при этом траты на обслуживание значительно
                  сократятся.
                </h4>
              </li>
              <div className={opendata && "sewage__mobile__nonlist"}>
                <li className="sewage__list-item">
                  <Image src={correctimg} alt="correctimg" />
                  <h4 className="sewage__list__title">
                    Столкнулись с плохой работой существующего оборудования.
                    Неприятный запах, загрязнение питьевых источников, лишняя
                    влага вокруг выгребной ямы и жалобы соседей – действительно
                    повод заменить канализационную систему.
                  </h4>
                </li>
                <li className="sewage__list-item">
                  <Image src={correctimg} alt="correctimg" />
                  <h4 className="sewage__list__title">
                    Проживаете в водоохранной зоне или же уровень грунтовых вод
                    на участке очень высокий. Септик поможет разобраться со
                    сливом воды, если водоотведение на участке в принципе
                    вызывает ряд проблем. Очистное сооружение в этом случае –
                    настоящая находка
                  </h4>
                </li>
              </div>
            </ul>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__mobile__arrowwrapper"
            >
              <button
                onClick={() => setOpendata(!opendata)}
                className="sewage__mobile__arrow__btn"
              >
                <Image
                  className={!opendata && "swege__arrow__rotate"}
                  src={arrow}
                  alt="arrowimg"
                />
                {opendata ? "Раскрыть" : "Скрыть"}
              </button>
            </div>
          </div>
        </div>
        <div id="about" className="sewage__aboutbox">
          <ul className="sewage__aboutbox__list">
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__aboutbox__list-item"
            >
              <div className="sewage__aboutbox__list__innerbox">
                <Image
                  className="sewage__aboutbox__img"
                  src={scheduleimg}
                  alt="scheduleimg"
                />
                <div className="sewage__aboutbox__textwrap">
                  <h4 className="sewage__aboutbox__title">{data[0]?.key}</h4>
                  <h5 className="sewage__aboutbox__doc">{data[0]?.value}</h5>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__aboutbox__list-item"
            >
              <div className="sewage__aboutbox__list__innerbox">
                <Image
                  className="sewage__aboutbox__img"
                  src={presentimg}
                  alt="presentimg"
                />
                <div className="sewage__aboutbox__textwrap">
                  <h4 className="sewage__aboutbox__title">{data[1]?.key}</h4>
                  <h5 className="sewage__aboutbox__doc">{data[1]?.value}</h5>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__aboutbox__list-item"
            >
              <div className="sewage__aboutbox__list__innerbox">
                <Image
                  className="sewage__aboutbox__img"
                  src={timeimg}
                  alt="timeimg"
                />
                <div className="sewage__aboutbox__textwrap">
                  <h4 className="sewage__aboutbox__title">{data[2]?.key}</h4>
                  <h5 className="sewage__aboutbox__doc">{data[2]?.value}</h5>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="sewage__aboutbox__list-item"
            >
              <div className="sewage__aboutbox__list__innerbox">
                <Image
                  className="sewage__aboutbox__img"
                  src={persons}
                  alt="personsimg"
                />
                <div className="sewage__aboutbox__textwrap">
                  <h4 className="sewage__aboutbox__title">{data[3]?.key}</h4>
                  <h5 className="sewage__aboutbox__doc"> {data[3]?.value}</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
