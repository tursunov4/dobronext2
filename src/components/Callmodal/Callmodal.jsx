"use client";
import React, { useContext, useState } from "react";
import closemodalimg from "../../assets/Images/svg/closemodal.svg";
import "./callmodal.css";
import correctimg from "../../assets/Images/svg/Icon.svg";
import http from "../../service/axios";
import { Context } from "../../context/Context";
import Image from "next/image";
const Callmodal = ({ onClose }) => {
  const [check, setCheck] = useState(true);
  const { openEndModal } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.question.trim()) {
      newErrors.question = "Question is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      handlePostdata();
    }
  };
  const handlePostdata = () => {
    http
      .post("/aplicationcreate/", formData)
      .then((res) => {
        console.log(res.data);
        onClose();
        openEndModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <aside className="callmodal">
      <div className="callmodal__box">
        <button onClick={() => onClose()} className="callmodal__closebtn">
          <Image src={closemodalimg} alt="closemodalimg" />
        </button>
        <h3 className="callmodal__title">Оставьте заявку</h3>
        <h5 className="callmodal__text">Мы оперативно перезвоним</h5>
        <form onSubmit={handleSubmit} className="callmodal__form">
          <label className="callmodal__label" htmlFor="">
            <input
              className="callmodal__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="callmodal__error">{errors.name}</p>}
            <span className="callmodal__input__placholder">Ваше имя*</span>
          </label>
          <label className="callmodal__label" htmlFor="">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="callmodal__input"
              type="text"
              required
            />
            {errors.phone && <p className="callmodal__error">{errors.phone}</p>}
            <span className="callmodal__input__placholder">Телефон*</span>
          </label>
          <label className="callmodal__label" htmlFor="">
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
              className="callmodal__textarea callmodal__input"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            {errors.question && (
              <p className="callmodal__error">{errors.question}</p>
            )}
            <span className="callmodal__input__placholder">Ваш вопрос</span>
          </label>
          <div className="callmodal__check__box">
            {/* <input className="callmodal__check" type="checkbox" name="" id="" /> */}
            <div>
              <div
                onClick={() => setCheck(!check)}
                className={
                  check
                    ? "callmodal__correct__box"
                    : "callmodal__correct__boxuncative"
                }
              >
                {check && <Image src={correctimg} alt="correctimg" />}
              </div>
            </div>
            <label className="callmodal__check__label " htmlFor="">
              Я согласен (-на) предоставить свои контакты в целях получения
              информации о продукции и услугах продавца
            </label>
          </div>
          <button
            onSubmit={(e) => handleSubmit(e)}
            type="submit"
            className="callmodal__btn"
          >
            Отправить
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Callmodal;
