import { connect } from "react-redux/es/exports";

import { TAppState } from "../../../../redux/store";

import { sendMessage, updateNewMessageText } from "../../../../redux/reducers/dialogs-reduces";
import { getMessages, getNewMessageText } from './../../../../redux/selectors/dialogs-selector';

import DialogMessages from "./DialogMessages";

const mapStateToProps = (state: TAppState) => {
  return {
    messages: getMessages(state),
    newMessageText: getNewMessageText(state),
  }
}

export default connect(mapStateToProps, { sendMessage, updateNewMessageText })(DialogMessages);