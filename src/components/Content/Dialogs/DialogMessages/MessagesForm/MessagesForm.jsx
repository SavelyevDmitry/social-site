import React from "react";

import './MessagesForm.css'

const MessagesForm = (props) => {

  function sendMessage(e) {
    e.preventDefault();

    props.sendNewMessage();
  }

  function updateNewMessageText(e) {
    const newText = e.target.value;

    props.updateMessageText(newText);
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