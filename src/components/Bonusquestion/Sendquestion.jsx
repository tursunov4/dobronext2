import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import correctimg from "../../assets/Images/svg/Icon.svg";
import http from "../../service/axios";
import Image from "next/image";
const Sendquestion = ({ answers, setNext, setAnswers, openModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);
  const [check, setCheck] = useState(true);
  const handleSend = () => {
    if ((phone !== "") & (name !== "")) {
      http
        .post("/quizuser-solver-questions/", {
          name: name,
          phone: phone,
          solver_questions: answers,
        })
        .then((res) => {
          console.log(res.data);
          openModal();
          setTimeout(() => {
            setNext(1);
          }, 200);
          setAnswers([]);
          setName("");
          setPhone("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setValid(true);
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
          <div className=" bonus__inner__sendproggres"></div>
        </div>
        <h3 className="bonus__inner__title bonus__inner__title__finnly">
          Спасибо за ответы! 
        </h3>
        <div className="bonus__question__wrapper">
          <p className="bonus__question__doc">
            Укажите контактные данные, чтобы получить ваучер на бесплатную
            доставку. Менеджер свяжется с вами в ближайшее время!
          </p>
          <form className="bonus__question__form" action="">
            <div style={{ width: "100%" }}>
              <input
                onChange={(e) => setName(e.target.value)}
                className="bonus__question__form__input"
                placeholder="Имя*"
                type="text"
              />
              {valid & (name === "") ? (
                <p className="bonus__question__error">Введите ваше имя</p>
              ) : (
                ""
              )}
            </div>
            <div style={{ width: "100%" }}>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="bonus__question__form__input"
                placeholder="Телефон*"
                type="text"
              />
              {valid & (phone === "") ? (
                <p className="bonus__question__error">Введите ваш телефон</p>
              ) : (
                ""
              )}
            </div>
          </form>
          <div className="bonus__question__info__box">
            <div
              onClick={() => setCheck(!check)}
              className="bonus__question__info__check"
            >
              <span
                className={
                  check
                    ? "bonus__question__info__innercheck"
                    : "bonus__question__info__innercheckunactive"
                }
              >
                {check && <Image src={correctimg} alt="correct  " />}
              </span>
            </div>
            <p className="bonus__question__info__text">
              Я согласен (-на) предоставить свои контакты в целях получения
              информации о продукции и услугах продавца
            </p>
          </div>
        </div>
        <div className="bonus__question__bottom">
          <div className="bonus__question__about"></div>
          <button
            onClick={() => handleSend()}
            className="bonus__question__btn bonus__question__sendbtn"
          >
            Отправить
            <Image src={nextquesitonimg} alt="question" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sendquestion;
