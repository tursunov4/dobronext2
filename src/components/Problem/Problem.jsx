import React from "react";
import trueimg from "../../assets/Images/svg/true.svg";
import dekaimg from "../../assets/Images/webg/dekaimg.webp";
import "./problem.css";
import Image from "next/image";
const Problem = () => {
  return (
    <section className="problem">
      <div className="container">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="problem__title"
        >
          Какие проблемы решает септик?
        </h2>
        <div className="problem__wrapper">
          <div className="problem__leftbox">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="problem__innerlefbox"
            >
              <span className="problem__innertext__mob">
                {" "}
                Сбор и отведение сточных вод
              </span>
              <Image
                className="problem__inner__trueimg"
                src={trueimg}
                alt="problemimg"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="problem__innerlefbox"
            >
              <span className="problem__innertext__mob">
                {" "}
                Большие затраты на ассенизатора
              </span>
              <Image
                className="problem__inner__trueimg"
                src={trueimg}
                alt="problemimg"
              />
            </div>
          </div>
          <Image className="problem__dekaimg" src={dekaimg} alt="problemimg" />
          <div className="problem__rightbox">
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="problem__innerrightbox"
            >
              <span className="problem__innertext__mob">
                {" "}
                Плохой запах от выгребной ямы
              </span>
              <Image
                className="problem__inner__trueimg__right"
                src={trueimg}
                alt="problemimg"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="problem__innerrightbox"
            >
              <span className="problem__innertext__mob">
                {" "}
                Загрязнение питьевых источников
              </span>
              <Image
                className="problem__inner__trueimg__right"
                src={trueimg}
                alt="problemimg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
