import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setUsers } from "../../../../redux/users-reducer";
import UsersPagination from "./UsersPagination";

const UsersPaginationContainer = (props) => {
  return <UsersPagination {...props} />
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
  }
}

export default connect(mapStateToProps, { setCurrentPage, setUsers })(UsersPaginationContainer);