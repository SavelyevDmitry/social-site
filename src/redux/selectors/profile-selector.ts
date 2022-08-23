import { TPost, TProfile } from "../../types/types"
import { TAppState } from "../store"

export const getPosts = (state: TAppState): Array<TPost> => {
  return state.profilePage.posts;
}

export const getNewPostText = (state: TAppState): string => {
  return state.profilePage.newPostText;
}

export const getProfile = (state: TAppState): TProfile => {
  return state.profilePage.profile;
}