import React from "react";
import "./HamBurgerMenu.scss";

interface HamBurgerMenuProps {
  showMenu: boolean;
  toggleMenu: () => void;
}
const HamBurgerMenu: React.FC<HamBurgerMenuProps> = ({
  showMenu,
  toggleMenu,
}) => {
  return (
    <div className={`btn-menu ${showMenu ? "close" : ""}`} onClick={toggleMenu}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
};

export default HamBurgerMenu;
