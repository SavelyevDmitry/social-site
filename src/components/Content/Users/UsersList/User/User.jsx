import React from "react";
import { NavLink } from "react-router-dom";

import './User.css'
import avatarPhoto from '../../../../../assets/img/user/user-avatar.jpg'

const User = (props) => {

  const follow = () => {
    props.setFollow(props.user.id);
  }

  const unfollow = () => {
    props.setUnfollow(props.user.id);
  }

  console.log();

  return (
    
    <li className="users__item user">
      <NavLink to={`/profile/${props.user.id}`} className="user__link">
        <div className="user__avatar-wrap">
          <div className="user__avatar">
          <img src={ props.user.photos.small  ? props.user.photos.small  : avatarPhoto } alt="" className="user__photo"/>
          </div>
          <p className="user__name">
            { props.user.name }
          </p>
          <button className="btn users__followed-btn" 
            disabled = { props.usersInProgress.some(id => id === props.user.id) }
            onClick={ props.user.followed ? unfollow : follow }
          > 
            { props.user.followed ? "Unfollow" : "Follow" } 
          </button>
        </div>

        <div className="user__info-wrap">
          status: { props.user.status ? props.user.status : "Status is missing"}
        </div>
      </NavLink>
    </li>
  )
}

export default User;