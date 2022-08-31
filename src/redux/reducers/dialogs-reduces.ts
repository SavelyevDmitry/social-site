import { TDialog, TMessage } from "../../types/types";

const SEND_MESSAGE = '/dialogs/SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = '/dislogs/UPDATE-NEW-MESSAGE-TEXT';

type TSendMessage = { type: typeof SEND_MESSAGE }
type TUpdateNewMessageText = { type: typeof UPDATE_NEW_MESSAGE_TEXT, newText: string}

type TActions = TSendMessage | TUpdateNewMessageText;

const initialState = {
  dialogs: [
    { id: 1, personName: "Dmitry Ivanov" },
    { id: 2, personName: "Marina Petrova" },
    { id: 3, personName: "Ivan Dmitriev" },
    { id: 4, personName: "Kirill Akimov" },
    { id: 5, personName: "Sergey Novikov" },
  ] as Array<TDialog>,
  messages: [
    { id: 1, body: "Hi!" },
    { id: 2, body: "How are you?" },
    { id: 3, body: "I'm Fine!" },
    { id: 4, body: "Thank you" },
  ] as Array<TMessage>,
  newMessageText: '' as string,  
}

type DialogsStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: TActions): DialogsStateType => {

  switch (action.type) {

    // Отправка сообщения
    case SEND_MESSAGE:

      const newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        body: state.newMessageText
      }

      return {
        ...state,
        messages: [ ...state.messages, newMessage],
        newMessageText: ''
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };

    default:
      return state;
  }
}

export const sendMessage = (): TSendMessage => ( { type: SEND_MESSAGE } )
export const updateNewMessageText = (newText: string): TUpdateNewMessageText => ( { type: UPDATE_NEW_MESSAGE_TEXT, newText: newText } )

export default dialogsReducer;