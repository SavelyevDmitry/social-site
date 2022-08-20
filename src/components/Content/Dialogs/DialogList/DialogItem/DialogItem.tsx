import React, { FC } from "react";

import { NavLink } from "react-router-dom";
import { TDialog } from "../../../../../types/types";

type TProps = {
  dialog: TDialog
}

const DialogItem: FC<TProps> = ({ dialog }) => {
  return (
    <li className="dialogs-list__item">
      <NavLink to = { `/dialogs/${dialog.id}` } className='dialogs-list__link'>
        { dialog.personName }
      </NavLink>
    </li>
  )
}

export default DialogItem;