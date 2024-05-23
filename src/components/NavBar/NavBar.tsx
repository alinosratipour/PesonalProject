import React, { useState } from "react";
import "./NavBar.scss";
import Brand from "../Brand/Brand";
import HamBurgerMenu from "../UILibrary/HamBurgerMenu/HamBurgerMenu";
import MobileNav from "../MobileNav/MobileNav";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="nav-bar">
        <Brand />
        <ul className="nav-container">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
        <HamBurgerMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </nav>
      <MobileNav showMenu={showMenu} />
    </div>
  );
};

export default NavBar;
