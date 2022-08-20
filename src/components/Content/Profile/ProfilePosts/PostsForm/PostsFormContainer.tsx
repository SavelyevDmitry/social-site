import React from "react";
import { connect } from "react-redux";

import { TAppState } from "../../../../../redux/store";

import { addPost, updateNewPostText } from "../../../../../redux/reducers/profile-reducer";

import PostsForm from "./PostsForm";

const mapStateToProps = (state: TAppState) => {
  return {
    newPostText: state.profilePage.newPostText,
  }
}

export default connect(mapStateToProps, { addPost, updateNewPostText })(PostsForm);