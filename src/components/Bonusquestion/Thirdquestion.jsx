import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Image from "next/image";
const Thirdquestion = ({ setNext, setAnswers }) => {
  const [firstanswer, setFirstAnswer] = useState("От 1 до 3");
  const handleNext = () => {
    setAnswers((prev) => [...prev, { question: 3, answer: firstanswer }]);
    setNext((prev) => prev + 1);
  };
  return (
    <div>
      <div className="bonus__innerfirstbox">
        <h4 className="bonus__inner__order">
          {" "}
          <span className="bonus__inner__order__bold">Вопрос 3</span> из 7
        </h4>
        <div className="bonus__inner__rate">
          <div className="bonus__inner__progress  bonus__inner__progress3"></div>
        </div>
        <h3 className="bonus__inner__title">
          3. Сколько людей будут проживать в доме?
        </h3>
        <div className="bonus__question__wrapper">
          <ul className="bonus__question__list">
            <li
              onClick={() => setFirstAnswer("От 1 до 3")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "От 1 до 3"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "От 1 до 3"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">От 1 до 3</p>
            </li>
            <li
              onClick={() => setFirstAnswer("От 4 до 6")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "От 4 до 6"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "От 4 до 6"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">От 4 до 6</p>
            </li>
            <li
              onClick={() => setFirstAnswer("От 6 до 9 и более")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "От 6 до 9 и более"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "От 6 до 9 и более"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">От 6 до 9 и более</p>
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

export default Thirdquestion;
