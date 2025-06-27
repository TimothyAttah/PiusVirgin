import React from 'react';
import {newNavData} from './navData';
import { NavLink } from 'react-router-dom';
import ChangeTheme from '../ChangeTheme';
import * as Styles from './NavStyles';

const Nav = () => {
  return (
    <Styles.NavContainer>
      <Styles.NavWrapper>
        <ul>
          {newNavData.map((nav, i) => (
            <NavLink key={i} to={nav.navPath}>{nav.navTitle}</NavLink>
          ))}
        </ul>

      </Styles.NavWrapper>
    </Styles.NavContainer>
  );
};

export default Nav;
