import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = (props) => {
  return (
    <li className="navbar__item">
      <NavLink to={props.link} className="navbar__link">
        {props.text}
      </NavLink> 
    </li>
  )
}

export default NavItem;