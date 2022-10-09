import { instance } from "./instance";

export const profileAPI = {
  getUserInfo(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  }
}