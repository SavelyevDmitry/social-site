import React from "react";

import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className="dialogs-list__item">
      <NavLink to = { `/dialogs/${props.id}` } className='dialogs-list__link'>
        { props.personName }
      </NavLink>
    </li>
  )
}

export default DialogItem;