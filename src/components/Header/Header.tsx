import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { TUserAuth } from "../../types/types";

import LogoSvg from "./LogoSvg/LogoSvg.jsx";
import './Header.css';
import { requestLogout } from "../../redux/reducers/auth-reducer";
import { useDispatch } from 'react-redux';

type TProps = {
  user: TUserAuth
  
}

const Header: FC<TProps> = ({ user }) => {
  const dispatch = useDispatch();

  const logout = (): void => {
    dispatch( requestLogout() as any );
  }

  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to="" className = 'header__link'>
          <LogoSvg className="header__logo"/>
          <h2 className="header__logo-title">Some-Social-Site</h2>
        </NavLink>
        <div className="header__login-wrap">
          <h2 className="header__title"> 
            { user.id ? user.login : <NavLink className="btn header__login" to="/login">Login</NavLink> } 
          </h2>
          { user.id && <button onClick={logout} className="btn btn--logout">Logout</button> }
        </div>
      </div>
    </header>
  )
}

export default Header;