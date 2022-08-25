import { TUserAuth } from "../../types/types"
import { TAppState } from "../store"

export const getUserAuth = (state: TAppState): TUserAuth => {
  return state.auth.user;
}

export const getIsUserAuth = (state: TAppState): boolean => {
  return state.auth.isAuth;
}