import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import InteroSection from "../src/components/IntroSection/InteroSection";
import "./global.scss";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <NavBar />
      <InteroSection />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
