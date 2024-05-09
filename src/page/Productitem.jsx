"use client";
import React, { useContext, useEffect, useState } from "react";
import Bonusquestion from "@/components/Bonusquestion/Bonusquestion";
import Callmodal from "@/components/Callmodal/Callmodal";
import Succedmodal from "@/components/Callmodal/Successmodal";
import { Header } from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import Model from "@/components/Model/Model";
import Productitemcard from "@/components/Productitemcard/Productitemcard";
import { Context } from "@/context/Context";
import http from "@/service/axios";
const Productitem = ({ params }) => {
  const [data, setData] = useState({});
  const { callmodal, closeModal, endmodal, closeEndModal } =
    useContext(Context);

  useEffect(() => {
    const getData = () => {
      http
        .get(`/productsproduct-detail/${params?.id}/`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <div>
      <Modal isOpen={callmodal} onClose={closeModal}>
        <Callmodal onClose={closeModal} />
      </Modal>
      <Modal isOpen={endmodal} onClose={closeEndModal}>
        <Succedmodal onClose={closeEndModal} />
      </Modal>
      <Header />
      <Productitemcard data={data} />
      <Model model={data?.models} />
      <Bonusquestion />
    </div>
  );
};

export default Productitem;
