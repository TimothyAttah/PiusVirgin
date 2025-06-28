import styled from 'styled-components';
import aboutImg from '../../assets/aboutUs.jpg';

export const AboutContainer = styled.div`
  width: 100%;
`;
export const AboutHeroSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${aboutImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
export const AboutHeroSectionInfo = styled.div`
  max-width: 500px;
  background-color: white;
  padding: 20px;
  position: absolute;
  top: 100px;
  right: 100px;
  opacity: 0.75;

  h2 {
    font-size: 30px;
    padding-bottom: 10px;
  }

  p {
    width: 100%;
    font-size: 18px;
    img {
      width: 250px;
      margin-bottom: -5px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    right: 0;
  }
`;
export const AboutWhatWeDo = styled.div`
  width: 100%;
  background-color: crimson;
  color: #fff;
  padding: 40px;
`;
export const AboutWhatWeDoTitle = styled.div`
  small {
    font-size: 10px;
    opacity: 0.7;
    text-transform: uppercase;
  }

  h2 {
    text-transform: capitalize;
    font-size: 35px;
  }

  border-bottom: 1px solid #aaa;
  text-align: center;
`;

export const AboutWhatWeDoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
  gap: 20px;

  @media screen and (max-width: 570px) {
    gap: 40px;
  }
`;
export const AboutWhatWeDoItem = styled.div`
  max-width: 900px;
  height: 120px;
  display: flex;
  gap: 20px;

  div:first-child {
    height: 50px;
    width: 100px;

    svg {
      font-size: 60px;
    }
  }

  div:last-child {
    max-width: 700px;
    width: 100%;
    h4 {
      text-transform: capitalize;
      padding-bottom: 10px;
      font-size: 23px;
    }

    p {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 570px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* gap: 30px; */
  }

  @media screen and (max-width: 350px) {
    height: auto;
  }
`;

export const AboutHistoryWrapper = styled.div`
  width: 100%;
  background-color: #fff9f926;
  text-align: center;
  margin-top: 50px;

  h2 {
    font-size: 40px;
    position: relative;
    padding-bottom: 15px;
    color: navy;

    &::after {
      content: '';
      width: 150px;
      height: 3px;
      background-color: navy;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 5px;
    }
  }
`;

export const AboutHistory = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AboutHistoryPic = styled.div`
  width: 430px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const AboutHistoryInfo = styled.div`
  max-width: 900px;
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  padding: 0 20px;

  p {
    text-align: left;
    font-size: 18px;
    line-height: 26px;
    padding-bottom: 10px;
    img {
      width: 90px;
      margin-bottom: -5px;
    }
  }
`;
// export const AboutContainer = styled.div``;
// export const AboutContainer = styled.div``;
