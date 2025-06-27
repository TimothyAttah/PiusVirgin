import styled, { css } from 'styled-components';
import sliderImg1 from '../../assets/hero-pix-1.png';
import sliderImg2 from '../../assets/hero-pix-3.jpg';
import sliderImg3 from '../../assets/hero-pix-2.png';



export const SliderContainer = styled.div`
  overflow-x: hidden;
`;

export const Slider = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  overflow: hidden;

  @keyframes progress {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
export const SliderItems = styled.div`
  height: 100%;
  .active {
    display: flex;
  }
`;

export const SliderItem = styled.div`
  height: 100%;
  display: flex;
  display: none;
`;
export const SliderImg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: zoom 1s linear forwards;
  background-attachment: fixed;

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }

  ${(props) =>
    props.slider === 'slider1' &&
    css`
      background-image: url(${sliderImg1});
    `}
  ${(props) =>
    props.slider === 'slider2' &&
    css`
      background-image: url(${sliderImg2});
    `}
     ${(props) =>
    props.slider === 'slider3' &&
    css`
      background-image: url(${sliderImg3});
    `}
`;
export const SliderCaption = styled.div`
  position: relative;
  max-width: 1170px;
  z-index: 10;
  margin: auto;
  flex-grow: 1;
  padding: 15px;

  h1 {
    margin: 0;
    font-size: 50px;
    animation: text 1s ease forwards;
    color: var(--text-color);
  }

  p {
    margin: 10px 0 0;
    font-size: 20px;
    animation: text 1s ease forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  @keyframes text {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 35px;
    }


  }
`;
export const SliderCaptionText = styled.div``;
// export const Slider = styled.div``;

export const SlideInfo = styled.div`
  position: absolute;
  width: 280px;
  padding: 15px;
  left: 30px;
  bottom: 50px;
  background-color: #fff;
  padding-right: 50px;

  .meter {
    height: 5px;
    background-color: #d5d5d5;
    width: 100%;
  }

  .meter .inner {
    width: 0;
    background-color: blue;
    height: 5px;
    transition: all 0.8s linear;
  }

  .number {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 35px;
    /* background-color:blue; */
    color: #fff;
    color: #000;
    text-align: center;
    line-height: 35px;
  }
`;
export const Progress = styled.div``;
