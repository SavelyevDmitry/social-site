import { TAppState } from "../store";

export const getIsInitialized = (state: TAppState): boolean => {
  return state.app.isInitialized;
}