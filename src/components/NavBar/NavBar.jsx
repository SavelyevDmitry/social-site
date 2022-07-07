import React from "react";

import NavItem from "./NavItem/NavItem";
import "./NavBar.css"

const NavBar = (props) => {

  const linkElements = props.state.links.map( linkItem => <NavItem key={linkItem.id} text={linkItem.text} link={linkItem.link}></NavItem>);

  return (
    <div className="main__navbar navbar">
      <ul className="navbar__list">
        { linkElements }
      </ul>
    </div>
  )
}

export default NavBar;