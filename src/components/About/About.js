import React from 'react';
import './About.scss';
const about = () => {
       return (
              <div className={['div_about', 'adaptive-glass'].join(' ')}>
                     <span>
                            <section>
                                   <h2>Rreuno Velasco</h2>
                                   <p>Digital Craftsman (Developer/Designer)</p>
                            </section>
                     </span>
                     <span>
                            <section>
                                   <h3>Work</h3>
                                   <p>
                                          RR is a full-stack developer based in Manila with a passion for building
                                          creatives. When not online, he loves to run outside.
                                   </p>
                            </section>
                     </span>
                     <span>
                            <section className={'section_timeline'}>
                                   <h3>Timeline</h3>
                                   <p>
                                          <em>1992</em>
                                          Born in Mandaluyong, Philippines.
                                   </p>
                                   <p>
                                          <em>2014</em>Completed Bachelor's degree in Information Systems at De La Salle
                                          University
                                   </p>
                                   <p>
                                          <em>2015</em>Landed first job at Asiagate Networks, Inc.
                                   </p>
                                   <p>
                                          <em>2017</em>Worked at Accenture, Inc.
                                   </p>
                            </section>
                     </span>
                     <span>
                            <section className={'section_contact'}>
                                   <h3>Contact me</h3>
                                   <ul>
                                          <li>LinkedIn</li>
                                          <li>Gmail</li>
                                   </ul>
                            </section>
                     </span>
              </div>
       );
};

export default about;
