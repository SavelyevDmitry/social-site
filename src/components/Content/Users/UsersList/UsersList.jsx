import React from "react";
import Spinner from "../../../../assets/spinner/Spinner";

import User from "./User/User";

const UsersList = (props) => {

  const usersElements = props.users.map( user => 
    <User 
      key = { user.id } 
      user = { user }
      setFollow = { props.setFollow }
      setUnfollow = { props.setUnfollow }
      usersInProgress = { props.usersInProgress }
    />
  )

  return (
    <>
    { props.isLoading 
      ? <Spinner /> 
      : <ul className="users__list"> { usersElements } </ul> 
    }
    </>
  )
}

export default UsersList;