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
    </div>
  )
}

export default ProfileInfo;