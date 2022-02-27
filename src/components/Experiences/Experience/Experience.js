import React from "react";
import "./Experience.scss";

const Experience = (props) => {
   let exp = null;
   if (props.itemId === 0) {
      exp = (
         <ul>
            <li>Managed the project’s service and change requests.</li>
            <li>
               Supported a variety of languages and frameworks written in Java,
               node.js, DBMS (PLSQL, MySQL, MSSQL).
            </li>
            <li>
               Implemented a report automation tool that automated five reports
               and saved 45 man hours a year.
            </li>
            <li>
               Produced software enhancements that included changes to the UI
               and backend logic.
            </li>
            <li>Received Accenture Agile Certification.</li>
         </ul>
      );
   } else if (props.itemId === 1) {
      exp = (
         <ul>
            <li>
               Worked on building a data management system specifically on UI/UX
               design and report generation.
            </li>
            <li>Conducted data and requirements gathering. </li>
            <li>
               Involved in the training of trainers as part of transition to
               project hand-off.
            </li>
         </ul>
      );
   } else if (props.itemId === 2) {
      exp = (
         <ul>
            <li>
               Contributed on the improvement of a Bookmarking application
               through the use of regular expressions.
            </li>
            <li>
               Executed tests and wrote proper documentation. Tested on
               different browsers to ensure cross-browser compatibility.
            </li>
         </ul>
      );
   }
   return <div className={"experience"}>{exp}</div>;
};

export default Experience;
