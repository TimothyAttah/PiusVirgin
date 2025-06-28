import { useState } from 'react';
import logo from '../../assets/halfLogo.png';
import Nav from '../nav/Nav';
import { Twirl as Hamburger } from 'hamburger-react';
import { AnimatePresence } from 'framer-motion';
import * as Styles from './HeaderStyles';
import Sidebar from '../sidebar/Sidebar';
import { CloseBackground } from '../CloseBackground';
import ChangeTheme from '../ChangeTheme';

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleOpenModel = () => {
    setOpenSidebar((prev) => !prev);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {openSidebar && (
        <CloseBackground close={() => toggleOpenModel()} />
      )}
      <Styles.HeaderContainer>
        <Styles.HeaderWrapper>
          <h3>Sunday, 15th June 2025</h3>
          <Styles.HeaderLogo to='/'>
            <img src={logo} alt='' width='120' />
          </Styles.HeaderLogo>

          <Styles.HeaderOptionsContainer>
            <ChangeTheme />
            <Styles.HeaderOptionMenu>
              <Hamburger
                size='25'
                rounded
                toggled={openSidebar}
                toggle={() => toggleOpenModel()}
              />
            </Styles.HeaderOptionMenu>
          </Styles.HeaderOptionsContainer>
        </Styles.HeaderWrapper>
        <Styles.HeaderNavWrapper>
          <Nav />
          <Styles.HeaderMenu>
            <Hamburger
              size='25'
              rounded
              toggled={openSidebar}
              toggle={() => toggleOpenModel()}
            />
          </Styles.HeaderMenu>
        </Styles.HeaderNavWrapper>
      </Styles.HeaderContainer>
      <AnimatePresence>
        {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
