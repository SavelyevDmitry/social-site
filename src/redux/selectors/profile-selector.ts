import { TPost, TProfile } from "../../types/types"
import { TAppState } from "../store"

export const getPosts = (state: TAppState): Array<TPost> => state.profilePage.posts;
export const getNewPostText = (state: TAppState): string => state.profilePage.newPostText;
export const getProfile = (state: TAppState): TProfile => state.profilePage.profile;
export const getProfileStatus = (state: TAppState): string | null => state.profilePage.status;