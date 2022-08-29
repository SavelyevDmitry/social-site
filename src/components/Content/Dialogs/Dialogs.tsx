import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsUserAuth } from "../../../redux/selectors/auth-selector";
import DialogListContainer from "./DialogList/DialogListContainer";
import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";

import './Dialogs.css'

const Dialogs = () => {
  const isAuth = useSelector(getIsUserAuth);

  return (
    <>
      { !isAuth && <Navigate replace to={'/login'} /> }
      { isAuth && <div className="content__dialogs dialogs">
        <DialogListContainer />
        <DialogMessagesContainer />
      </div> }    
    </>
  )
}

export default Dialogs;