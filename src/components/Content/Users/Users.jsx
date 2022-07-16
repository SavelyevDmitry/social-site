import React from "react";

import * as axios from "axios"

import User from "./User/User";
import { useEffect } from "react";

const Users = (props) => {
  const getUsers = () => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(data => props.setUsers(data.data.items));
  }

  useEffect(getUsers, []);

  const usersElements = props.users.map( user => <User key={user.id} userName = { user.name } />)

  return (
    <section className="users">
      <ul className="users__list users-list">
        { usersElements }
      </ul>
      <button className="btn users__show-more" onClick={getUsers}>Show more</button>
    </section>
  )
}

export default Users;