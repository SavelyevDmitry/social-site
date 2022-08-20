import React from "react";

import './Users.css'
import UsersListContainer from "./UsersList/UsersListContainer";
import UsersPaginationContainer from "./UsersPagination/UsersPaginationContainer";


const Users = () => {

  return (
    <section className="users">
      <UsersPaginationContainer />
      <UsersListContainer />
    </section>
  )
}

export default Users;