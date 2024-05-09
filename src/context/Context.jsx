"use client";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import http from "../service/axios";
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [callmodal, setCallmodal] = useState(false);
  const [endmodal, setEndmodal] = useState(false);
  const [contactdata, setContactdata] = useState({});
  const openModal = () => {
    setCallmodal(true);
  };
  const closeModal = () => {
    setCallmodal(false);
  };
  const openEndModal = () => {
    setEndmodal(true);
  };
  const closeEndModal = () => {
    setEndmodal(false);
  };
  const getContact = () => {
    http
      .get("/contactcontacts/")
      .then((res) => {
        setContactdata(res?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getContact();
  }, []);
  return (
    <Context.Provider
      value={{
        callmodal,
        openModal,
        closeModal,
        contactdata,
        openEndModal,
        closeEndModal,
        endmodal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
