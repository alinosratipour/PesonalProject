import React, { useState } from "react";
import "./MobileNav.scss";

const MobileNav = ({ showMenu, toggleMenu }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
    toggleMenu(); // Close the menu
  };

  return (
    <nav className={`menu ${showMenu ? 'show' : ''}`}>
      <div className={`menu-branding ${showMenu ? 'show' : ''}`}>
        <div className="photo"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item">
          <a
            href="/"
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            id="smhome"
            onClick={() => handleSetActive("home")}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            className={`nav-link ${activeLink === "portfolio" ? "active" : ""}`}
            id="smportfolio"
            onClick={() => handleSetActive("portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            className={`nav-link ${activeLink === "about" ? "active" : ""}`}
            id="smabout"
            onClick={() => handleSetActive("about")}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
            id="smcontact"
            onClick={() => handleSetActive("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
