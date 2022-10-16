import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';

import { getStatus, getUserInfo } from "../../../../redux/reducers/profile-reducer";

import { TAppState } from "../../../../redux/store";
import { TProfile, TUserAuth } from "../../../../types/types";

import ProfileInfo from "./ProfileInfo";
import { getProfile, getProfileStatus } from './../../../../redux/selectors/profile-selector';
import { getUserAuth } from "../../../../redux/selectors/auth-selector";

type TProps = {
  profile: TProfile
  user: TUserAuth
  status: string | null

  getStatus: (userId: number) => void
  getUserInfo: (userId: number) => void
}

const ProfileInfoContainer: FC<TProps> = ({ status, profile, user, getStatus, getUserInfo }) => {
  let { userId } = useParams();
  
  useEffect(() => {
    if(userId) {
      getUserInfo(Number(userId));
      getStatus(Number(userId));
    } else if (user.id){
      getUserInfo(user.id);
      getStatus(user.id);
    }
  }, [userId]);

  return (
    user.id || userId 
      ? <ProfileInfo status = {status} profile = { profile } />
      : <Navigate replace to={'/login'} />
  )
}

const mapStateToProps = (state:TAppState) => {

  return {
    profile: getProfile(state),
    user: getUserAuth(state),
    status: getProfileStatus(state)
  }
}

export default connect(mapStateToProps, { getStatus, getUserInfo })(ProfileInfoContainer);