import { ThunkAction } from "redux-thunk";
import { TAppState } from "../store";
import { setUser } from "./auth-reducer";

const SET_IS_INITIALIZED = "/app/SET-IS-INITIALIZED";

type TSetIsInitialized = { type: typeof SET_IS_INITIALIZED, isInitialized: boolean }

type TActions = TSetIsInitialized;

const initialState = {
  isInitialized: false
}

type AppReducerStateType = typeof initialState;

const appReducer = (state = initialState, action: TActions): AppReducerStateType => {
  switch (action.type) {

    case SET_IS_INITIALIZED:
      return {
        ...state,
        isInitialized: action.isInitialized
      }

    default:
      return state;
  }
}

export const setIsInitialized = (isInitialized: boolean): TSetIsInitialized => ({ type: SET_IS_INITIALIZED, isInitialized })

export const initialize = (): ThunkAction<void, TAppState, unknown, TActions> => (dispatch) => {
  Promise.all([
    dispatch( setUser() )
  ]).then(() => {
    dispatch( setIsInitialized(true) );
  })
}

export default appReducer;