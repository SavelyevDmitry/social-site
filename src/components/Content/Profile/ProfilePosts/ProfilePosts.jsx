import React from "react";
import PostsForm from "./PostsForm/PostsForm";
import PostsList from "./PostsList/PostsList";
import './ProfilePosts.css';

const ProfilePosts = (props) => {
  return (
    <div className="profile__posts posts">
      <PostsForm 
        title = "Posts"
        addNewPost = { props.addNewPost } 
        updateNewMessageText = { props.updateNewMessageText }
        newPostText = { props.newPostText }  
      />
      <PostsList posts = { props.posts }/>
    </div>
  )
}

export default ProfilePosts;