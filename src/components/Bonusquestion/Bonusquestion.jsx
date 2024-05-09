"use client";
import React, { useState } from "react";
import nextquesitonimg from "../../assets/Images/svg/questionnext.svg";
import "./bonusquestion.css";
import correctactive from "../../assets/Images/svg/correctactive.svg";
import correctunactive from "../../assets/Images/svg/correctunactice.svg";
import questionchoosenimg from "../../assets/Images/svg/questionchoosen.svg";
import Helpcard from "../Helpcard/Helpcard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Firstquestion from "./Firstquestion";
import Secondquestion from "./Secondquestion";
import Thirdquestion from "./Thirdquestion";
import Fourthquestion from "./Fourthquestion";
import Sixthquestion from "./Sixthquestion";
import Fifthquestion from "./Fifthquestion";
import Seventhquestion from "./Seventhquetion";
import Sendquestion from "./Sendquestion";
const Bonusquestion = () => {
  const [next, setNext] = useState(1);
  const [answers, setAnswers] = useState([]);
  const openModal = () => {
    toast.success("Ваша анкета отправлена!!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="bonus">
      <ToastContainer />
      <div className="container">
        <h2 className="bonus__title">
          <span className="bonus__title-bold">
            {" "}
            Хотите сэкономить и получить приятный бонус?{" "}
          </span>
          Заполните небольшую анкету и получите доставку септика бесплатно!
        </h2>
        <div className="bonus__wrapper">
          <div className="bonus__box">
            {next === 1 ? (
              <Firstquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 2 ? (
              <Secondquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 3 ? (
              <Thirdquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 4 ? (
              <Fourthquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 5 ? (
              <Fifthquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 6 ? (
              <Sixthquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 7 ? (
              <Seventhquestion setNext={setNext} setAnswers={setAnswers} />
            ) : null}
            {next === 8 ? (
              <Sendquestion
                answers={answers}
                setNext={setNext}
                setAnswers={setAnswers}
                openModal={openModal}
              />
            ) : null}
          </div>
          <div className="bonus__helpcard">
            <Helpcard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonusquestion;
