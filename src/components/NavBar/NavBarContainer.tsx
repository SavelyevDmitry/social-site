import React from "react";
import NavBar from "./NavBar";

import { connect } from "react-redux/es/exports";
import { TAppState } from "../../redux/store";
import { getLinks } from './../../redux/selectors/navbar-selector';

const mapStateToProps = (state: TAppState) => {
  return {
    links: getLinks(state)
  }
}

export default connect(mapStateToProps, {})(NavBar);