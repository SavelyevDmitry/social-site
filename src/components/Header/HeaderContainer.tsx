import React, { FC } from "react";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducers/auth-reducer";
import { TAppState } from "../../redux/store";
import { TUserAuth } from "../../types/types";
import Header from "./Header";
import './Header.css';
import { getUserAuth } from './../../redux/selectors/auth-selector';

type TProps = {
  user: TUserAuth
}

const HeaderContainer: FC<TProps> = ({ user }) => {

  return <Header user = { user } />
}

const mapStateToProps = (state: TAppState) => {
  return {
    user: getUserAuth(state)
  }
}

export default connect(mapStateToProps, {})(HeaderContainer);