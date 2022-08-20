import React, { FC } from "react";

import NavItem from "./NavItem/NavItem";
import "./NavBar.css"
import { TLink } from "../../types/types";

type TProps = {
  links: Array<TLink>
}

const NavBar: FC<TProps> = ({ links }) => {

  const linkElements = links.map( link => <NavItem key= { link.id } link = { link } /> );

  return (
    <div className="main__navbar navbar">
      <ul className="navbar__list">
        { linkElements }
      </ul>
    </div>
  )
}

export default NavBar;