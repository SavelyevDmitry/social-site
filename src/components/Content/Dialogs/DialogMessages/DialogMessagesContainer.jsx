import React from "react";
import { connect } from "react-redux/es/exports";

import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../../redux/dialogs-reduces.ts";

import DialogMessages from "./DialogMessages";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    dfdf: "fdfdf"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMessageText: newText => {
      dispatch( updateNewMessageTextActionCreator(newText) );
    },
    sendNewMessage: () => {
      dispatch( sendMessageActionCreator() );
    }      
  }
}

const DialogMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMessages);

export default DialogMessagesContainer;