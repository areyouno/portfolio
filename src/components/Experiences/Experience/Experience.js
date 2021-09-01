import React from "react";
import "./Experience.scss";

const Experience = props => {
       let exp = null;
       if (props.itemId === 0) {
              exp = (
                     <ul>
                            <li>Responsible for the project’s service and change requests from clients</li>
                            <li>
                                   Supported a variety of different languages and frameworks such as Java, Node.js,
                                   AngularJS, DBMS (PLSQL, MySQL, MSSQL)
                            </li>
                            <li>
                                   Led a report automation initiative to automate five reports used by the client which
                                   saved over 45 man hours per year.
                            </li>
                            <li>Received Agile Certification from the Agile training held by the company.</li>
                     </ul>
              );
       } else if (props.itemId === 1) {
              exp = (
                     <ul>
                            <li>
                                   Worked with a team of six members to enhance and improve a data management system
                                   that captures the reporting of financial and fiscal performance of the client.
                            </li>
                            <li>Conducted data and requirements gathering during client visits.</li>
                            <li>Involved in the training of trainers as part of transition to project hand-off.</li>
                     </ul>
              );
       } else if (props.itemId === 2) {
              exp = (
                     <ul>
                            <li>Contributed on preparing regular expressions for a Bookmarking application.</li>
                            <li>Tested the application on various browsers to ensure cross-browser compatibility.</li>
                     </ul>
              );
       }
       return <div className={"div_experience"}>{exp}</div>;
};

export default Experience;
