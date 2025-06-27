import styled from 'styled-components';

export const ToursAndExcursionContainer = styled.div`
  padding: 20px;

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

export const ToursAndExcursionTitle = styled.h1`
  color: crimson;
  font-weight: bolder;
`;

export const ToursAndExcursionInfoWrapper = styled.div`
  p:first-child {
    font-family: cursive;
    font-style: italic;
    font-size: 18px;
    color: red;
    padding: 20px 0;
  }

  p:last-child {
    font-size: 20px;
    font-family: cursive;
    font-style: italic;
    font-weight: 400;

    span {
      font-family: normal;
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
    }

    img {
      width: 110px;
      margin-bottom: -7px;
    }
  }
`;
