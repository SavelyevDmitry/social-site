import { TUserAuth } from "../types/types";
import { instance } from "./instance";

export const authAPI = {
  AuthMe() {
    return instance.get('auth/me')
      .then(response => {
        return {
          resultCode: response.data.resultCode,
          user: response.data.data
        }
      })
  }
}