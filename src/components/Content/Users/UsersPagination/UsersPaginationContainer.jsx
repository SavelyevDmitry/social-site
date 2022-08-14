import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, getUsers } from "../../../../redux/users-reducer.ts";
import UsersPagination from "./UsersPagination";

const UsersPaginationContainer = (props) => {

  const changePage = (newCurrentPage) => {
    props.setCurrentPage(newCurrentPage);
    props.getUsers(newCurrentPage, props.pageSize)
  }

  return <UsersPagination {...props} changePage = { changePage }/>
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
  }
}

export default connect(mapStateToProps, { setCurrentPage, getUsers })(UsersPaginationContainer);