import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import './Profile.css'

const Profile = (props) => {
  return (
    <section className="profile">
      <ProfileInfo />
      <ProfilePosts />
    </section>
  )
}

export default Profile;