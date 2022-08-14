import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { profileAPI } from "../../../../api/profileAPI";
import { setProfileInfo } from "../../../../redux/profile-reducer.ts";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {
  const { userId } = useParams();

  const getUSerInfo = () => {
    profileAPI.getUserInfo(userId)
      .then(data => {
        props.setProfileInfo(data);
      });
  }

  useEffect(getUSerInfo, []);

  return <ProfileInfo { ...props } />
}

const mapStateToProps = (state) => {

  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setProfileInfo })(ProfileInfoContainer);