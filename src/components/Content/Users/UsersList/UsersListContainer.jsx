import React, { useEffect } from "react";

import { connect } from "react-redux";
import { toggleUserInProgress, getUsers, setFollow, setUnfollow } from "../../../../redux/users-reducer";
import UsersList from "./UsersList";

const UsersListContainer = (props) => {
  const getInitialUsers = () => {
    props.getUsers(props.currentPage, props.pageSize);
  }

  useEffect(getInitialUsers, []);

  return (
    <UsersList { ...props } setFollow = { props.setFollow } setUnfollow = { props.setUnfollow }/>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    usersInProgress: state.usersPage.usersInProgress,
    isLoading: state.usersPage.isLoading
  }
}

export default connect(mapStateToProps, 
  { toggleUserInProgress, 
    getUsers, setFollow, setUnfollow })(UsersListContainer);