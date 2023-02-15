import React, { useEffect } from "react";
import "./introducing.css";
import introImg1 from "../../../assets/image/intro-image1.jpg";
import introImg2 from "../../../assets/image/intro-image2.jpg";
import introImg3 from "../../../assets/image/intro-image3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Introducing = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="introduce">
      <div className="intro__topbar">
        <hr
          data-aos="fade-up"
          style={{
            width: "98%",
            height: "1px",
            borderWidth: "0",
            background: "#7F8487",
            margin: "0 auto",
          }}
        />
        <h1 data-aos="fade-down">معرفی محصولات</h1>
      </div>
      {/* title 1 for watchs */}
      <section className="introduce__watch container">
        <div className="intro__text box1">
          <h3 data-aos="zoom-in-up">شیک ترین ساعت های جهان</h3>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            مستر عقربه با داشتن کامل ترین کلکسیون ساعت, معتبر ترین مرکز فروش
            ساعت و زیورآلات است
          </p>
        </div>

        <div className="intro__img top-img" data-aos="fade-up-right">
          <img loading="lazy" src={introImg1} alt="" />
        </div>

        <div className="intro__text box2">
          <h3 data-aos="zoom-in-up">متناسب با هر پوششی</h3>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            در فروشگاه ما شما می توانید هر سبک ساعتی را پیدا کنید مطابق با پوشش
            و نیاز خود
          </p>
        </div>

        <div className="intro__img middle-img" data-aos="fade-up-left">
          <img loading="lazy" src={introImg2} alt="" />
        </div>
      </section>

      {/* title 2 for bracelets */}
      <section className="introduce__bracelet container">
        <div className="intro__text box3">
          <h3 data-aos="zoom-in-up">دستبند های خاص و جذاب</h3>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            دستنبد های خاص و در هر سبکی که بخواهید در مجموعه ما موجود است. که می
            توانید چشم خواهرشوهر خود را در بیاورید
          </p>
        </div>

        <div className="intro__img bottom-img" data-aos="fade-up-right">
          <img loading="lazy" src={introImg3} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Introducing;
