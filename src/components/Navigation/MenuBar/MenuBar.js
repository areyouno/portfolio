import React from "react";
import "./MenuBar.scss";

import NavigationItem from "../NavigationItem/NavigationItem";

// function NavigationLink({ to, path, children }) {
//        const isActive = to === path ? ' active' : '';
//        return (
//               <Link className={'Navigation-link' + isActive} to={to} role="menuitem">
//                      {children}
//               </Link>
//        );d
// }

const MenuBar = () => {
       return (
              <div className={"layout__nav"}>
                     <ul className={"layout__nav-items"}>
                            <NavigationItem link="/About">About</NavigationItem>
                            <NavigationItem link="/Experiences">Experience</NavigationItem>
                            <NavigationItem link="/Projects">Projects</NavigationItem>
                            {/* <NavigationItem link="/Art">Art</NavigationItem> */}
                     </ul>
              </div>
       );
};

export default MenuBar;
