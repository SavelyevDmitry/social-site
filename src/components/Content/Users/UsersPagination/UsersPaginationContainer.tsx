import React, { FC } from "react";
import { connect } from "react-redux";
import { setCurrentPage, requestUsers } from "../../../../redux/reducers/users-reducer";
import { getCurrentPage, getPageSize } from "../../../../redux/selectors/users-selector";
import { TAppState } from "../../../../redux/store";
import UsersPagination from "./UsersPagination";

type TProps = {
  currentPage: number
  pageSize: number

  setCurrentPage: (newCurrentPage: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}

const UsersPaginationContainer: FC<TProps> = ({ currentPage, pageSize, setCurrentPage, requestUsers }) => {

  const changePage = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
    requestUsers(newCurrentPage, pageSize)
  }

  return <UsersPagination currentPage = { currentPage } changePage = { changePage }/>
}

const mapStateToProps = (state: TAppState) => {
  return {
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
  }
}

export default connect(mapStateToProps, { setCurrentPage, requestUsers })(UsersPaginationContainer);