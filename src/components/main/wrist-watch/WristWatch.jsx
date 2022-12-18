import React from "react";
import "./wristWatch.css";
import  wrist1  from "../../../assets/image/wrist3.jpg";

const WristWatch = () => {
  return (
    <div className="watch__container wrist-watch">
      <div className="watch__topbar">
        <hr
          style={{
            width: "98%",
            height: "1px",
            borderWidth: "0",
            background: "#7F8487",
            margin: "0 auto",
          }}
        />
        <h1>ساعت های مچی</h1>
      </div>

      <main className="watch__slider__wrapper">
        <span className="prev__slider">P</span>
        <section className="box__slider">
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
        </section>
        <span className="next__slider">N</span>
      </main>
    </div>
  );
};

export default WristWatch;
