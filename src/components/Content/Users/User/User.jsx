import React from "react";

const User = (props) => {
  return (
    <li className="users__list users-list">
      { props.userName }
    </li>
  )
}

export default User;