import React from "react";
import "./HamBurgerMenu.scss";

const HamBurgerMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div>
      <div
        className={`btn-menu ${showMenu ? "close" : ""}`}
        onClick={toggleMenu}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
    </div>
  );
};

export default HamBurgerMenu;
