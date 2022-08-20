import React from "react";
import PostsFormContainer from "./PostsForm/PostsFormContainer";
import PostsListContainer from "./PostsList/PostsListContainer";
import './ProfilePosts.css';

const ProfilePosts = () => {
  return (
    <div className="profile__posts posts">
      <PostsFormContainer />
      <PostsListContainer />
    </div>
  )
}

export default ProfilePosts;