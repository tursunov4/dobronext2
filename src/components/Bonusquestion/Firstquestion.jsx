import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Image from "next/image";
const Firstquestion = ({ setNext, setAnswers }) => {
  const [firstanswer, setFirstAnswer] = useState("Частный дом");
  const handleNext = () => {
    setAnswers((prev) => [...prev, { question: 1, answer: firstanswer }]);
    setNext((prev) => prev + 1);
  };
  return (
    <div>
      <div className="bonus__innerfirstbox">
        <h4 className="bonus__inner__order">
          {" "}
          <span className="bonus__inner__order__bold">Вопрос 1</span> из 7
        </h4>
        <div className="bonus__inner__rate">
          <div className="bonus__inner__mainprogress">
            <div className="bonus__inner__progress"></div>
          </div>
        </div>
        <h3 className="bonus__inner__title">
          1. Для какого объекта необходима автономная канализация?
        </h3>
        <div className="bonus__question__wrapper">
          <ul className="bonus__question__list">
            <li
              onClick={() => setFirstAnswer("Частный дом")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Частный дом"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Частный дом"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Частный дом</p>
            </li>
            <li
              onClick={() => setFirstAnswer("Дачный коттедж")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Дачный коттедж"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Дачный коттедж"
                      ? correctactive
                      : correctunactive
                  }
                  alt="questionimg"
                />
              </div>
              <p className="bonuse__question__text">Дачный коттедж</p>
            </li>
            <li
              onClick={() => setFirstAnswer("Еще не знаю")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Еще не знаю"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Еще не знаю"
                      ? correctactive
                      : correctunactive
                  }
                  alt="qustionimg"
                />
              </div>
              <p className="bonuse__question__text">Еще не знаю</p>
            </li>
          </ul>
        </div>
        <div className="bonus__question__bottom">
          <div className="bonus__question__about">
            <Image src={questionchoosenimg} alt="questionimg" />
            <h5 className="bonus__question__about__text">
              <span className="bonus__question__about__textbold">
                {" "}
                Нажимайте на вариант ответа{" "}
              </span>{" "}
              <br />и переходите к следующему вопросу
            </h5>
          </div>
          <button onClick={() => handleNext()} className="bonus__question__btn">
            Далее
            <Image src={nextquesitonimg} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firstquestion;
