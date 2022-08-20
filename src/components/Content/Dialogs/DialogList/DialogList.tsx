import React, { FC } from "react";
import { TDialog } from "../../../../types/types";
import DialogItem from "./DialogItem/DialogItem";

import './DialogList.css'

type TProps = {
  dialogs: Array<TDialog>
}

const DialogList: FC<TProps> = ({ dialogs }) => {

  const dialogElements = dialogs.map( dialog =>  
    <DialogItem 
      key = { dialog.id } 
      dialog = { dialog } 
    />
  )

  return (
    <ul className="dialogs__list dialogs-list">
      { dialogElements }
    </ul>
  )
}

export default DialogList;