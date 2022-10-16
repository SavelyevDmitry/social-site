import React, { FC } from "react"
import { TContacts } from "../../../../../types/types"

type TProps = {
  contacts: TContacts
}

const ProfileContacts: FC<TProps> = ({ contacts }) => {
  return (
    <ul className="profile-info__contacts-list"> 
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">github: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.github || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">vk: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.vk || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">facebook: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.facebook || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">instagram: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.instagram || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">twitter: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.twitter || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">website: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.website || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">youtube: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.youtube || 'не указан' } </p>
      </li>
      <li className="profile-info__contacts-item">
        <h3 className="profile-info__contacts-item-title">Основная ссылка: </h3>
        <p className="profile-info__contacts-item-desc"> { contacts.mainLink || 'не указана' } </p>
      </li>
    </ul>
  )
}

export default ProfileContacts;