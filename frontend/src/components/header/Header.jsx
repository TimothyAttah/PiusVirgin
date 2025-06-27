import React, { useState } from 'react';
import logo from '../../assets/halfLogo.png';
import Nav from '../nav/Nav';
import { Twirl as Hamburger } from 'hamburger-react';
import { AnimatePresence } from 'framer-motion';
import * as Styles from './HeaderStyles';
import Sidebar from '../sidebar/Sidebar';
import { CloseBackground } from '../CloseBackground';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ChangeTheme from '../ChangeTheme';

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      {openSidebar && (
        <CloseBackground close={() => setOpenSidebar(!openSidebar)} />
      )}
      <Styles.HeaderContainer>
        <Styles.HeaderWrapper>
          <h3>Sunday, 15th June 2025</h3>
          <Styles.HeaderLogo>
            <img src={logo} alt='' width='120' />
          </Styles.HeaderLogo>
          <Styles.HeaderSocialIcons>
            <Link>
              <FaInstagramSquare />
            </Link>
            <Link>
              <FaFacebookSquare />
            </Link>
            <Link>
              <FaWhatsappSquare />
            </Link>
            <ChangeTheme />
          </Styles.HeaderSocialIcons>
        </Styles.HeaderWrapper>
        <Styles.HeaderNavWrapper>
          <Nav />
          <Styles.HeaderMenu>
            <Hamburger
              size='25'
              rounded
              toggled={openSidebar}
              toggle={() => setOpenSidebar(!openSidebar)}
            />
          </Styles.HeaderMenu>
        </Styles.HeaderNavWrapper>
      </Styles.HeaderContainer>
      <AnimatePresence>{openSidebar && <Sidebar />}</AnimatePresence>
    </>
  );
};

export default Header;
