import React from "react"
import { useDispatch, useSelector } from "react-redux";

import { addPost, updateNewPostText } from "../../../../../redux/reducers/profile-reducer";
import { getNewPostText } from "../../../../../redux/selectors/profile-selector";

import PostsForm from "./PostsForm";

const PostsFormContainer = () => {
  const dispatch = useDispatch();

  const newPostText = useSelector(getNewPostText);

  const addNewPost = () => {
    dispatch( addPost() );
  }

  const updatePostText = (newText: string) => {
    dispatch( updateNewPostText(newText) );
  }

  return <PostsForm addPost = { addNewPost } updateNewPostText = { updatePostText } newPostText = { newPostText }/>
}

export default PostsFormContainer;