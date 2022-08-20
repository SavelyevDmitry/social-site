import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

import { profileAPI } from "../../../../api/profileAPI";
import { setProfileInfo } from "../../../../redux/reducers/profile-reducer";

import { TAppState } from "../../../../redux/store";
import { TProfile } from "../../../../types/types";

import ProfileInfo from "./ProfileInfo";

type TProps = {
  profile: TProfile

  setProfileInfo: (profile: TProfile) => void
}

const ProfileInfoContainer: FC<TProps> = (props) => {
  const { userId } = useParams();

  const getUSerInfo = () => {
    profileAPI.getUserInfo(userId)
      .then(data => {
        props.setProfileInfo(data);
      });
  }

  useEffect(getUSerInfo, []);

  return <ProfileInfo profile = { props.profile } />
}

const mapStateToProps = (state:TAppState) => {

  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { setProfileInfo })(ProfileInfoContainer);