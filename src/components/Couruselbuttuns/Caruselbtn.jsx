import React from "react";
import prev from "../../assets/Images/svg/prev.svg";
import next from "../../assets/Images/svg/next.svg";
import Image from "next/image";
import "./style.css";
const Caruselbutton = ({ handleClick, type, styleadd }) => {
  return (
    <button onClick={handleClick} className={`caruselbtn ` + `${styleadd}`}>
      {type === "prev" ? (
        <Image src={prev} alt="prev" className="caruselbtn__img" />
      ) : (
        <Image src={next} alt="next" className="caruselbtn__img" />
      )}
    </button>
  );
};

export default Caruselbutton;
