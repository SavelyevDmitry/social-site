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
  },

  login(username, password, isRememberMe) {
    return instance.post('auth/login', {
      email: username,
      password: password,
      rememberMe: isRememberMe,
      captcha: true
    }).then(res => res.data)
  }
}