"use client";
import telegramimg from "../../assets/Images/svg/telegram.svg";
import whatsappimg from "../../assets/Images/svg/whatsapp.svg";
import questionimg from "../../assets/Images/png/bottomquestion.png";
import planquestionimg from "../../assets/Images/png/planquestionimg.png";
import questionbottomtree from "../../assets/Images/webg/quesitonbottomtree.webp";
import Image from "next/image";
import "./question.css";
import { useContext } from "react";
import { Context } from "@/context/Context";
const Question = () => {
  const { contactdata } = useContext(Context);
  return (
    <section id="contact" className="question">
      <div className="container">
        <div className="question__mianbox">
          <div className="question__bottomtree">
            <Image
              className="question__bottomtree__img"
              src={questionbottomtree}
              alt="qustionbottomimg"
            />
          </div>
          <div className="question__bacimg">
            <Image className="question__bacimg__img" src={questionimg} alt="" />
          </div>
          <div className="question__planimg">
            <Image
              className="question__bacimg__planimg"
              src={planquestionimg}
              alt="questionbacimg"
            />
          </div>
          <div className="question__main__wrapper">
            <div className="question__main__first-box">
              <h2 className="question__main__title">
                <span className="question__main__titlebold">
                  {" "}
                  Остались вопросы?
                </span>{" "}
                Свяжитесь с нами прямо сейчас!
              </h2>
              <ul className="question__social__list">
                <li className="question__social__listitem">
                  <h4 className="question__social__about">Телефон</h4>
                  <a
                    href={`tel:${contactdata?.phone}`}
                    className="quetion__social__info"
                  >
                    {contactdata?.phone}
                  </a>
                </li>
                <li className="question__social__listitem">
                  <h4 className="question__social__about">Почта</h4>
                  <a
                    href={contactdata?.email}
                    className="quetion__social__info"
                  >
                    {contactdata?.email}
                  </a>
                </li>
              </ul>
              <div className="question__address">
                <h4 className="question__social__about">Адрес</h4>
                <span
                  style={{ cursor: "pointer" }}
                  className="quetion__social__info__address"
                >
                  {contactdata?.address}
                </span>
              </div>
              <div className="question__messanger">
                <p className="question__messanger__text">
                  Или свяжитесь с нами <br /> в мессенджере
                </p>
                <div className="question__messanger__img">
                  <a href={contactdata?.telegram}>
                    <Image src={telegramimg} alt="" />
                  </a>
                  <a href={contactdata?.whatsapp}>
                    <Image src={whatsappimg} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="question__main__second-box">
              <h4 className="question__person__name">Евгений Михайлов</h4>
              <p className="qustion__person__about">Выездной инженер</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
