import React from "react";
import "./About.scss";
const about = () => {
   return (
      <div className={["about", "adaptive-glass"].join(" ")}>
         <span>
            <section>
               <h2 className={"about__header"}>Rreuno Velasco</h2>
               <p>Digital Craftsman</p>
            </section>
            <section>
               <h3 className={"about__subheader"}>Work</h3>
               <p>
                  RR is a software engineer based in Manila. He is an
                  experienced Java developer and loves to solve problems with
                  code. When not online, he loves to do sports, read a book, or
                  work on his typing speed. Currently, he is exploring Swift
                  development.
               </p>
            </section>
         </span>
         <span>
            <section>
               <h3 className={"about__subheader"}>Bio</h3>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>1992</em>
                  Born in Mandaluyong, Philippines.
               </p>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>2014</em>
                  Completed Bachelor's degree in Information Systems at De La
                  Salle University
               </p>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>2015</em>Landed first
                  job at Asiagate Networks, Inc.
               </p>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>2017</em>Started
                  working at Accenture, Inc.
               </p>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>2021-Jan</em>Started
                  exploring ReactJS development
               </p>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>2021-Oct</em>Bought an
                  M1 Mac!
               </p>
               <p className={"about__timeline-item"}>
                  <em className={"about__timeline-year"}>2021-Oct</em>Started
                  exploring Swift development
               </p>
            </section>
         </span>
         <span>
            <section className={"about__section-contact"}>
               <h3 className={"about__subheader"}>Contact me</h3>
               <ul>
                  <li>
                     <a
                        href="https://www.linkedin.com/in/rreuno-v-96062939/"
                        target="_blank"
                        rel="noreferrer"
                        data-content="LinkedIn"
                     >
                        LinkedIn
                     </a>
                  </li>
               </ul>
            </section>
         </span>
      </div>
   );
};

export default about;
