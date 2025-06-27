import React from 'react';
import * as Styles from './SidebarStyles';
import navData from '../nav/navData';
import { NavLink } from 'react-router-dom';
import ChangeTheme from '../ChangeTheme';

const Sidebar = () => {
  const showAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 1.25,
        type: 'tween',
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.25,
        type: 'tween',
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
  return (
    <Styles.SidebarContainer
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.SidebarWrapper>
        <ChangeTheme />
        <ul>
          {navData.mainNavData.map((nav, i) => (
            <NavLink key={i}>{nav.navTitle}</NavLink>
          ))}
        </ul>

        <ul>
          {navData.primaryNavData.map((nav, i) => (
            <NavLink key={i}>{nav.navTitle}</NavLink>
          ))}
        </ul>
      </Styles.SidebarWrapper>
    </Styles.SidebarContainer>
  );
};

export default Sidebar;
