import styled from 'styled-components';

export const ArtGalleryContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 20px;
  }

  h4 {
    font-size: 40px;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
