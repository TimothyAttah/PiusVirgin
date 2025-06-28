import styled, { css } from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  z-index: 999;
`;

export const AboutTitleBox = styled.div`
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

export const AboutTitleBoxSubtitle = styled.p`
  font-size: 22px;
  margin: 20px 0;

  span {
    display: block;
  }
  img {
    width: 310px;
    margin-bottom: -5px;
    padding: 0 5px;
  }

  ${(props) =>
    props.primary &&
    css`
      margin-bottom: 0;
    `}

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 16px;
    line-height: 25px;

    img {
      width: 240px;
      margin-bottom: -5px;
      padding: 0 5px;
    }
  }
`;

export const AboutTitleBoxDesc = styled.p`
  font-size: 20px;
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    width: 300px;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 16px;
    line-height: 25px;

    img {
      width: 240px;
      margin-bottom: -5px;
      padding: 0 5px;
    }
  }
`;

export const AboutTitle = styled.h1`
  text-transform: uppercase;
  color: crimson;
`;
export const AboutSubTitle = styled.h2``;

export const AboutCompanyProfile = styled.div`
  padding-top: 30px;

  p {
    display: block;
    font-size: 20px;
    padding-bottom: 20px;

    span {
      /* display: block; */

      img {
        width: 100px;
        margin-bottom: -5px;
        padding: 0 5px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 16px;
    line-height: 25px;

    p {
      font-size: 16px;

      span {
        img {
          width: 85px;
          margin-bottom: -5px;
          padding: 0 5px;
        }
      }
    }
  }
`;
export const AboutCompanyProfileTitle = styled.h2`
  color: red;
  font-weight: 600;

  ${(props) =>
    props.primary &&
    css`
      text-transform: capitalize;
      font-weight: 900;
      padding-bottom: 10px;
    `}
`;

export const AboutListsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const AboutListsItem = styled.div`
  width: 300px;
  height: 210px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 15px;
    line-height: 20px;

    span {
      color: navy;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 16px;

    height: 280px;
    /* line-height: 25px; */
  }
`;
