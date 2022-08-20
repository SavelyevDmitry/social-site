import React from "react";
import { connect } from "react-redux/es/exports";
import { TAppState } from "../../../../redux/store";

import DialogList from "./DialogList";

const mapStateToProps = (state:TAppState) => {
  return {
    dialogs: state.dialogsPage.dialogs
  }
}

export default connect(mapStateToProps, {})(DialogList);