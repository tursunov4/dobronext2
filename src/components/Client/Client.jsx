"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomVideoPlayer from "../Costumvideo/Costumvideo";
import Caruselbtn from "../Couruselbuttuns/Caruselbtn";
import "./client.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Youtubemodal from "../Youtubemodal/Youtubemodal";
import Usercarusel from "../Usercarusel/Usercarusel";
import http from "../../service/axios";
const Client = () => {
  const swiperRef = useRef(null);
  const [client, setClient] = useState([]);
  const [videos, setVideos] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const handleOpen = (id) => {
    setId(id);
    setModal(true);
  };
  const prevHandler = () => {
    swiperRef.current.slidePrev();
  };
  const nextHandler = () => {
    swiperRef.current.slideNext();
  };
  const pagination = {
    el: ".swiper-custom-clientpagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };
  const getClient = () => {
    http
      .get("/clientclients/")
      .then((res) => {
        setClient(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getVideos = () => {
    http.get("/clientvideos/").then((res) => {
      setVideos(res?.data);
    });
  };
  useEffect(() => {
    getClient();
    getVideos();
  }, []);
  return (
    <section className="client">
      <Youtubemodal modal={modal} setModal={setModal}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          style={{
            background: "black",
            margin: "0 auto",
            borderRadius: "10px",
          }}
          width="100%"
          height="500px"
        />
      </Youtubemodal>
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="client__title"
        >
          {" "}
          <span className="client__titlebold">Что говорят</span> наши клиенты?
        </h2>
        <div className="client__carusel">
          <div className="client__prevbutton">
            <Caruselbtn
              handleClick={prevHandler}
              styleadd={"caruselback"}
              type={"prev"}
            />
          </div>
          <div className="client__nextbutton">
            <Caruselbtn handleClick={nextHandler} styleadd={"caruselback"} />
          </div>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="client__swiper"
            spaceBetween={24}
            loop
            breakpoints={{
              630: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {videos?.map((item, index) => (
              <SwiperSlide key={index} className="client__video-slide">
                {item.video != null ? (
                  <CustomVideoPlayer url={item?.video} />
                ) : (
                  <div
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => handleOpen(item?.get_video_id)}
                  >
                    <iframe
                      style={{ pointerEvents: "none" }}
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${item?.get_video_id}`}
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-custom-clientpagination" />
        <Usercarusel data={client} />
      </div>
    </section>
  );
};

export default Client;
