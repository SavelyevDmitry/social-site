import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsUserAuth } from "../../../redux/selectors/auth-selector";
import DialogListContainer from "./DialogList/DialogListContainer";
import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";

import './Dialogs.css'

const Dialogs = () => {
  const isAuth = useSelector(getIsUserAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  return (
    <div className="content__dialogs dialogs">
      <DialogListContainer />
      <DialogMessagesContainer />
    </div>
  )
}

export default Dialogs;