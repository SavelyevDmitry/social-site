import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';

import { getUserInfo } from "../../../../redux/reducers/profile-reducer";

import { TAppState } from "../../../../redux/store";
import { TProfile, TUserAuth } from "../../../../types/types";

import ProfileInfo from "./ProfileInfo";
import { getProfile } from './../../../../redux/selectors/profile-selector';
import { getUserAuth } from "../../../../redux/selectors/auth-selector";

type TProps = {
  profile: TProfile
  user: TUserAuth

  getUserInfo: (userId: number) => void
}

const ProfileInfoContainer: FC<TProps> = ({ profile, user, getUserInfo }) => {
  let { userId } = useParams();

  useEffect(() => {
    if(userId) {
      getUserInfo(Number(userId))
    } else if (user.id){
      getUserInfo(user.id)
    }
  }, [userId]);

  return (
    user.id || userId 
      ? <ProfileInfo profile = { profile } />
      : <Navigate replace to={'/login'} />
  )
}

const mapStateToProps = (state:TAppState) => {

  return {
    profile: getProfile(state),
    user: getUserAuth(state)
  }
}

export default connect(mapStateToProps, { getUserInfo })(ProfileInfoContainer);