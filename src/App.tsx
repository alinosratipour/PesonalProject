import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import InteroSection from "../src/components/IntroSection/InteroSection"
import "./global.scss";
const App = () => {
  return (
    <div>
      <NavBar />
      <InteroSection/>
    </div>
  );
};

export default App;
