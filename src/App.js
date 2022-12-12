import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  // initialze and set visual height
  const [height, setHeight] = useState(visualViewport.height);
  document.documentElement.style.setProperty("--visual-height", `${height}px`);

  // func for modify height in css var
  const handleHeight = () => {
    document.documentElement.style.setProperty(
      "--visual-height",
      `${height}px`
    );
    setHeight(visualViewport.height);
  };

  // get and update visual height
  useEffect(() => {
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
