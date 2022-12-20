import React from "react";
import wall1 from "../../../assets/image/wall1.jpg";

const WallWatch = () => {
  return (
    <div className="watch__container wall-watch">
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
        <h1>ساعت های دیواری</h1>
      </div>

      <main className="watch__slider__wrapper">
        <span className="prev__slider">P</span>
        <section className="box__slider">
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="slider__card">
            <img alt="watch" src={wall1} />
            <div className="card__content">
              <h6 className="card__brand">Hermle Isabella</h6>
              <p className="card__detail">
                ساعت دیواری رگولاتور مکانیکی 71001030341
              </p>
              <p className="card__price">1,000,000 تومان</p>
              <button className="card__cta">افزودن به سبد خرید</button>
            </div>
          </div>
        </section>
        <span className="next__slider">N</span>
      </main>
    </div>
  );
};

export default WallWatch;
