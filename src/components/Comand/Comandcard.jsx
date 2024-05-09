import React from "react";
import "./comand.css";
import Image from "next/image";
const Comandcard = ({ item }) => {
  return (
    <div className="comandcard">
      <Image
        width={100}
        height={100}
        loader={() => item?.logo}
        className="comandcard__img"
        src={item?.logo}
        alt="comandcard__img"
      />
      <h3 className="comandcard__name">{item?.name}</h3>
      <h4 className="comandcard__about">{item?.position}</h4>
    </div>
  );
};

export default Comandcard;
