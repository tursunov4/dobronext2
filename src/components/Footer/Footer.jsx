"use client";
import siteLogo from "../../assets/Images/svg/sitelogo.svg";
import Image from "next/image";
import footertreeimg from "../../assets/Images/webg/footertree.webp";
import { useRouter } from "next/navigation";
import "./footer.css";
import Link from "next/link";
const Footer = () => {
  const roter = useRouter();
  return (
    <footer className="footer">
      <div className="footer__bacimg">
        <Image src={footertreeimg} alt="Sitelogo" />
      </div>
      <div className="container">
        <div className="footer__mainwrapper">
          <Link href={"/"} className="footer__logo">
            <Image
              width={306}
              className="footer__logo__img"
              src={siteLogo}
              alt="sitelogo"
            />
          </Link>
          <div className="footer__navlist">
            <a
              onClick={() => roter.push("/#usluga")}
              className="footer__navlist__item"
              style={{ cursor: "pointer" }}
            >
              Услуги
            </a>
            <a
              onClick={() => roter.push("/#catalog")}
              className="footer__navlist__item"
              style={{ cursor: "pointer" }}
            >
              Каталог
            </a>
            <a
              onClick={() => roter.push("/#about")}
              className="footer__navlist__item"
              style={{ cursor: "pointer" }}
            >
              О нас
            </a>
            <a
              onClick={() => roter.push("/#product")}
              className="footer__navlist__item"
              style={{ cursor: "pointer" }}
            >
              Проекты
            </a>
            <a
              onClick={() => roter.push("/#contact")}
              style={{ cursor: "pointer" }}
              className="footer__navlist__item"
            >
              Контакты
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom__doc">2024 © Добро септик</p>
          <p className="footer__bottom__politika">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
