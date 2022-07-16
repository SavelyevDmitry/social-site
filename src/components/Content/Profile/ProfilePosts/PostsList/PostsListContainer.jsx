import React from "react";

import { connect } from "react-redux";
import PostsList from "./PostsList";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (state) => {
  return {
    
  }
}

const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList)

export default PostsListContainer;