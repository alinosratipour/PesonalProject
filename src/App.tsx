import React from "react";
import NavBar from "./components/NavBar/NavBar";
import InteroSection from "./components/IntroSection/InteroSection";
import "./global.scss";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="main">
      <NavBar />
      <InteroSection />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default App;
