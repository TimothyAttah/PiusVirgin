import styled, { css } from 'styled-components';

export const RailContainer = styled.div`
  padding: 20px;

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
export const RailTitle = styled.h2`
  color: darkred;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 40px;
  ${(props) =>
    props.primary &&
    css`
      font-size: 20px;
      text-transform: capitalize;
    `}
`;

export const RailSubTitle = styled.h4`
  color: darkred;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const RailDescWrapper = styled.div`
  p {
    padding-bottom: 20px;
    span {
      color: navy;
      font-weight: bold;
    }

    img {
      width: 80px;
      margin-bottom: -5px;
    }
  }
`;

export const RailRoutesWrapper = styled.div`
  p {
    font-weight: bold;
    padding-bottom: 10px;
    span {
      color: navy;
    }
  }
  p:last-child {
    color: darkred;
  }
`;

export const RailListContainer = styled.div`
  padding-top: 10px;
  h4 {
    color: darkred;
    padding-bottom: 20px;
  }
  p {
    padding-bottom: 20px;
    span {
      color: navy;
    }
  }
`;
export const RailList = styled.p`
  font-weight: bold;
  span {
    color: navy;
  }
`;
