import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/authAPI";
import { setUser } from "../../redux/auth-reducer";
import Header from "./Header";
import './Header.css';

const HeaderContainer = (props) => {

  useEffect(props.setUser, []);

  return <Header {...props}/>
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, { setUser })(HeaderContainer);