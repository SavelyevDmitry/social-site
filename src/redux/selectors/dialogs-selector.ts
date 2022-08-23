import { TDialog, TMessage } from "../../types/types"
import { TAppState } from "../store"

export const getMessages = (state: TAppState): Array<TMessage> => {
  return state.dialogsPage.messages;
}

export const getNewMessageText = (state: TAppState): string => {
  return state.dialogsPage.newMessageText;
}

export const getDialogs = (state: TAppState): Array <TDialog> => {
  return state.dialogsPage.dialogs;
}
