import React from "react";
import "./modal.css";
import close from "../../assets/Images/svg/closeyoutubemodal.svg";
import Image from "next/image";
const Modal = ({ modal, setModal, id, children }) => {
  const handleClose = () => {
    setModal(false);
  };
  if (typeof window !== "undefined") {
    window.onclick = function (event) {
      if (event.target.id === "modal") {
        setModal(false);
      }
    };
  }
  if (modal) {
    return (
      <div id="modal" className="youtubemodal">
        <div className="youtubemodalcontainer">
          <button className="modal__clodebtn" onClick={handleClose}>
            <Image width={20} src={close} alt="close" />
          </button>
          {children}
        </div>
      </div>
    );
  }
};

export default Modal;
