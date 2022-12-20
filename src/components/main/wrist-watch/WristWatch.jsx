import React, { useRef } from "react";
import "./wristWatch.css";
import wrist1 from "../../../assets/image/wrist2.jpg";

const WristWatch = () => {
  const carousel = useRef();

  const incrementCarousel = (delta) => {
    if (carousel.current) {
      const width = carousel.current.offsetWidth;
      carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
    }
  };

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
        <div
          className="slider__prev"
          onClick={() => incrementCarousel(-1)}
        ></div>
        <section className="box__slider" ref={carousel}>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wrist1} />
            <div className="card__content">
              <h6 className="card__brand">KALVIN KLEIN</h6>
              <p className="card__detail">ساعت مردانه Calvin Klein 25200065</p>
              <p className="card__price">2,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
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
        <div
          className="slider__next"
          onClick={() => incrementCarousel(1)}
        ></div>
      </main>
    </div>
  );
};

export default WristWatch;
