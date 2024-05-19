import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import InteroSection from "../src/components/IntroSection/InteroSection";
import "./global.scss";
import Skills from "./components/Skills/Skills";
const App = () => {
  return (
    <div>
      <NavBar />
      <InteroSection />
      <Skills />
    </div>
  );
};

export default App;
