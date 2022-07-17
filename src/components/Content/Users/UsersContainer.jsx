import React from "react";
import { connect } from "react-redux";
import { clearUsersActionCreator, followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../../redux/users-reducer";

import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch( setUsersActionCreator(users) );
    },

    clearUsers: () => {
      dispatch( clearUsersActionCreator() );
    },

    follow: (userId) => {
      dispatch( followActionCreator(userId) );
    },

    unfollow: (userId) => {
      dispatch( unfollowActionCreator(userId) );
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;