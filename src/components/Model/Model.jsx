import React from "react";
import Dropdown from "./Dropdown";
import "./model.css";

const Model = ({ model }) => {
  return (
    <section className="model">
      <div className="container">
        <h2 className="model__title">Модельный ряд</h2>
        <div className="model__wrapper">
          {model?.map((item, index) => (
            <Dropdown key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Model;
