import styled from 'styled-components';

export const NewsContainer = styled.div`
  padding-top: 30px;
`;

export const NewsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: var(--text-color);
  font-size: 2rem;
`;

export const NewsCardWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const NewsCard = styled.div`
  width: 350px;
  border: 0.1px solid var(--text-color);
  border-radius: 5px;
`;
export const NewsCardTitle = styled.div`
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
export const NewsCardImg = styled.div`
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const NewsCardOptions = styled.div`
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
