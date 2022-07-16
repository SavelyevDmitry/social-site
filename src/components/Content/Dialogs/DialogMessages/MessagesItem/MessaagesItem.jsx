import React from "react";

const MessagesItem = (props) => {
  return (
    <li className="dialogs-messages__item"> { props.body } </li>
  )
}

export default MessagesItem;