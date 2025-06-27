import styled from 'styled-components';

export const HomeNewsCard = styled.div`
  width: 350px;
  border: 0.1px solid var(--text-color);
  border-radius: 5px;
`;
export const HomeNewsCardTitle = styled.div`
  width: 100%;
  background-color: crimson;
  color: var(--text-color);
  color: #fff;

  padding: 10px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  h4 {
    text-transform: capitalize;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 18px;
  }
`;
export const HomeNewsCardImg = styled.div`
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const HomeNewsCardOptions = styled.div`
  width: 100%;
  background-color: blue;
  /* color: var(--text-color); */
  color: #fff;

  padding: 12px 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: var(--text-color);
    background-color: crimson;
    color: #fff;

    padding: 5px 10px;
    text-transform: capitalize;
    font-weight: bold;
    border-radius: 5px;
  }
`;
