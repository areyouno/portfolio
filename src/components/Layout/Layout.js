import React from "react";
import { NavLink } from "react-router-dom";
import memojiHand from "../../images/memoji-hand-yellow.png";
import MenuBar from "../Navigation/MenuBar/MenuBar";
import "./Layout.scss";

const layout = props => {
       const header = (
              <header className={"layout__header"}>
                     <NavLink to="/About" title="link to top page">
                            <img className={"layout__image"} src={memojiHand} alt="memoji hand" width="100px" />
                     </NavLink>
                     <h1>RR</h1>
                     <MenuBar />
              </header>
       );
       return (
              <div className={"layout"}>
                     {header}
                     <main className={"layout__main"}>{props.children}</main>
              </div>
       );
};

export default layout;
