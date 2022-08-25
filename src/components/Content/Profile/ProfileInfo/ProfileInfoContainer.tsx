import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

import { getUserInfo } from "../../../../redux/reducers/profile-reducer";

import { TAppState } from "../../../../redux/store";
import { TProfile } from "../../../../types/types";

import ProfileInfo from "./ProfileInfo";
import { getProfile } from './../../../../redux/selectors/profile-selector';

type TProps = {
  profile: TProfile

  getUserInfo: (userId: number) => void
}

const ProfileInfoContainer: FC<TProps> = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getUserInfo(Number(userId))
  }, []);

  return <ProfileInfo profile = { props.profile } />
}

const mapStateToProps = (state:TAppState) => {

  return {
    profile: getProfile(state)
  }
}

export default connect(mapStateToProps, { getUserInfo })(ProfileInfoContainer);