import React from "react";
import "./wristWatch.css";

const WristWatch = () => {
  return (
    <div className="watch__container wrist-watch">
      <div className="watch__topbar">
        <hr />
        <h1>ساعت های مچی</h1>
      </div>

      <main className="watch__slider__wrapper">
        <span className="prev__slider"></span>
        <section className="box__slider"></section>
        <span className="next__slider"></span>
      </main>
    </div>
  );
};

export default WristWatch;
