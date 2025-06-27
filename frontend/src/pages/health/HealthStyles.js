import styled from 'styled-components';

export const HealthManagementContainer = styled.div`
  padding: 20px;
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;
export const HealthManagementTitle = styled.h1`
  color: darkred;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  padding-bottom: 30px;

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;
export const HealthManagementSubTitle = styled.h4`
  color: navy;
  font-size: 20px;
  padding-bottom: 20px;
`;
export const HealthManagementDesc = styled.p`
  font-family: cursive;
  font-size: 18px;
  padding-bottom: 20px;
`;
export const HealthManagementList = styled.ul`
  list-style: disc;
  padding-left: 40px;
  font-weight: bold;
  li {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 400px) {
    text-align: left;
  }
`;
