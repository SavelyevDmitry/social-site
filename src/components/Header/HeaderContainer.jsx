import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/authAPI";
import { setUserAuth } from "../../redux/auth-reducer";
import Header from "./Header";
import './Header.css';

const HeaderContainer = (props) => {

  const authMe = () => {
    authAPI.AuthMe()
    .then(data => {
      if (!data.resultCode) {
        props.setUserAuth(data.user);
      }
    })
  }

  useEffect(authMe, []);

  return <Header {...props}/>
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, { setUserAuth })(HeaderContainer);