import React from "react";
import NavBar from "./NavBar";

import { connect } from "react-redux/es/exports";

const NavBarContainer = (props) => {

  const mapStateToProps = (state) => {
    return {
      links: state.navbar.links
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }

  const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

  return (
    <NavBarContainer />
  )
}

export default NavBarContainer;