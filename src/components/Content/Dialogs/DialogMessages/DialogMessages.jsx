import React from "react";
import MessagesItem from "./MessagesItem/MessaagesItem";

import './DialogMessages.css'
import MessagesForm from "./MessagesForm/MessagesForm";

const DialogMessages = (props) => {
  const messsagesElements = props.messages.map( message => <MessagesItem key = { message.id } body = { message.body } />);

  return (
    <div className="dialogs__messages dialogs-messages">
      <ul className="dialogs-messages__list">
        { messsagesElements }
      </ul>
      <MessagesForm newMessageText = { props.newMessageText } sendNewMessage = { props.sendNewMessage } updateMessageText = { props.updateMessageText } />
    </div>
  )
}

export default DialogMessages;