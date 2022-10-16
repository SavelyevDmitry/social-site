import React, { FC } from "react"

type TProps = {
  lookingForAJob: boolean | null
  lookingForAJobDescription: string | null
}

const ProfileJob: FC<TProps> = ({ lookingForAJob, lookingForAJobDescription}) => {
  return (
    <>
     <div className="profile-info__looking-job-wrap">
        <h2 className="profile-info__looking-job-title">В поиске работы:</h2>
        <p className="profile-info__looking-job"> { lookingForAJob ? 'Да' : 'Нет'} </p>
      </div>

      { lookingForAJobDescription && 
        <>
          <h3 className="profile-info__looking-job-desc">Описание:</h3> <p className="profile-info__looking-job"> { lookingForAJobDescription } </p>
        </> 
      } 
    </>
  )
}

export default ProfileJob;