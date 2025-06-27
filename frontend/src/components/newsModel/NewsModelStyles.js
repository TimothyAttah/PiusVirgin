import styled from 'styled-components';

export const NewsModelContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: #fff;
  color: var(--text-color);
  border-radius: 10px;

  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

export const NewsModelWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const NewsModelPicsWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  height: 500px;
  overflow-y: auto;
  margin-top: 100px;
`;

export const GridImageBox = styled.div`
  --gap: 10px;
  --num-cols: 3;
  --row-height: 200px;
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

  .image-grid-row-4 {
    grid-row: span 4;
  }

  @media screen and (max-width: 1024px) {
    --num-cols: 2;
    --row-height: 200px;
  }
`;

export const NewsModelDetailsWrapper = styled.div`
  max-width: 750px;
  width: 100%;
`;

export const NewsModelTitleBox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  h2,
  h4 {
    font-size: 3rem;
    padding: 10px 0;
  }
`;

export const NewsModelInfo = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: auto;

  p {
    font-size: 2rem;
    line-height: 30px;
    padding-bottom: 10px;
  }
`;
