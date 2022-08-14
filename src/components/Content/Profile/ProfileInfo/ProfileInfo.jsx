import React from "react";
import userPhoto from '../../../../assets/img/user/user-avatar.jpg';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
  return (
    <div className="profile__info pfofile-info">
      <h2 className="pfofile-info__name">
        { props.profile.fullName ? props.profile.fullName : "Guest"}
      </h2>

      <div className="profile-info__description">
        <div className="pfofile-info__avatar-wrap">
          <img src={ props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="avatar" className="pfofile-info__avatar"/>
        </div>

        <div className="profile-info__about-wrap">
          <h3 className="profile-info__about-title"> About me: </h3>
          <p className="pfofile-info__about">
            { props.profile.aboutMe ? props.profile.aboutMe : "This user hasn't information about himself" }
          </p>
        </div> 
      </div>

      <div className="profile-info__details">

        <div className="profile-info__looking-job-wrap">
          <h2 className="profile-info__looking-job-title">В поиске работы:</h2>
          <p className="profile-info__looking-job"> { props.profile.lookingForAJob ? 'Да' : 'Нет'} </p>
        </div>

        { props.profile.lookingForAJobDescription && <><h3 className="profile-info__looking-job-desc">Описание:</h3> <p className="profile-info__looking-job"> { props.profile.lookingForAJobDescription } </p></> }

        <div className="profile-info__contacts-wrap">
          <h2 className="profile-info__contacts-title">Контакты:</h2>
          <ul className="profile-info__contacts-list"> 
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">github: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.github || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">vk: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.vk || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">facebook: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.facebook || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">instagram: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.instagram || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">twitter: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.twitter || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">website: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.website || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">youtube: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.youtube || 'не указан' } </p>
            </li>
            <li className="profile-info__contacts-item">
              <h3 className="profile-info__contacts-item-title">Основная ссылка: </h3>
              <p className="profile-info__contacts-item-desc"> { props.profile.contacts.mainLink || 'не указана' } </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;