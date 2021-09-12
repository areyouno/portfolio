import React, { useState } from "react";
import "./Experiences.scss";

import Experience from "./Experience/Experience";

const Experiences = () => {
       const [id, setId] = useState(0);
       const experiences = ["Accenture, Inc.", "Asiagate Networks, Inc.", "Ideyatech, Inc."];
       const clickHandler = index => {
              setId(index);
       };

       let exp = experiences.map((item, index) => {
              return (
                     <li className="experiences__item" key={index}>
                            <button
                                   className={`${"experiences__button"} ${id === index ? " button--active" : ""}`}
                                   onClick={() => clickHandler(index)}>
                                   {item}
                            </button>
                     </li>
              );
       });
       return (
              <div className={"experiences"}>
                     <span>
                            <section>
                                   <h2 className={"experiences__header"}>Where I've Worked</h2>
                                   <ul className="experiences__nav">{exp}</ul>
                            </section>
                     </span>
                     <Experience itemId={id} />
              </div>
       );
};

export default Experiences;
