import styled from 'styled-components';

export const NavContainer = styled.nav`
  flex: 1;
  height: 100%;
  /* @media screen and (max-width: 750px){
    display: none;
  } */
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 10px 0;

  ul,
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  div svg {
    color: var(--text-color);
    font-size: 22px;
  }

  ul {
    a {
      color: var(--text-color);
      font-size: 1.5rem;
      text-transform: capitalize;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 970px) {
    width: 900px;
    width: 80vw;
    overflow-x: auto;
    margin: 0 auto;

    ul {
      min-width: 99%;

      a {
        white-space: nowrap;
        cursor: grab;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
