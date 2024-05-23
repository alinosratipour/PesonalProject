import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

import "./global.scss";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MobileNav from "./components/MobileNav/MobileNav";
import HamBurgerMenu from "./components/UILibrary/HamBurgerMenu/HamBurgerMenu";
import IntroSection from "./components/IntroSection/InteroSection";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="main">
      <HamBurgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <NavBar toggleMenu={toggleMenu} />
      <MobileNav showMenu={showMenu} />
      <IntroSection />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default App;
