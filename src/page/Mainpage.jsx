"use client";
import About from "@/components/About/About";
import Apptime from "@/components/Apptime/Apptime";
import Assortment from "@/components/Assortment/Assortment";
import Bonusquestion from "@/components/Bonusquestion/Bonusquestion";
import Callmodal from "@/components/Callmodal/Callmodal";
import Succedmodal from "@/components/Callmodal/Successmodal";
import City from "@/components/City/City";
import Client from "@/components/Client/Client";
import Comand from "@/components/Comand/Comand";
import Comfort from "@/components/Comfort/Comfort";
import Friend from "@/components/Friend/Friend";
import { Header } from "@/components/Header/Header";
import HeaderMain from "@/components/HeaderMain/HeaderMain";
import Modal from "@/components/Modal/Modal";
import Partner from "@/components/Partner/Partner";
import Problem from "@/components/Problem/Problem";
import Seritificate from "@/components/Sertificate/Seritificate";
import { Sewage } from "@/components/Sewage/Sewage";
import Usluga from "@/components/Usluga/Usluga";
import { Vibirat } from "@/components/Vibirat/Vibirat";
import Znaymcard from "@/components/Znaymcard/Znaymcard";
import { Context } from "@/context/Context";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useContext, useEffect } from "react";

const Mainpage = () => {
  const { callmodal, closeModal, endmodal, closeEndModal } =
    useContext(Context);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mainpage">
      <div className="head__mainback">
        <Header />
        <HeaderMain />
        <Usluga />
      </div>
      <Modal isOpen={callmodal} onClose={closeModal}>
        <Callmodal onClose={closeModal} />
      </Modal>
      <Modal isOpen={endmodal} onClose={closeEndModal}>
        <Succedmodal onClose={closeEndModal} />
      </Modal>
      <Partner />
      <Assortment />
      <div className="mainpage__sewage__bac">
        <Sewage />
        <Friend />
      </div>
      <div className="mainpage__comand__bac">
        <Comand />
        <Vibirat />
      </div>
      <div className="mainpage__znaymcard__bac">
        <Problem />
        <Znaymcard />
      </div>
      <City />
      <About />
      <Apptime />
      <div className="mainpage__comfort__back">
        <Comfort />
        <Bonusquestion />
      </div>
      <div className="mainpage__sertifcate__bac">
        <Client />
        <Seritificate />
      </div>
    </div>
  );
};

export default Mainpage;
