import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { TLink } from "../../../types/types";
import "./NavItem.css";

type TProps = {
  link: TLink
}

const NavItem: FC<TProps> = ({ link }) => {
  return (
    <li className="navbar__item">
      <NavLink to={link.link} className="navbar__link">
        {link.text}
      </NavLink> 
    </li>
  )
}

export default NavItem;