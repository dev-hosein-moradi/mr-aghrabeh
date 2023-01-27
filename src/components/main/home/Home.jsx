import React from "react";
import SvgDownload from "../../../assets/SVGs/SvgDownload";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero__img">{/* <img src={hero} alt="hero" /> */}</div>
      <section className="hero">
        <div className="hero__text">
          <h1>مستر عقربه</h1>
          <h4>معتبر ترین عرضه کننده ساعت های برند و خاص.</h4>
          <h4>شیک ترین ساعت ها را ما به شما می دهیم</h4>
          <p>با مستر عقربه زمان را سپری کن</p>
        </div>
        <div className="hero__cta">
          <button>
            دانلود
            <SvgDownload width={17} height={17} />
          </button>
          <button>مشاهده محصولات</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
