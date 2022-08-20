import React, { FC } from "react";

import { TProfile } from "../../../../types/types";

import './ProfileInfo.css';
const userPhoto = require('../../../../assets/img/user/user-avatar.jpg');

type TProps = {
  profile: TProfile
}

const ProfileInfo: FC<TProps> = ({ profile }) => {
  return (
    <div className="profile__info pfofile-info">
      <h2 className="pfofile-info__name">
        { profile.fullName ? profile.fullName : "Guest"}
      </h2>

      <div className="profile-info__description">
        <div className="pfofile-info__avatar-wrap">
          <img src={ profile.photos.large ? profile.photos.large : userPhoto} alt="avatar" className="pfofile-info__avatar"/>
        </div>

        <div className="profile-info__about-wrap">
          <h3 className="profile-info__about-title"> About me: </h3>
          <p className="pfofile-info__about">
            { profile.aboutMe ? profile.aboutMe : "This user hasn't information about himself" }
          </p>
        </div> 
      </div>

      <div className="profile-info__details">

        <div className="profile-info__looking-job-wrap">
          <h2 className="profile-info__looking-job-title">В поиске работы:</h2>
          <p className="profile-info__looking-job"> { profile.lookingForAJob ? 'Да' : 'Нет'} </p>
        </div>

        { profile.lookingForAJobDescription && <><h3 className="profile-info__looking-job-desc">Описание:</h3> <p className="profile-info__looking-job"> { profile.lookingForAJobDescription } </p></> }

        <div className="profile-info__contacts-wrap">
          <h2 className="profile-info__contacts-title">Контакты:</h2>
          <ul className="profile-info__contacts-list"> 
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">github: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.github || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">vk: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.vk || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">facebook: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.facebook || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">instagram: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.instagram || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">twitter: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.twitter || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">website: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.website || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">youtube: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.youtube || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">Основная ссылка: </h3>
              <p className="profile-info__contacts-item-desc"> { profile.contacts.mainLink || 'не указана' } </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;