import React, { useEffect } from "react";
import SvgTeamWork from "../../../assets/SVGs/SvgTeamWork";
import SvgIran from "../../../assets/SVGs/SvgIran";
import "./awards.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Awards = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="awards">
      <div className="award__topbar">
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
        <h1 data-aos="fade-up">جوایز و افتخارات</h1>
      </div>
      {/* first award */}
      <section className="award__content award1">
        <div className="award__image" data-aos="fade-up">
          <SvgTeamWork width={100} height={100} />
        </div>

        <div className="award__text">
          <h3 data-aos="fade-up">برترین تولید کننده ساعت در سال 1400</h3>
          <h6 data-aos="fade-up">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </h6>
        </div>
        {/* The number of shops in the competition  */}
        <div className="award__rate">
          <span data-aos="fade-up">
            <p>تعداد تیم های حاضر در مسابقه</p>
            <p>20</p>
          </span>

          <span data-aos="fade-up">
            <p>تعداد عناوین کسب شده</p>
            <p>8</p>
          </span>

          <span data-aos="fade-up">
            <p>رتبه در مسابقه</p>
            <p>1</p>
          </span>
        </div>
      </section>

      {/* second award */}
      <section className="award__content award2">
        <div className="award__text">
          <h3 data-aos="fade-up">برترین کار آفرین خاورمیانه</h3>
          <h6 data-aos="fade-up">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </h6>
        </div>
        {/* The number of shops in the competition  */}
        <div className="award__rate">
          <span data-aos="fade-up">
            <p>تعداد نیروی کار در 1401</p>
            <p>2000</p>
          </span>

          <span data-aos="fade-up">
            <p>تعداد نیروی کار در 1400</p>
            <p>1500</p>
          </span>

          <span data-aos="fade-up">
            <p>تعداد نیروی کار در 1399</p>
            <p>1000</p>
          </span>
        </div>
      </section>
      {/* third award */}
      <section className="award__content award3">
        <div className="award__text">
          <h3 data-aos="fade-up">
            دارای نمایندگی های رسمی در تمام کلان شهر های ایران
          </h3>
        </div>

        <div className="award__image" data-aos="fade-up">
          <SvgIran width={200} height={200} />
        </div>
      </section>
    </main>
  );
};

export default Awards;
