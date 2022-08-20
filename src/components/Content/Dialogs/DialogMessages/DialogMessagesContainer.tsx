import React from "react";
import { connect } from "react-redux/es/exports";

import { TAppState } from "../../../../redux/store";

import { sendMessage, updateNewMessageText } from "../../../../redux/reducers/dialogs-reduces";

import DialogMessages from "./DialogMessages";

const mapStateToProps = (state: TAppState) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

export default connect(mapStateToProps, { sendMessage, updateNewMessageText })(DialogMessages);