import { Dispatch } from "redux";
import { setUser } from "./auth-reducer";

const SET_IS_INITIALIZED = "/app/SET-IS-INITIALIZED";

type AppReducerStateType = {
  isInitialized: boolean
}

const initialState: AppReducerStateType = {
  isInitialized: false
}

const appReducer = (state = initialState, action: any): AppReducerStateType => {
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

type TSetIsInitialized = {
  type: typeof SET_IS_INITIALIZED
  isInitialized: boolean
}
export const setIsInitialized = (isInitialized: boolean): TSetIsInitialized => ({ type: SET_IS_INITIALIZED, isInitialized })

export const initialize = () => (dispatch: Dispatch) => {
  Promise.all([
    dispatch(setUser() as any)
  ]).then(() => {
    dispatch(setIsInitialized(true));
  })
}

export default appReducer;