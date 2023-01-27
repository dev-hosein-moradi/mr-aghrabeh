import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/main/home/Home";
import WallWatch from "./components/main/wall-watch/WallWatch";
import WristWatch from "./components/main/wrist-watch/WristWatch";
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
    <div className="App">
      <Navbar />
      <Home />
      <WristWatch />
      <WallWatch />
    </div>
  );
};

export default App;
