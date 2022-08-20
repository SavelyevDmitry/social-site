import React from "react";
import DialogListContainer from "./DialogList/DialogListContainer";
import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";

import './Dialogs.css'

const Dialogs = () => {
  return (
    <div className="content__dialogs dialogs">
      <DialogListContainer />
      <DialogMessagesContainer />
    </div>
  )
}

export default Dialogs;