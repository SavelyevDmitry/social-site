import React from "react";
import './ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile__info pfofile-info">
      <h2 className="pfofile-info__name">Дмитрий Савельев</h2>

      <div className="profile-info__description">

        <div className="pfofile-info__avatar-wrap">
          <img src="https://www.visioninfosoft.com/wp-content/uploads/2016/02/Profile.jpg" alt="avatar" className="pfofile-info__avatar"/>
        </div>
        <p className="pfofile-info__about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sed voluptatibus ducimus dolores, dolorem ratione. Tempore ratione placeat consequatur iusto deleniti maiores labore illum aspernatur perspiciatis adipisci, vel consequuntur. Et! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quidem inventore sint dolorem eveniet, quo laudantium ipsam similique officiis debitis commodi, voluptas provident repudiandae molestiae vitae, alias doloribus odit corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident itaque nulla expedita ullam cupiditate delectus temporibus sunt harum quis consequuntur nisi necessitatibus, minus autem molestiae ipsam dolorem sed exercitationem.
        </p>
        
      </div>
    </div>
  )
}

export default ProfileInfo;