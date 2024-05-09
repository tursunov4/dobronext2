import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Image from "next/image";
const Secondquestion = ({ setNext, setAnswers }) => {
  const [firstanswer, setFirstAnswer] = useState("Проживаем постоянно");
  const handleNext = () => {
    setAnswers((prev) => [...prev, { question: 2, answer: firstanswer }]);
    setNext((prev) => prev + 1);
  };
  return (
    <div>
      <div className="bonus__innerfirstbox">
        <h4 className="bonus__inner__order">
          {" "}
          <span className="bonus__inner__order__bold">Вопрос 2</span> из 7
        </h4>
        <div className="bonus__inner__rate ">
          <div className="bonus__inner__progress  bonus__inner__progress2"></div>
        </div>
        <h3 className="bonus__inner__title">
          2. Сколько времени вы и ваша семья планируете проводить здесь?
        </h3>
        <div className="bonus__question__wrapper">
          <ul className="bonus__question__list">
            <li
              onClick={() => setFirstAnswer("Проживаем постоянно")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Проживаем постоянно"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Проживаем постоянно"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Проживаем постоянно</p>
            </li>
            <li
              onClick={() => setFirstAnswer("Приезжаем на выходные")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Приезжаем на выходные"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Приезжаем на выходные"
                      ? correctactive
                      : correctunactive
                  }
                  alt="qustion"
                />
              </div>
              <p className="bonuse__question__text">Приезжаем на выходные</p>
            </li>
            <li
              onClick={() =>
                setFirstAnswer(
                  "Бываем только в теплый сезон – лето, частично весна и осень"
                )
              }
              className="bonus__question__item"
            >
              <div>
                <div
                  className={
                    firstanswer ===
                    "Бываем только в теплый сезон – лето, частично весна и осень"
                      ? "bonus__question__selected__active"
                      : "bonus__question__selected"
                  }
                >
                  <Image
                    className="bonus__question__correct-img"
                    src={
                      firstanswer ===
                      "Бываем только в теплый сезон – лето, частично весна и осень"
                        ? correctactive
                        : correctunactive
                    }
                    alt="quesion"
                  />
                </div>
              </div>
              <p className="bonuse__question__text">
                Бываем только в теплый сезон – лето, частично весна и осень
              </p>
            </li>
          </ul>
        </div>
        <div className="bonus__question__bottom">
          <div className="bonus__question__about">
            <Image src={questionchoosenimg} alt="questionchoose" />
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

export default Secondquestion;
