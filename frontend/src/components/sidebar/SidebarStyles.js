import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarContainer = styled(motion.div)`
  width: 250px;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(139deg, blue 0%, red 90%);
  /* background-color: var(--bg-black-50); */
  z-index: 999;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
`;

export const SidebarWrapper = styled.div`
  padding: 30px;
  padding-top: 80px;

  div {
    padding-bottom: 20px;
    svg {
      font-size: 25px;
      color: var(--text-color);
      /* color: green; */
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 20px;
    padding-bottom: 20px;

    a {
      color: var(--text-color);
      color: #fff;
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
`;

export const SidebarSocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a svg{
    font-size: 25px;
    color: #fff;
  }

`;
