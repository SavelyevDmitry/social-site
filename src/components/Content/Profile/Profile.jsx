import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import './Profile.css'

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <ProfilePosts 
        posts = { props.state.posts } 
        addNewPost={props.addNewPost}
        newPostText = { props.state.newPostText }
        updateNewMessageText = { props.updateNewMessageText }
      />
    </div>
  )
}

export default Profile;