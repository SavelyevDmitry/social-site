import { instance } from "./instance";

export const UsersAPI = {

  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  setFollow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data.resultCode);
  },

  setUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data.resultCode);
  }
}