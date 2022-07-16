import React from "react";
import DialogListContainer from "./DialogList/DialogListContainer";
import DialogMessages from "./DialogMessages/DialogMessages";
import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";

import './Dialogs.css'

const Dialogs = (props) => {
  return (
    <div className="content__dialogs dialogs">
      <DialogListContainer />
      <DialogMessagesContainer />
    </div>
  )
}

export default Dialogs;