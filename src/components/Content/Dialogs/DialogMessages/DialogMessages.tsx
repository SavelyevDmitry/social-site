import React, { FC } from "react";
import MessagesItem from "./MessagesItem/MessaagesItem";

import './DialogMessages.css'
import MessagesForm from "./MessagesForm/MessagesForm";
import { TMessage } from "../../../../types/types";

type TProps = {
  messages: Array<TMessage>
  newMessageText: string

  sendMessage: () => void
  updateNewMessageText: (newText: string) => void
}

const DialogMessages: FC<TProps> = ({ messages, newMessageText, sendMessage, updateNewMessageText }) => {
  const messsagesElements = messages.map( message => <MessagesItem key = { message.id } message = { message } />);

  return (
    <div className="dialogs__messages dialogs-messages">
      <ul className="dialogs-messages__list">
        { messsagesElements }
      </ul>
      <MessagesForm newMessageText = { newMessageText } sendMessage = { sendMessage } updateNewMessageText = { updateNewMessageText } />
    </div>
  )
}

export default DialogMessages;