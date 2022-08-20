import { TDialog, TMessage } from "../../types/types";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type DialogsStateType = {
  dialogs: Array<TDialog>
  messages: Array<TMessage>
  newMessageText: string
}

const initialState: DialogsStateType = {
  dialogs: [
    { id: 1, personName: "Dmitry Ivanov" },
    { id: 2, personName: "Marina Petrova" },
    { id: 3, personName: "Ivan Dmitriev" },
    { id: 4, personName: "Kirill Akimov" },
    { id: 5, personName: "Sergey Novikov" },
  ],
  messages: [
    { id: 1, body: "Hi!" },
    { id: 2, body: "How are you?" },
    { id: 3, body: "I'm Fine!" },
    { id: 4, body: "Thank you" },
  ],
  newMessageText: '',  
}

const dialogsReducer = (state = initialState, action: any): DialogsStateType => {

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

type SendMessageActionType = {
  type: typeof SEND_MESSAGE
}

type UpdateNewMessageTextActionType = {
  type: typeof UPDATE_NEW_MESSAGE_TEXT
  newText: string
}

export const sendMessage = (): SendMessageActionType => ( { type: SEND_MESSAGE } )
export const updateNewMessageText = (newText: string): UpdateNewMessageTextActionType => ( { type: UPDATE_NEW_MESSAGE_TEXT, newText: newText } )

export default dialogsReducer;