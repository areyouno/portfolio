import React from "react";
import "./NavigationItem.scss";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
       // const path = window.location.pathname.slice(1);
       const path = window.location.pathname;
       const isActive = props.link === path ? " active" : "";
       return (
              <li className={"layout__nav-item" + isActive}>
                     <NavLink to={props.link} exact={props.exact}>
                            {props.children}
                     </NavLink>
              </li>
       );
};

export default navigationItem;
