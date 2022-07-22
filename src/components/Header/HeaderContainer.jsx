import React, { useEffect } from "react";
import { authAPI } from "../../api/authAPI";
import Header from "./Header";
import './Header.css';

const HeaderContainer = (props) => {
  let resultCode = null;
  let user = null;

  const authMe = () => {
    authAPI.AuthMe()
    .then(data => {
      resultCode = data.resultCode;
      user = data.user;
    })
  }

  useEffect(authMe, []);

  return <Header user = { user } resultCode = { resultCode }/>
}

export default HeaderContainer;