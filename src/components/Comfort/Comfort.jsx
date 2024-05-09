import React from "react";
import pocketimg from "../../assets/Images/svg/pocket.svg";
import cubimg from "../../assets/Images/svg/cub.svg";
import notebookimg from "../../assets/Images/svg/notebook.svg";
import cashimg from "../../assets/Images/svg/cash.svg";
import sberbankimg from "../../assets/Images/svg/sberbank.svg";
import alfabankimg from "../../assets/Images/svg/alfabank.svg";
import vtbbankimg from "../../assets/Images/svg/vtbbank.svg";
import pointimg from "../../assets/Images/svg/point.svg";
import "./comfort.css";
import Image from "next/image";
const Comfort = () => {
  return (
    <section className="comfort">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="8000"
          className="comfort__title"
        >
          <span className="confort__title__bold">Обеспечиваем комфорт </span>{" "}
          каждому нашему клиенту!
        </h2>
        <ul className="comfort__list">
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="comfort__list__item"
          >
            <div className="comfort__list__box">
              <div className="comfort__list__imgbox">
                <Image className="" src={pocketimg} alt="pocket" />
                <div className="comfort__list__imgbox__textbox">
                  <h2 className="comfort__list__imgbox__title">Оплата</h2>
                  <p className="comfort__list__imgbox__text">
                    <Image
                      width={6}
                      height={6}
                      className="comfort__pointimg"
                      src={pointimg}
                      alt="comfortpont"
                    />
                    Наличные/терминал/ссылка
                  </p>

                  <p className="comfort__list__imgbox__text">
                    <Image
                      className="comfort__pointimg"
                      src={pointimg}
                      alt=""
                    />
                    Оплата производится по факту выполненных работ
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="comfort__list__item"
          >
            <div className="comfort__list__box">
              <div className="comfort__list__imgbox">
                <Image src={cubimg} alt="pocket" />
                <div className="comfort__list__imgbox__textbox">
                  <h2 className="comfort__list__imgbox__title">Доставка</h2>
                  <p className="comfort__list__imgbox__text">
                    {" "}
                    <Image
                      width={6}
                      height={6}
                      className="comfort__pointimg"
                      src={pointimg}
                      alt="comfortpoin"
                    />{" "}
                    Транспортировка выполняется собственным транспортом компании
                    в любую точку города и области
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="comfort__list__item"
          >
            <div className="comfort__list__box">
              <div className="comfort__list__imgbox">
                <Image src={notebookimg} alt="pocket" />
                <div className="comfort__list__imgbox__textbox">
                  <h2 className="comfort__list__imgbox__title">Гарантия</h2>
                  <p className="comfort__list__imgbox__text">
                    <Image
                      width={6}
                      height={6}
                      className="comfort__pointimg"
                      src={pointimg}
                      alt="pointimg"
                    />
                    До 10 лет
                  </p>

                  <p className="comfort__list__imgbox__text">
                    <Image
                      width={6}
                      height={6}
                      className="comfort__pointimg"
                      src={pointimg}
                      alt="comfortimg"
                    />
                    {"  "}
                    <p> Техническое обслуживание по выгодной стоимости</p>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="comfort__list__item"
          >
            <div className="comfort__list__box">
              <div className="comfort__list__imgbox">
                <Image src={cashimg} alt="pocket" />
                <div className="comfort__list__imgbox__textbox">
                  <h2 className="comfort__list__imgbox__title">Оплата</h2>
                  <p className="comfort__list__imgbox__text">
                    <Image
                      width={6}
                      height={6}
                      className="comfort__pointimg"
                      src={pointimg}
                      alt=""
                    />
                    Рассрочка
                  </p>
                </div>
              </div>
              <ul className="comfot__list__imgs">
                <li className="comfort__list__imgs__item">
                  <Image src={sberbankimg} alt="pocket" />
                </li>
                <li className="comfort__list__imgs__item">
                  <Image src={alfabankimg} alt="pocket" />
                </li>
                <li className="comfort__list__imgs__item">
                  <Image src={vtbbankimg} alt="pocket" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Comfort;
