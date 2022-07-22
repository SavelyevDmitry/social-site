import React from "react";

import './User.css'
import avatarPhoto from './user-avatar.jpg'

const User = (props) => {

  const follow = () => {
    props.setFollow(props.user.id)
  }

  const unfollow = () => {
    props.setUnfollow(props.user.id);
  }

  return (
    <li className="users__item user">

      <div className="user__avatar-wrap">
        <div className="user__avatar">
         <img src={ props.user.photos.small  ? props.user.photos.small  : avatarPhoto } alt="" className="user__photo"/>
        </div>
        <p className="user__name">
          { props.user.name }
        </p>
        <button className="btn users__followed-btn" onClick={ props.user.followed ? unfollow : follow }> { props.user.followed ? "Unfollow" : "Follow" } </button>
      </div>

      <div className="user__info-wrap">
        status: { props.user.status ? props.user.status : "Status is missing"}
      </div>
    </li>
  )
}

export default User;