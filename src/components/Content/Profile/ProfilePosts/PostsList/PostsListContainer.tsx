import { connect } from "react-redux";
import { TAppState } from "../../../../../redux/store";
import PostsList from "./PostsList";
import { getPosts } from './../../../../../redux/selectors/profile-selector';

const mapStateToProps = (state: TAppState) => {
  return {
    posts: getPosts(state)
  }
}

export default connect(mapStateToProps, {})(PostsList);