import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import LogoSvg from "./LogoSvg/LogoSvg.jsx";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="">
          <LogoSvg className="header__logo"/>
        </NavLink>
        <h2 className="header__title">Header</h2>
      </div>
    </header>
  )
}

export default Header;