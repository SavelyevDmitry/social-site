import React from "react";
import { connect } from "react-redux/es/exports";

import DialogList from "./DialogList";

const DialogListContainer = () => {

  const mapStateToProps = (state) => {
    return {
      dialogs: state.dialogsPage.dialogs
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }

  const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

  return (
    <DialogListContainer />
  )
}

export default DialogListContainer;