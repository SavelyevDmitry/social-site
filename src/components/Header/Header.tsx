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
        <div>
          <h2 className="header__title"> 
            { user.id ? user.login : <NavLink to="/login">login</NavLink> } 
          </h2>
          { user.id && <button onClick={logout}>Logout</button> }
        </div>
      </div>
    </header>
  )
}

export default Header;