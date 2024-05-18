import React from "react";
import "./NavBar.scss";
import Brand from "../Brand/Brand";
const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Brand />
        <ul className="nav-container">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#portfolio" className="nav-link ">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
