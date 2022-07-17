import React from "react";
import { useEffect } from "react";
import * as axios from "axios"

import User from "./User/User";
import './Users.css'
import UsersPagination from "./UsersPagination/UsersPagination";
import UsersList from "./UsersList/UsersList";


const Users = (props) => {

  const getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(data => props.setUsers(data.data.items));
    
    return function clearUsers() {
      props.clearUsers();
    }
  }

  useEffect(getUsers, []);

  const usersElements = props.users.map( user => 
    <User 
      key = { user.id } 
      user = { user }
      follow = { props.follow }
      unfollow = { props.unfollow }
    />
  )

  return (
    <section className="users">
      <UsersPagination />
      <UsersList usersElements = { usersElements }/>
    </section>
  )
}

export default Users;