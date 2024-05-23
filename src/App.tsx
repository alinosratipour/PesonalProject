import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MobileNav from "./components/MobileNav/MobileNav";
import HamBurgerMenu from "./components/UILibrary/HamBurgerMenu/HamBurgerMenu";
import "./global.scss";
import IntroSection from "./components/IntroSection/InteroSection";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="main">
      <NavBar />
      <IntroSection />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <HamBurgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <MobileNav showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default App;
