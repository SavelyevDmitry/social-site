import React from "react";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import './Profile.css'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = () => {
  return (
    <section className="profile">
      <ProfileInfoContainer />
      <ProfilePosts />
    </section>
  )
}

export default Profile;