import React from "react";

import User from "../User/User";

const UsersList = (props) => {
  const usersElements = props.users.map( user => 
    <User 
      key = { user.id } 
      user = { user }
      follow = { props.follow }
      unfollow = { props.unfollow }
    />
  )

  return(
    <ul className="users__list">
      { usersElements }
  </ul>
  )
}

export default UsersList;