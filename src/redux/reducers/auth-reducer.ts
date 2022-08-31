import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { authAPI } from '../../api/authAPI'
import { TUserAuth } from '../../types/types';
import { TAppState } from '../store';

const SET_USER_AUTH = '/auth/SET-USER-AUTH';

type TResponseAuth = {
  resultCode: number
  messages: Array<string>,
  user: {
    id: number
    email: string
    login: string
  }
}

type TSetUserAuth = { type: typeof SET_USER_AUTH, user: TUserAuth};

type TActions = TSetUserAuth;

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
    default:
      return state;
  }
}

export const setUserAuth = (user: TUserAuth): TSetUserAuth => ({ type: SET_USER_AUTH, user });

export const setUser = (): ThunkAction<Promise<void>, TAppState, unknown, TActions> => (dispatch) => {
  return authAPI.AuthMe()
    .then((data: TResponseAuth) => {
      if (!data.resultCode) {
        dispatch( setUserAuth(data.user) );
      }
    })
}

export default authReducer;