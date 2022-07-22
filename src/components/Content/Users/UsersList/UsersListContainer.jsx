import axios from "axios";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { UsersAPI } from "../../../../api/usersAPI";
import { clearUsers, follow, setUsers, unfollow } from "../../../../redux/users-reducer";
import UsersList from "./UsersList";

const UsersListContainer = (props) => {

  const setFollow = (userId) => {
    UsersAPI.setFollow(userId)
      .then(resultCode => {
        !resultCode ? props.follow(userId) : console.log(resultCode)
      })
  }

  const setUnfollow = (userId) => {
    UsersAPI.setUnfollow(userId)
      .then(resultCode => {
        !resultCode ? props.unfollow(userId) : console.log(resultCode)
      })
  }

  const getUsers = () => {
    UsersAPI.getUsers(props.currentPage, props.pageSize)
      .then(data => props.setUsers(data.items))

    return function clearUsers() {
      props.clearUsers();
    }
  }

  useEffect(getUsers, []);

  return (
    <UsersList { ...props } setFollow = { setFollow } setUnfollow = { setUnfollow }/>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

export default connect(mapStateToProps, { setUsers, clearUsers, follow, unfollow })(UsersListContainer);;