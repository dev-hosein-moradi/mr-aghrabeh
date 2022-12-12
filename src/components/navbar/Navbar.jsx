import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import BrandImage from "../../assets/image/brand.ico";

const Navbar = () => {
  /* use useRef to handle outSide click for sidebar menu */
  let menuRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /* click handler for aside to close sidebar when click out side */
    let handlerOutSide = (e) => {
      if (e.target.classList[1] === "close__toggler" && isOpen) {
        setIsOpen(false);
      } else if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerOutSide);

    return () => {
      document.removeEventListener("mousedown", handlerOutSide);
    };
  }, [isOpen]);

  return (
    <div className={`navbar`}>
      <div className={`nav__container ${isOpen && "low__visibility"}`}>
        <div className="brand">
          <span>
            <img alt="brand" src={BrandImage} />
          </span>
        </div>
        <div className="burger__toggler" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="navbar__links">
          <li className="navbar__link">ساعت دیجیتال</li>
          <li className="navbar__link">اپل واچ</li>
          <li className="navbar__link">ساعت عقربه ایی</li>
          <li className="navbar__link">ساعت دیواری</li>
          <li className="navbar__link">درباره ما</li>
        </ul>
      </div>

      <div
        ref={menuRef}
        className={`nav__items ${isOpen ? "isOpen" : "isClose"}`}
      >
        <div
          className={`close__toggler ${
            isOpen ? "close__toggler__animOn" : "close__toggler__animOff"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </div>
        <ul
          className={`items__container ${
            isOpen ? "items__open" : "items__close"
          }`}
        >
          <li className="side__item">ساعت دیجیتال</li>
          <li className="side__item">اپل واچ</li>
          <li className="side__item">ساعت عقربه ایی</li>
          <li className="side__item">ساعت دیواری</li>
          <li className="side__item">درباره ما</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
