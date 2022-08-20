import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducers/auth-reducer";
import { TAppState } from "../../redux/store";
import { TUserAuth } from "../../types/types";
import Header from "./Header";
import './Header.css';

type TProps = {
  user: TUserAuth
  setUser: () => void
}

const HeaderContainer: FC<TProps> = ({ user, setUser }) => {

  useEffect(setUser, []);

  return <Header user = { user }/>
}

const mapStateToProps = (state: TAppState) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, { setUser })(HeaderContainer);