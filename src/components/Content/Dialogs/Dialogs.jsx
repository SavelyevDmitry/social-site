import React from "react";
import DialogList from "./DialogList/DialogList";
import DialogMessages from "./DialogMessages/DialogMessages";

import './Dialogs.css'

const Dialogs = () => {
  return (
    <div className="content__dialogs dialogs">
      <DialogList />
      <DialogMessages />
    </div>
  )
}

export default Dialogs;