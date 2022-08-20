import React, { FC } from "react";

import { TUser } from "../../../../types/types";

import Spinner from "../../../../assets/spinner/Spinner";

import User from "./User/User";

type TProps = {
  users: Array<TUser> 
  isFetching: boolean
  usersInProgress: Array<number>

  setFollow: (userId: number) => void
  setUnfollow: (userId: number) => void
}

const UsersList: FC<TProps> = ({ users, isFetching, usersInProgress, setFollow, setUnfollow }) => {

  const usersElements = users.map( user => 
    <User 
      key = { user.id } 
      user = { user }
      setFollow = { setFollow }
      setUnfollow = { setUnfollow }
      usersInProgress = { usersInProgress }
    />
  )

  return (
    <>
    { isFetching 
      ? <Spinner /> 
      : <ul className="users__list"> { usersElements } </ul> 
    }
    </>
  )
}

export default UsersList;