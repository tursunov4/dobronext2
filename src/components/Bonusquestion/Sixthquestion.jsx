import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Image from "next/image";
const Sixthquestion = ({ setNext, setAnswers }) => {
  const [firstanswer, setFirstAnswer] = useState("Центральное водоснабжение");
  const handleNext = () => {
    setAnswers((prev) => [...prev, { question: 6, answer: firstanswer }]);
    setNext((prev) => prev + 1);
  };
  return (
    <div>
      <div className="bonus__innerfirstbox">
        <h4 className="bonus__inner__order">
          {" "}
          <span className="bonus__inner__order__bold">Вопрос 6</span> из 7
        </h4>
        <div className="bonus__inner__rate">
          <div className="bonus__inner__progress  bonus__inner__progress6"></div>
        </div>
        <h3 className="bonus__inner__title">
          6. Каким способом осуществляется подвод воды на участке?
        </h3>
        <div className="bonus__question__wrapper">
          <ul className="bonus__question__list">
            <li
              onClick={() => setFirstAnswer("Центральное водоснабжение")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Центральное водоснабжение"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Центральное водоснабжение"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">
                Центральное водоснабжение
              </p>
            </li>
            <li
              onClick={() => setFirstAnswer("Скважина")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Скважина"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Скважина" ? correctactive : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Скважина</p>
            </li>
            <li
              onClick={() => setFirstAnswer("Подвода еще нет")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Подвода еще нет"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Подвода еще нет"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Подвода еще нет</p>
            </li>
          </ul>
        </div>
        <div className="bonus__question__bottom">
          <div className="bonus__question__about">
            <Image src={questionchoosenimg} alt="question" />
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

export default Sixthquestion;
