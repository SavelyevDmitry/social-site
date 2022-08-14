import { authAPI } from '../api/authAPI'

const SET_USER_AUTH = 'SET-USER-AUTH';

type UserType = {
  login: string | null
  id: number | null
  email: string | null
}

type AuthStateType = {
  user: UserType
}

const initialState: AuthStateType = {
  user: {
    login: null,
    id: null,
    email: null
  }
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
      }
    default:
      return state;
  }
}

type setUserAuthActionType = {
  type: typeof SET_USER_AUTH
  user: UserType
}

export const setUserAuth = (user: UserType): setUserAuthActionType => (
  { type: SET_USER_AUTH, user }
)

export const setUser = () => {
  return (dispatch: any) => {
    authAPI.AuthMe()
      .then(data => {
        if (!data.resultCode) {
          dispatch( setUserAuth(data.user) );
        }
      })
  }
}

export default authReducer;