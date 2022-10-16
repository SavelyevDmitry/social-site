import React, { FC, useState } from "react"
import { TPhotos } from "../../../../../types/types"

const userPhoto = require('../../../../../assets/img/user/user-avatar.jpg');

type TProps = {
  fullName: string | null
  photos: TPhotos
  aboutMe: string | null
  status: string
}

const ProfileHeader: FC<TProps> = ({fullName, photos, status, aboutMe}) => {
  const [statusEditMode, setStatusEditMode] = useState(false);

  return (
  <>
    <h2 className="pfofile-info__name">
      { fullName ? fullName : "Guest"}
    </h2>

    <div className="profile-info__description">
      <div className="pfofile-info__avatar-wrap">
        <img src={ photos.large ? photos.large : userPhoto} alt="avatar" className="pfofile-info__avatar"/>
      </div>

      <div className="profile-info__about-wrap">
        <h3 className="profile-info__title"> Status: </h3>
        { statusEditMode 
          ? <input type="text" autoFocus = {true} onBlur={ () => {setStatusEditMode(false)} }/>
          : <p className="pfofile-info__status" onDoubleClick={ () => { setStatusEditMode(true) } }>
              { status ? status : "This user hasn't status" }
            </p>
        }
        
        
        <h3 className="profile-info__title"> About me: </h3>
        <p className="pfofile-info__about">
          { aboutMe ? aboutMe : "This user hasn't information about himself" }
        </p>
      </div> 
    </div>
  </>
  )
}

export default ProfileHeader;