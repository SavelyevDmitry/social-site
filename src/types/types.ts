export type TUser = {
  followed: boolean
  id: number
  name: string
  photos: {
    small: string 
    large: string
  }
  status: string | null
  uniqueUrlName: string | null
}

export type TPost = {
  id: number
  message: string
  who: string
  likeCounter: number
}

export type TContacts = {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink: string | null
}

export type TPhotos = {
  small: string | null
  large: string | null
}

export type TProfile = {
  userId: number | null
  lookingForAJob: boolean | null
  lookingForAJobDescription: string | null
  fullName: string | null
  contacts: TContacts
  photos: TPhotos
  aboutMe: string | null
}

export type TDialog = {
  id: number
  personName: string
}

export type TMessage = {
  id: number,
  body: string
}

export type TLink = {
  id: number
  text: string
  link: string
}

export type TUserAuth = {
  login: string | null
  id: number | null
  email: string | null
}