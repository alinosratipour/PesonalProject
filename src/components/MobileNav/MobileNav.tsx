import React from "react";
import "./MobileNav.scss";

const MobileNav = ({ showMenu }) => {
  return (
    <nav className={`menu ${showMenu ? 'show' : ''}`}>
      <div className="menu-branding">
        <div className="photo"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item current">
          <a href="/" className="nav-link" id="smhome">Home</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link" id="smportfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" id="smabout">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" id="smcontact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
