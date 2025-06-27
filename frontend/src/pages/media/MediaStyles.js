import styled from 'styled-components';

export const MediaContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
export const MediaTitle = styled.h2`
  color: red;
  font-weight: bolder;
  text-transform: capitalize;
  font-size: 40px;
  margin-bottom: 20px;
`;
export const MediaSubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 20px;
  img {
    width: 100px;
    margin-bottom: -7px;
  }

  span:last-child {
    color: red;
    font-style: italic;
  }
`;

export const MediaDescWrapper = styled.div`
  p {
    font-size: 18px;
    font-family: cursive;
  }

  ul {
    list-style-type: disc;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
    font-weight: bold;
  }

  @media screen and (max-width: 400px) {
    ul {
      text-align: left;
    }
  }
`;

export const MediaInfoContainer = styled.div`
  padding-top: 20px;

  p {
    font-size: 18px;
    font-family: cursive;
  }

  ul {
    list-style-type: disc;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
    font-weight: bold;
  }

  @media screen and (max-width: 400px) {
    ul {
      text-align: left;
    }
  }
`;
export const MediaInfoTile = styled.h2`
  color: red;
  font-weight: bolder;
  text-transform: capitalize;
  margin-bottom: 10px;
`;
