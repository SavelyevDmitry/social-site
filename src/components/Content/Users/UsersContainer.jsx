import React from "react";
import { connect } from "react-redux";
import { setUsersActionCreator } from "../../../redux/users-reducer";

import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch( setUsersActionCreator(users) );
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;