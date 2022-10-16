import React, { FC } from "react";

import { TProfile } from "../../../../types/types";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

import './ProfileInfo.css';
import ProfileJob from './ProfileJob/ProfileJob';

type TProps = {
  profile: TProfile
  status: string | null
}

const ProfileInfo: FC<TProps> = ({ status, profile }) => {
  return (
    <div className="profile__info pfofile-info">
      <ProfileHeader fullName = {profile.fullName} photos = {profile.photos} aboutMe = {profile.aboutMe} status = {status}/>

      <div className="profile-info__details">

        <ProfileJob lookingForAJob = {profile.lookingForAJob} lookingForAJobDescription = {profile.lookingForAJobDescription} />

        <div className="profile-info__contacts-wrap">
          <h2 className="profile-info__contacts-title">Контакты:</h2>
          <ProfileContacts contacts={profile.contacts}/>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;