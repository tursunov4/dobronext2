import React from "react";
import closemodalimg from "../../assets/Images/svg/closemodal.svg";
import "./callmodal.css";
import Image from "next/image";
const Succedmodal = ({ onClose }) => {
  return (
    <div className="callmodal__box__succed">
      <button onClick={() => onClose()} className="callmodal__closebtn">
        <Image src={closemodalimg} alt="closemodalimg" />
      </button>
      <h3 className="callmodal__title">Заявка отправлена</h3>
      <h5 className="callmodal__text">Мы оперативно перезвоним</h5>
      <button onClick={() => onClose()} className="callmodal__btn">
        Хорошо
      </button>
    </div>
  );
};

export default Succedmodal;
