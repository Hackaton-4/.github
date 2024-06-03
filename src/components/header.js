import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} className="header__image_logo" alt="logo" />
        </div>
      </header>
    </>
  );
}

export default Header;
