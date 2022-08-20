import React from "react";

import { connect } from "react-redux";
import { TAppState } from "../../../../../redux/store";
import PostsList from "./PostsList";

const mapStateToProps = (state: TAppState) => {
  return {
    posts: state.profilePage.posts,
  }
}

export default connect(mapStateToProps, {})(PostsList);