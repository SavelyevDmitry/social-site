import React from "react";
import { NavLink } from "react-router-dom";
import { authAPI } from "../../api/authAPI";
import './Header.css';
import LogoSvg from "./LogoSvg/LogoSvg.jsx";

const Header = (props) => {
  debugger
  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="" className = 'header__link'>
          <LogoSvg className="header__logo"/>
          <h2 className="header__logo-title">Some-Social-Site</h2>
        </NavLink>
        <h2 className="header__title"> { props.resultCode === 0 ? props.user.login : <button>login</button> } </h2>
      </div>
    </header>
  )
}

export default Header;