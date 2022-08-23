import { connect } from "react-redux";

import { TAppState } from "../../../../../redux/store";

import { addPost, updateNewPostText } from "../../../../../redux/reducers/profile-reducer";

import PostsForm from "./PostsForm";
import { getNewPostText } from "../../../../../redux/selectors/profile-selector";

const mapStateToProps = (state: TAppState) => {
  return {
    newPostText: getNewPostText(state)
  }
}

export default connect(mapStateToProps, { addPost, updateNewPostText })(PostsForm);