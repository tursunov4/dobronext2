import React, { useState } from "react";
import closedrop from "../../assets/Images/svg/closedropdown.svg";
import opendrop from "../../assets/Images/svg/opendopdown.svg";
import "./model.css";
import Image from "next/image";
const Dropdown = ({ item }) => {
  const [drop, setDrop] = useState(false);
  return (
    <div className="dropdown">
      <div onClick={() => setDrop(!drop)} className="dropdown__header">
        <h4 className="dropdown__title">{item?.title}</h4>
        <button className="dropdown__arrow__btn">
          <Image
            className="dropdown__arrow__img"
            src={drop ? closedrop : opendrop}
            alt="dropdown"
          />
        </button>
      </div>
      {drop && (
        <div className="dropdown__body">
          <ul className="dropdown__list">
            <li className="dropdown__listitem">
              <h3 className="dropdown__type">Пользователей</h3>
              <h4 className="dropdown__type__value">{item?.users}</h4>
            </li>
            <li className="dropdown__listitem">
              <h3 className="dropdown__type">Произв., л/сут </h3>
              <h4 className="dropdown__type__value">{item?.proizvoditel}</h4>
            </li>
            <li className="dropdown__listitem">
              <h3 className="dropdown__type">Залп. сброс, л</h3>
              <h4 className="dropdown__type__value">{item?.zalp}</h4>
            </li>
            <li className="dropdown__listitem">
              <h3 className="dropdown__type">Длина</h3>
              <h4 className="dropdown__type__value">{item?.length}</h4>
            </li>
            <li className="dropdown__listitem">
              <h3 className="dropdown__type">Ширина</h3>
              <h4 className="dropdown__type__value">{item?.shirina}</h4>
            </li>
            <li className="dropdown__listitem">
              <h3 className="dropdown__type">Высота</h3>
              <h4 className="dropdown__type__value">{item?.visota}</h4>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
