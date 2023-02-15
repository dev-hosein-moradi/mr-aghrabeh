import React, { useEffect } from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <footer className="footer">
      {/* fast links */}
      <section className="footer__content fast-links">
        {/* link box 1 */}
        <ul className="link__box box1">
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
        </ul>

        {/* link box 2 */}
        <ul className="link__box box2">
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
        </ul>

        {/* link box 3 */}
        <ul className="link__box box3">
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
          <a
            href="/"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
          >
            <li>خدمات</li>
          </a>
        </ul>
      </section>

      {/* contact developer */}
      <section className="footer__content contact-developer">
        <div
          className="dev__card"
          data-aos="zoom-in-down"
          data-aos-offset="100"
          data-aos-duration="1000"
        >
          <div className="card__title">
            <p>Hosein</p>
            <p>Moradi</p>
          </div>
          <div className="card__items">
            <div className="item-box">
              <a href="/">
                <p>Twitter</p>
                <FaTwitter fontSize={18} />
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
            onClick={() =>
              downloadCV(
                "https://mr-aghrabeh.vercel.app/Hosein-moradi-resume.pdf"
              )
            }
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
