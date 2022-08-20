import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { TUser } from "../../../../../types/types";
import './User.css';

const avatarPhoto = require('../../../../../assets/img/user/user-avatar.jpg');

type TProps = {
  user: TUser
  usersInProgress: Array<number>

  setFollow: (userId: number) => void
  setUnfollow: (userId: number) => void
}

const User: FC<TProps> = ({ user, setFollow, setUnfollow, usersInProgress }) => {

  const follow = () => {
    setFollow(user.id);
  }

  const unfollow = () => {
    setUnfollow(user.id);
  }

  console.log();

  return (
    <li className="users__item user">
      <div className="user__avatar-wrap">
        <div className="user__avatar">
          <NavLink to={`/profile/${user.id}`} className="user__link">
            <img src={ user.photos.small  ? user.photos.small  : avatarPhoto } alt="" className="user__photo"/>
          </NavLink>
        </div>
        <p className="user__name">
          { user.name }
        </p>
        <button className="btn users__followed-btn" 
          disabled = { usersInProgress.some(id => id === user.id) }
          onClick={ user.followed ? unfollow : follow }
        > 
          { user.followed ? "Unfollow" : "Follow" } 
        </button>
      </div>
      <div className="user__info-wrap">
        status: { user.status ? user.status : "Status is missing"}
      </div>

    </li>
  )
}

export default User;