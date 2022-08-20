import React, { FC } from "react";
import { TMessage } from "../../../../../types/types";

type TProps = {
  message: TMessage
}

const MessagesItem: FC<TProps> = ({ message }) => {
  return (
    <li className="dialogs-messages__item"> { message.body } </li>
  )
}

export default MessagesItem;