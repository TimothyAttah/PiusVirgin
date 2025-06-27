import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const HomeWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: auto;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const HomeSliderContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;
export const HomeContentContainer = styled.div`
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;


  h2 {
    font-size: 3rem;
    color: var(--text-color);
    text-align: center;
    padding-top: 20px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    padding-top: 10px;
    color: var(--text-color);
    opacity: 0.8;
  }
`;

export const NewsLogoBox = styled.div`
  margin: auto;
  width: 200px;
  img {
    width: 100%;
  }
`;

export const GridImageBox = styled.div`
  --gap: 10px;
  --num-cols: 4;
  --row-height: 300px;
  box-sizing: border-box;
  padding: var(--gap);
  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-height);
  gap: var(--gap);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-grid-col-2 {
    grid-column: span 2;
  }

  .image-grid-row-2 {
    grid-row: span 2;
  }

  @media screen and (max-width: 1024px) {
    --num-cols: 2;
    --row-height: 200px;
  }
`;
