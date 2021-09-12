import React from "react";
import "./About.scss";
const about = () => {
       return (
              <div className={["about", "adaptive-glass"].join(" ")}>
                     <span>
                            <section>
                                   <h2 className={"about__header"}>Rreuno Velasco</h2>
                                   <p>Digital Craftsman (Developer/Designer)</p>
                            </section>
                            <section>
                                   <h3 className={"about__subheader"}>Work</h3>
                                   <p>
                                          RR is a front-end developer based in Manila with a passion for building
                                          creatives. When not online, he loves to run outside, workout, or play with his
                                          camera.
                                   </p>
                            </section>
                     </span>
                     <span>
                            <section>
                                   <h3 className={"about__subheader"}>Timeline</h3>
                                   <p className={"about__timeline-item"}>
                                          <em className={"about__timeline-year"}>1992</em>
                                          Born in Mandaluyong, Philippines.
                                   </p>
                                   <p className={"about__timeline-item"}>
                                          <em className={"about__timeline-year"}>2014</em>Completed Bachelor's degree in
                                          Information Systems at De La Salle University
                                   </p>
                                   <p className={"about__timeline-item"}>
                                          <em className={"about__timeline-year"}>2015</em>Landed first job at Asiagate
                                          Networks, Inc.
                                   </p>
                                   <p className={"about__timeline-item"}>
                                          <em className={"about__timeline-year"}>2017</em>Worked at Accenture, Inc.
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
                                                        data-content="LinkedIn">
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
