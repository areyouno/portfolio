import React from 'react';
import { NavLink } from 'react-router-dom';
import memojiHand from '../../images/memoji-hand-yellow.png';
import MenuBar from '../Navigation/MenuBar/MenuBar';

import './Layout.scss';

const layout = props => {
       const header = (
              <div className={'div_header'}>
                     <NavLink to="/About" title="link to top page">
                            <img src={memojiHand} alt="memoji hand" width="100px" />
                     </NavLink>
                     <h1>RR</h1>
                     <MenuBar />
              </div>
       );
       return (
              <div className={'div_layout'}>
                     {header}
                     <div className={'div_main'}>{props.children}</div>
              </div>
       );
};

export default layout;
