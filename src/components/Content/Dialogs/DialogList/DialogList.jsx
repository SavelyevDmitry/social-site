import React from "react";
import DialogItem from "./DialogItem/DialogItem";

import './DialogList.css'

const DialogList = (props) => {

  const dialogElements = props.dialogs.map( dialog =>  
    <DialogItem 
      key = { dialog.id } 
      personName = { dialog.personName } 
      id = { dialog.id } 
    />
  )

  return (
    <ul className="dialogs__list dialogs-list">
      { dialogElements }
    </ul>
  )
}

export default DialogList;