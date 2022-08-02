import { authAPI } from '../api/authAPI'

const SET_USER_AUTH = 'SET-USER-AUTH';

const initialState = {
  user: {
    login: null,
    id: null, 
    email: null
  }
}
  
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user
        }
      }
    default:
      return state;
  }
}

export const setUserAuth = (user) => (
  { type: SET_USER_AUTH, user }
)

export const setUser = (user) => {
  return (dispatch) => {
    authAPI.AuthMe()
      .then(data => {
        if (!data.resultCode) {
          dispatch( setUserAuth(data.user) );
        }
      })
  }
}
export default authReducer;