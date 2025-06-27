import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  background-color: var(--bg-black-50);
  z-index: 100;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  padding-bottom: 20px;

  @media screen and (max-width: 570px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const HeaderSocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    font-size: 25px;
    color: red;
  }

  @media screen and (max-width: 570px){
    display: none;
  }
`;

export const HeaderNavWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  padding-top: 10px;
  @media screen and (max-width: 570px) {
    padding: 0;
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;

  /* @media screen and (max-width: 870px) {
    width: 200px;
  } */
`;

export const HeaderMenu = styled.div`
  display: none;
  z-index: 99999 !important;
  align-items: center;
  justify-content: center;

  .hamburger-react {
    z-index: 99999 !important;
    color: var(--text-color) !important;
  }

  @media screen and (max-width: 750px) {
    display: flex;
  }
`;
// export const HeaderContainer = styled.header``;
// export const HeaderContainer = styled.header``;
// export const HeaderContainer = styled.header``;
