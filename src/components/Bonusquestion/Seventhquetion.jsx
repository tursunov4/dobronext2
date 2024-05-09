import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Image from "next/image";
const Seventhquestion = ({ setNext, setAnswers }) => {
  const [firstanswer, setFirstAnswer] = useState("Нет");
  const [brend, setBrend] = useState("");
  const [brendvalid, setBrendvalid] = useState(false);
  const handleNext = () => {
    if (firstanswer === "Нет") {
      setAnswers((prev) => [...prev, { question: 7, answer: firstanswer }]);
      setNext((prev) => prev + 1);
    } else {
      if (brend !== "") {
        setAnswers((prev) => [...prev, { question: 7, answer: brend }]);
        setNext((prev) => prev + 1);
      } else {
        setBrendvalid(true);
      }
    }
  };
  return (
    <div>
      <div className="bonus__innerfirstbox">
        <h4 className="bonus__inner__order">
          {" "}
          <span className="bonus__inner__order__bold">Вопрос 7</span> из 7
        </h4>
        <div className="bonus__inner__rate">
          <div className="bonus__inner__progress  bonus__inner__progress7"></div>
        </div>
        <h3 className="bonus__inner__title">
          7. Есть ли у вас предпочтения по брендам?
        </h3>
        <div className="bonus__question__wrapper">
          <ul className="bonus__question__list">
            <li
              onClick={() => setFirstAnswer("Да")}
              className="bonus__question__item"
            >
              <div
                className={
                  firstanswer === "Да"
                    ? "bonus__question__selected__active"
                    : "bonus__question__selected"
                }
              >
                <Image
                  className="bonus__question__correct-img"
                  src={firstanswer === "Да" ? correctactive : correctunactive}
                  alt="question"
                />
              </div>
              <p className="bonuse__question__text">Да</p>
            </li>
            {firstanswer === "Да" && (
              <li>
                <input
                  onChange={(e) => {
                    setBrend(e.target.value);
                    setBrendvalid(false);
                  }}
                  className="bonus__question__input"
                  type="text"
                  placeholder="Введите название бренда"
                />
                {brendvalid && (
                  <p className="bonus__question__error">
                    Требуется название бренда
                  </p>
                )}
              </li>
            )}
            <li
              onClick={() => setFirstAnswer("Нет")}
              className="bonus__question__item"
            >
              <div>
                <div
                  className={
                    firstanswer === "Нет"
                      ? "bonus__question__selected__active"
                      : "bonus__question__selected"
                  }
                >
                  <Image
                    className="bonus__question__correct-img"
                    src={
                      firstanswer === "Нет" ? correctactive : correctunactive
                    }
                    alt="question"
                  />
                </div>
              </div>
              <p className="bonuse__question__text">
                Нет, помогите мне выбрать оптимальный вариант
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

export default Seventhquestion;
