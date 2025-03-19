import React from "react";
import "./BurgerMenu.css";

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <label className="burger" htmlFor="burger" onClick={() => { setIsOpen( (p) => !p ) }}>
        <span style={isOpen ? {transform: 'rotate(45deg)', top: '0px', left: '5px'} : {}} />
        <span style={isOpen ? { width: "0%", opacity: "0" } : {}} />
        <span style={isOpen ? {transform: 'rotate(-45deg)', top: '28px', left: '5px'} : {}} />
      </label>
    </div>
  );
};

export default Burger;
