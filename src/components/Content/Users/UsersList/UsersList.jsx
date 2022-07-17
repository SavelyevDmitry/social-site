import React from "react";

const UsersList = (props) => {
  return(
    <ul className="users__list">
      { props.usersElements }
  </ul>
  )
}

export default UsersList;