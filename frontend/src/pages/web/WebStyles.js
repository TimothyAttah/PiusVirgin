import styled from 'styled-components';

export const ProgrammingContainer = styled.div`
  padding: 20px;
  width: 100%;
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
export const ProgrammingTitle = styled.h1`
  color: darkred;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  padding-bottom: 30px;
  width: 100%;

  @media screen and (max-width: 680px) {
    font-size: 30px;
  }

  @media screen and (max-width: 510px) {
    font-size: 20px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
export const ProgrammingSubTitle = styled.h4`
  color: navy;
  font-size: 20px;
  padding-bottom: 20px;
`;
export const ProgrammingDesc = styled.p`
  font-family: cursive;
  font-size: 18px;
  padding-bottom: 20px;
`;
export const ProgrammingList = styled.ul`
  list-style: disc;
  padding-left: 40px;
  font-weight: bold;
  li {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 400px) {
    text-align: left;
  }
`;
