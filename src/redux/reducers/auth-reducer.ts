import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../../api/authAPI'
import { TUserAuth } from '../../types/types';
import { TAppState } from '../store';

const SET_USER_AUTH = '/auth/SET-USER-AUTH';
const CLEAR_USER_AUTH = '/auth/CLEAR-USER';

type TResponseAuth = {
  resultCode: number
  messages: Array<string>,
  user: {
    id: number
    email: string
    login: string
  }
}

type TFieldError = {
  field: string,
  error: string
}
type TResponseLogin = {
  resultCode: number,
  messages: Array<string>,
  data: {
    userId: number
  },
  fieldsErrors: Array<TFieldError>
}

type TResponseLogout = {
  resultCode: number,
  messages: Array<string>,
  data: {}
}

type TSetUserAuth = { type: typeof SET_USER_AUTH, user: TUserAuth};
type TClearUser = { type: typeof CLEAR_USER_AUTH }

type TActions = TSetUserAuth | TClearUser;

const initialState = {
  user: {
    login: null as string | null,
    id: null as number | null,
    email: null as string | null
  },
  isAuth: false
}

type AuthStateType = typeof initialState;

const authReducer = (state = initialState, action: TActions): AuthStateType => {
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

    case CLEAR_USER_AUTH:
      return {
        ...state,
        user: {
          login: null,
          id: null,
          email: null
        },
        isAuth: false
      }

    default:
      return state;
  }
}

export const setUserAuth = (user: TUserAuth): TSetUserAuth => ({ type: SET_USER_AUTH, user });
export const clearUser = (): TClearUser => ({ type: CLEAR_USER_AUTH })

export const setUser = (): ThunkAction<Promise<void>, TAppState, unknown, TActions> => dispatch => {
  return authAPI.AuthMe()
    .then((data: TResponseAuth) => {
      if (data.resultCode === 0) {
        dispatch( setUserAuth(data.user) );
      }
    })
}

export const requestLogin = (username: string, password: string, isRememberMe: boolean): ThunkAction<Promise<void>, TAppState, unknown, TActions> => dispatch => {
  return authAPI.login(username, password, isRememberMe)
    .then((res: TResponseLogin) => {
      if(res.resultCode === 0) dispatch ( setUser() );
    })
}

export const requestLogout = (): ThunkAction<void, TAppState, unknown, TActions> => dispatch => {

  authAPI.logout()
    .then((res: TResponseLogout) => {
      if(res.resultCode === 0) dispatch( clearUser() );
    });
}

export default authReducer;