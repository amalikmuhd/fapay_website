import React from "react";
import "./headerElements.css";
import Logo from "../logobuttons";
import Navbar from "../Navbar/Navbar";
import Buttons from "../buttons";

const Header = () => {
  return (
    <div className="header-Style">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
