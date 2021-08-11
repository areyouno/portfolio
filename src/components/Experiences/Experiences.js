import React, { useState } from 'react';
import './Experiences.scss';

import Experience from './Experience/Experience';

const Experiences = () => {
       const [id, setId] = useState(0);
       const experiences = ['Accenture, Inc.', 'Asiagate Networks, Inc.', 'Ideyatech, Inc.'];
       const clickHandler = index => {
              console.log(index);
              setId(index);
       };

       let exp = experiences.map((item, index) => {
              return (
                     <li className="li_expi-list__item" key={index}>
                            <button
                                   className={id === index ? 'btn_expi button--active' : 'btn_expi'}
                                   onClick={() => clickHandler(index)}>
                                   {item}
                            </button>
                     </li>
              );
       });
       return (
              <div className={'div_experiences'}>
                     <span>
                            <section>
                                   <h2>Where I've Worked</h2>
                                   <ul className="ul_expi-list">{exp}</ul>
                            </section>
                     </span>
                     <Experience itemId={id} />
              </div>
       );
};

export default Experiences;
