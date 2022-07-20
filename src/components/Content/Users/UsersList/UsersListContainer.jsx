import axios from "axios";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { clearUsers, follow, setUsers, unfollow } from "../../../../redux/users-reducer";
import UsersList from "./UsersList";

const UsersListContainer = (props) => {
  
  const getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(data => props.setUsers(data.data.items));
    
    return function clearUsers() {
      props.clearUsers();
    }
  }

  useEffect(getUsers, []);

  return (
    <UsersList { ...props }/>
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