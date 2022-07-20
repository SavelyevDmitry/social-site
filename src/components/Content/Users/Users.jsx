import React from "react";

import './Users.css'
import UsersPagination from "./UsersPagination/UsersPagination";
import UsersListContainer from "./UsersList/UsersListContainer";


const Users = (props) => {

  return (
    <section className="users">
      <UsersPagination />
      <UsersListContainer />
    </section>
  )
}

export default Users;