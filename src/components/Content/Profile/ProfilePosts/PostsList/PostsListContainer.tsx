import React from "react";
import { useSelector } from "react-redux";

import PostsList from "./PostsList";

import { getPosts } from './../../../../../redux/selectors/profile-selector';

const PostsListContainer = () => {
  const posts = useSelector(getPosts);

  return <PostsList posts = { posts }/>
}

export default PostsListContainer;