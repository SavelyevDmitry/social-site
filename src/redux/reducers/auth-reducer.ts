import { Dispatch } from 'redux';
import { authAPI } from '../../api/authAPI'
import { TUserAuth } from '../../types/types';

const SET_USER_AUTH = 'SET-USER-AUTH';

type AuthStateType = {
  user: TUserAuth
  isAuth: boolean
}

const initialState: AuthStateType = {
  user: {
    login: null,
    id: null,
    email: null
  },
  isAuth: false
}
  
const authReducer = (state = initialState, action: any): AuthStateType => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user
        },
        isAuth: true
      }
    default:
      return state;
  }
}

type setUserAuthActionType = {
  type: typeof SET_USER_AUTH
  user: TUserAuth
}

export const setUserAuth = (user: TUserAuth): setUserAuthActionType => (
  { type: SET_USER_AUTH, user }
)

export const setUser = () => (dispatch: Dispatch) => {
  return authAPI.AuthMe()
    .then(data => {
      if (!data.resultCode) {
        dispatch( setUserAuth(data.user) );
      }
    })
}


export default authReducer;