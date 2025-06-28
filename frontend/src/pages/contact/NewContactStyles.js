import styled from 'styled-components';
import contactImg from '../../assets/allAds.jpeg';

export const ContactContainer = styled.div`
  width: 100%;
`;
export const ContactWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url(${contactImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-transform: uppercase;
    color: red;
    font-weight: bold;
  }

  h1 {
    color: red;
    font-size: 40px;
    padding-top: 10px;
  }

  @media screen and (max-width: 750px) {
    height: 50vh;
  }

  @media screen and (max-width: 500px) {
    height: 30vh;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 20px;

  @media screen and (max-width: 750px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
export const ContactInfo = styled.div`
  max-width: 500px;
  width: 100%;
  /* padding: 0 20px; */
  h3 {
    font-size: 16px;
    text-transform: capitalize;
    color: #444;
    position: relative;
    padding-bottom: 15px;

    &::before {
      content: '';
      width: 90px;
      height: 3px;
      background-color: blue;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;
export const ContactInfoAddress = styled.p`
  color: #777;
  font-size: 18px;
  margin: 20px 0;
`;
export const ContactInfoEmail = styled.p`
  color: navy;
  font-weight: bold;
  font-size: 18px;
`;

export const ContactInfoIconBox = styled.div`
  padding-top: 20px;
  p {
    font-weight: bold;
    color: #333;
  }

  div {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 30px;
    padding-top: 10px;
    svg {
      cursor: pointer;
    }

    svg:nth-child(1) {
      color: blue;
    }

    svg:nth-child(2) {
      color: navy;
    }
    svg:nth-child(3) {
      color: red;
    }
  }
`;
export const ContactInfoNumberBox = styled.div`
  padding-top: 30px;

  p {
    font-weight: bold;
    color: #333;
  }

  h4 {
    font-size: 25px;
    padding-top: 5px;
    color: skyblue;
  }
`;

export const ContactFormContainer = styled.div`
  max-width: 500px;
  width: 100%;
  h2 {
    color: skyblue;
    font-weight: bold;
    font-size: 35px;

    position: relative;
    padding-bottom: 15px;

    &::before {
      content: '';
      width: 40px;
      height: 3px;
      background-color: blue;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  small {
    font-size: 14px;
    padding: 20px 0;
    display: inline-block;
  }

  @media screen and (max-width: 750px) {
    /* text-align: center; */
  }
`;

export const ContactForm = styled.form`
  width: 100%;

  div {
    padding-bottom: 15px;
  }

  label {
    display: block;
    padding-bottom: 5px;
  }

  input,
  textarea {
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }

  textarea {
    height: 250px;
  }

  button {
    width: 150px;
    height: 40px;
    background-color: crimson;
    color: #fff;
    border-radius: 10px;
  }
`;
