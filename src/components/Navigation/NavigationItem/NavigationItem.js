import React from 'react';
import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
       // const path = window.location.pathname.slice(1);
       const path = window.location.pathname;
       const isActive = props.link === path ? ' active' : '';
       return (
              <li className={'li_navigationItem' + isActive}>
                     <NavLink to={props.link} exact={props.exact}>
                            {/* <svg>
                                   <rect x="0" y="0" fill="none" width="100%" height="100%" />
                            </svg> */}
                            {props.children}
                     </NavLink>
              </li>
       );
};

export default navigationItem;
