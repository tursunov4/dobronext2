import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Image from "next/image";
const Fourthquestion = ({ setNext, setAnswers }) => {
  const [firstanswer, setFirstAnswer] = useState("Да, высокий");
  const handleNext = () => {
    setAnswers((prev) => [...prev, { question: 4, answer: firstanswer }]);
    setNext((prev) => prev + 1);
  };
  return (
    <div>
      <div className="bonus__innerfirstbox">
        <h4 className="bonus__inner__order">
          {" "}
          <span className="bonus__inner__order__bold">Вопрос 4</span> из 7
        </h4>
        <div className="bonus__inner__rate">
          <div className="bonus__inner__progress  bonus__inner__progress4"></div>
        </div>
        <h3 className="bonus__inner__title">
          4. Есть ли у вас данные об уровне грунтовых вод на участке?
        </h3>
        <div className="bonus__question__wrapper">
          <ul className="bonus__question__list">
            <li
              onClick={() => setFirstAnswer("Да, высокий")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Да, высокий"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Да, высокий"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Да, высокий</p>
            </li>
            <li
              onClick={() => setFirstAnswer("Да, низкий")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Да, низкий"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={
                    firstanswer === "Да, низкий"
                      ? correctactive
                      : correctunactive
                  }
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Да, низкий</p>
            </li>
            <li
              onClick={() =>
                setFirstAnswer("Не знаю, нужна консультация специалиста")
              }
              className="bonus__question__item"
            >
              <div>
                <div
                  className={
                    firstanswer === "Не знаю, нужна консультация специалиста"
                      ? "bonus__question__selected__active"
                      : "bonus__question__selected"
                  }
                >
                  <Image
                    className="bonus__question__correct-img"
                    src={
                      firstanswer === "Не знаю, нужна консультация специалиста"
                        ? correctactive
                        : correctunactive
                    }
                    alt="question"
                  />
                </div>
              </div>
              <p className="bonuse__question__text">
                Не знаю, нужна консультация специалиста
              </p>
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

export default Fourthquestion;
