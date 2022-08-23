import { connect } from "react-redux/es/exports";
import { TAppState } from "../../../../redux/store";
import { getDialogs } from './../../../../redux/selectors/dialogs-selector';
import DialogList from "./DialogList";


const mapStateToProps = (state:TAppState) => {
  return {
    dialogs: getDialogs(state)
  }
}

export default connect(mapStateToProps, {})(DialogList);