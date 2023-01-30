import React from "react";
import "./footer.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import image from "./wall1.jpg";

const Footer = () => {
  const downloadCV = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <footer className="footer">
      {/* fast links */}
      <section className="footer__content fast-links">
        {/* link box 1 */}
        <ul className="link__box box1">
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
        </ul>

        {/* link box 2 */}
        <ul className="link__box box2">
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
        </ul>

        {/* link box 3 */}
        <ul className="link__box box3">
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
          <a href="/">
            <li>خدمات</li>
          </a>
        </ul>
      </section>

      {/* contact developer */}
      <section className="footer__content contact-developer">
        <div className="dev__card">
          <div className="card__title">
            <p>Hosein</p>
            <p>Moradi</p>
          </div>
          <div className="card__items">
            <div className="item-box">
              <a href="/">
                <p>E-mail</p>
                <FaGoogle fontSize={18} />
              </a>

              <a href="/">
                <p>Github</p>
                <FaGithub fontSize={18} />
              </a>
            </div>

            <div className="item-box">
              <a href="/">
                <p>Instagram</p>
                <FaInstagram fontSize={18} />
              </a>

              <a href="/">
                <p>Telegram</p>
                <FaTelegramPlane fontSize={18} />
              </a>
            </div>
          </div>
          <button
            onClick={() => downloadCV("http://localhost:3000/logo192.png")}
          >
            <FaFileDownload />
            Download CV
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
