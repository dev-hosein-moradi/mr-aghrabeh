import React, { useEffect, useReducer, useRef } from "react";
import "./wristWatch.css";
import wrist1 from "../../../assets/image/wrist2.jpg";
import SvgArrow from "../../../assets/SVGs/SvgArrow";
import BackgroundShape from "../../BackgroundShape";

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
];

const useTilt = (active) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    let el = ref.current;

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
};

const initialState = {
  slideIndex: 0,
};

const sliesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }

  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      key={slide.title}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        backgroundImage: `url(${wrist1})`,
      }}
    >
      {/* <div className="slide__img">
        <img src={wrist1} alt="watch" />
      </div> */}
      <div className="slide__content">
        <h1>CALVIN CLAIN</h1>
        <h6>مدل X76</h6>
        <p>2,000,000 تومان</p>
        <div>افزودن به سبد</div>
      </div>
    </div>
  );
};

const WristWatch = () => {
  const [state, dispatch] = useReducer(sliesReducer, initialState);
  return (
    <div className="watch__container wrist-watch">
      <BackgroundShape />
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
        <section className="slides">
          <button onClick={() => dispatch({ type: "PREV" })}>
            <SvgArrow width={11} height={20} />
          </button>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide key={i} slide={slide} offset={offset} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>
            <SvgArrow width={11} height={20} />
          </button>
        </section>
      </main>
    </div>
  );
};

export default WristWatch;
