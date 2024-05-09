import React, { useEffect, useState } from "react";
import startimg from "../../assets/Images/svg/star.svg";
import "../Client/client.css";
import Image from "next/image";
const Useraboutcard = ({ item }) => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const starIcons = [];
    for (let i = 0; i < item?.rate; i++) {
      starIcons.push(1);
    }
    setStars(starIcons);
  }, [item?.rate]);
  return (
    <div className="useraboutcard">
      <div className="userabout__box">
        <div className="userabout__avatarbox">
          <div className="userabout__avatar__innerbox">
            <Image
              loader={() => item?.logo}
              className="userabout__avatartimg"
              src={item?.logo}
              alt="logo"
              width={200}
              height={200}
            />
            <div className="userabout__avatar__about">
              <h4 className="userabout__name">{item?.name}</h4>
              <ul className="userabout__star__list">
                {stars.map((star, index) => {
                  return (
                    <li key={index}>
                      <Image src={startimg} alt="star" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: item?.message }}
            className="userabout__doc"
          ></p>
        </div>
        <span className="userabout__date">
          {item?.date?.slice(8, 10)}.{item?.date?.slice(5, 7)}.
          {item?.date?.slice(0, 4)}
        </span>
      </div>
    </div>
  );
};

export default Useraboutcard;
