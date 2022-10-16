import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from 'react-router-dom';

import { getStatus, getUserInfo } from "../../../../redux/reducers/profile-reducer";

import ProfileInfo from "./ProfileInfo";
import { getProfile, getProfileStatus } from './../../../../redux/selectors/profile-selector';
import { getUserAuth } from "../../../../redux/selectors/auth-selector";

const ProfileInfoContainer = () => {
  let { userId } = useParams();

  const profile = useSelector(getProfile);
  const user = useSelector(getUserAuth);
  const status = useSelector(getProfileStatus);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if(userId) {
      dispatch( getUserInfo(Number(userId)) as any);
      dispatch( getStatus(Number(userId)) as any );
    } else if (user.id){
      dispatch( getUserInfo(user.id) as any );
      dispatch( getStatus(user.id) as any );
    }
  }, [userId, user.id, dispatch]);

  return (
    user.id || userId 
      ? <ProfileInfo status = {status} profile = { profile } />
      : <Navigate replace to={'/login'} />
  )
}

export default ProfileInfoContainer;