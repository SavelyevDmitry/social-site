import { TLink } from "../../types/types";
import { TAppState } from "../store";

export const getLinks = (state: TAppState): Array<TLink> => {
  return state.navbar.links;
}