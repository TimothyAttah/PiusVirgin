/* eslint-disable react/prop-types */
import * as Styles from './SidebarStyles';
import { Link, NavLink } from 'react-router-dom';
import ChangeTheme from '../ChangeTheme';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';

const Sidebar = ({ setOpenSidebar }) => {
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

  const close = () => {
    setOpenSidebar(false);
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
          <NavLink to='/about' onClick={close}>
            <li>About Us</li>
          </NavLink>
          <NavLink to='/contact' onClick={close}>
            <li>Contact Us</li>
          </NavLink>
        </ul>

        <Styles.SidebarSocialIcons>
          <Link onClick={close}>
            <FaInstagramSquare />
          </Link>
          <Link onClick={close}>
            <FaFacebookSquare />
          </Link>
          <Link onClick={close}>
            <FaWhatsappSquare />
          </Link>
        </Styles.SidebarSocialIcons>
      </Styles.SidebarWrapper>
    </Styles.SidebarContainer>
  );
};

export default Sidebar;
