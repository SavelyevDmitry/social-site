import React, { ChangeEvent, FC, FormEvent } from "react";

import './MessagesForm.css'

type TProps = {
  newMessageText: string

  sendMessage: () => void
  updateNewMessageText: (newText: string) => void
}

const MessagesForm: FC<TProps> = (props) => {

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    props.sendMessage();
  }

  function updateNewMessageText(e: ChangeEvent<HTMLTextAreaElement>) {
    const newText = e.target.value;

    props.updateNewMessageText(newText);
  }

  return (
    <form onSubmit={sendMessage} className="dialogs-messages__form messages-form">
        <textarea 
          name="message" 
          className="form-text-input messages-form__body" 
          value = { props.newMessageText }
          onChange = { updateNewMessageText } 
        />
        <button type="submit" className="btn messages-form__btn">Send</button>
      </form>
  )
}

export default MessagesForm;