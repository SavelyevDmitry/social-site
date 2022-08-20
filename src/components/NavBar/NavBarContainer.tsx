import React from "react";
import NavBar from "./NavBar";

import { connect } from "react-redux/es/exports";
import { TAppState } from "../../redux/store";

const mapStateToProps = (state: TAppState) => {
  return {
    links: state.navbar.links
  }
}

export default connect(mapStateToProps, {})(NavBar);