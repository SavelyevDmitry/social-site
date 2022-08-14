import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../../redux/profile-reducer.ts";

import { connect } from "react-redux";
import PostsForm from "./PostsForm";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    title: "Posts"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch( addPostActionCreator() );
    },

    updateNewMessageText: (newText) => {
      dispatch( updateNewPostTextActionCreator(newText) );
    }
  }
}

const PostsFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostsForm)

export default PostsFormContainer;