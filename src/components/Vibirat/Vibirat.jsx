import React from "react";
import "./vibrat.css";
import substracktimg from "../../assets/Images/svg/substract.svg";

import Image from "next/image";
export const Vibirat = () => {
  return (
    <section className="vibrat">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="vibrat__title"
        >
          {" "}
          <span className="vibrat__title-bold">Почему</span> клиенты выбирают
          нас?
        </h2>
        <ul className="vibrat__list">
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="vibrat__list-item"
          >
            <div className="vibrat__list__inner__bac vibratbac1">
              <div className="vibrat__list-box">
                <div className="vibrat__number">
                  <div className="vibrat__number__innerbox">
                    <Image width={56} src={substracktimg} alt="substracktimg" />
                    <span className="vibrat__number__text">01</span>
                  </div>
                </div>
                <div className="virbrat__text__wrapper">
                  <h3 className="vibrat__text__title">Большой ассортимент</h3>
                  <p className="vibrat__text__doc">
                    Мы сотрудничаем с 20 заводами-изготовителями и реализуем
                    больше 100 моделей очистных систем
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="vibrat__list-item"
          >
            <div className="vibrat__list__inner__bac vibratbac2">
              <div className="vibrat__list-box">
                <div className="vibrat__number">
                  <div className="vibrat__number__innerbox">
                    <Image width={56} src={substracktimg} alt="substracktimg" />
                    <span className="vibrat__number__text">02</span>
                  </div>
                </div>
                <div className="virbrat__text__wrapper">
                  <h3 className="vibrat__text__title">
                    Грамотные технические решения
                  </h3>
                  <p className="vibrat__text__doc">
                    Оборудование, которое мы предлагаем, подбирается после
                    тщательного анализа всех факторов
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="vibrat__list-item"
          >
            <div className="vibrat__list__inner__bac vibratbac3">
              <div className="vibrat__list-box">
                <div className="vibrat__number">
                  <div className="vibrat__number__innerbox">
                    <Image width={56} src={substracktimg} alt="substracktimg" />
                    <span className="vibrat__number__text">03</span>
                  </div>
                </div>
                <div className="virbrat__text__wrapper">
                  <h3 className="vibrat__text__title">Высокое качество</h3>
                  <p className="vibrat__text__doc">
                    Добро Септик предлагает только то оборудование, которое
                    прошло проверку на прочность и долговечность
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="vibrat__list-item"
          >
            <div className="vibrat__list__inner__bac vibratbac4">
              <div className="vibrat__list-box">
                <div className="vibrat__number">
                  <div className="vibrat__number__innerbox">
                    <Image width={56} src={substracktimg} alt="substracktimg" />
                    <span className="vibrat__number__text">04</span>
                  </div>
                </div>
                <div className="virbrat__text__wrapper">
                  <h3 className="vibrat__text__title">Опытные специалисты</h3>
                  <p className="vibrat__text__doc">
                    Мы работаем на рынке более 10 лет и знаем все нюансы работы
                    и монтажа очистных систем
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="vibrat__list-item"
          >
            <div className="vibrat__list__inner__bac vibratbac5">
              <div className="vibrat__list-box">
                <div className="vibrat__number">
                  <div className="vibrat__number__innerbox">
                    <Image width={56} src={substracktimg} alt="substracktimg" />
                    <span className="vibrat__number__text">05</span>
                  </div>
                </div>
                <div className="virbrat__text__wrapper">
                  <h3 className="vibrat__text__title">Индивидуальный подход</h3>
                  <p className="vibrat__text__doc">
                    Персональный проект, подбор лучших решений, личный менеджер
                    - вот то, что мы предлагаем каждому клиенту
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="vibrat__list-item"
          >
            <div className="vibrat__list__inner__bac vibratbac6">
              <div className="vibrat__list-box">
                <div className="vibrat__number">
                  <div className="vibrat__number__innerbox">
                    <Image width={56} src={substracktimg} alt="substracktimg" />
                    <span className="vibrat__number__text">06</span>
                  </div>
                </div>
                <div className="virbrat__text__wrapper">
                  <h3 className="vibrat__text__title">Техническая поддержка</h3>
                  <p className="vibrat__text__doc">
                    После монтажа наше сотрудничество не заканчивается. Вы
                    можете обратиться к нам, если возникли вопросы и проблемы
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
// linear-gradient(180.00deg, rgb(255, 255, 255),rgba(255, 255, 255, 0.82) 25.246%,rgba(255, 255, 255, 0.46) 44.496%,rgba(255, 255, 255, 0) 63.115%),
