import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { TAppState } from "../../../../redux/store";
import { TUser } from "../../../../types/types";

import { toggleUserInProgress, requestUsers, setFollow, setUnfollow } from "../../../../redux/reducers/users-reducer";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getUsersInProgress, getIsFetching } from "../../../../redux/selectors/users-selector";

import UsersList from "./UsersList";

type TProps = {
  users: Array<TUser> 
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  usersInProgress: Array<number>

  setFollow: (userId: number) => void
  setUnfollow: (userId: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
  toggleUserInProgress: (isLoading: boolean, userId: number) => void
}

const UsersListContainer: FC<TProps> = (props) => {
  const getInitialUsers = () => {
    props.requestUsers(props.currentPage, props.pageSize);
  }

  useEffect(getInitialUsers, []);

  return (
    <UsersList { ...props }/>
  )
}

const mapStateToProps = (state: TAppState) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    usersInProgress: getUsersInProgress(state),
    isFetching: getIsFetching(state),
  }
}

export default connect(mapStateToProps, 
  { toggleUserInProgress, requestUsers, setFollow, setUnfollow })(UsersListContainer);