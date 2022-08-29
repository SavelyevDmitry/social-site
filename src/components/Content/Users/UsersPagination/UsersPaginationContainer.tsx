import React, { FC } from "react";
import { connect } from "react-redux";
import Pagination from "../../../../assets/Pagination/Pagination";
import { changePage } from "../../../../redux/reducers/users-reducer";
import { getCurrentPage, getPageSize, getTotalUsersCount } from "../../../../redux/selectors/users-selector";
import { TAppState } from "../../../../redux/store";

const mapStateToProps = (state: TAppState) => {
  return {
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    portionSize: 10
  }
}

export default connect(mapStateToProps, { changePage })(Pagination);