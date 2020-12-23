import styled from 'styled-components';

import Ilusta02 from '../../assets/images/Ilustra02.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 688px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url(${Ilusta02}) no-repeat 80% center;

    > main {
      max-width: 350px;
    }
    
    > main h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 78px;
    }

    > main p {
      font-style: normal;
      font-weight: 600;
      margin-top: 48px;
      font-size: 24px;
      line-height: 34px;
    }

    .location {
      position: absolute;
      right: 0;
      top: 0;
      
      font-size: 24px;
      line-height: 34px;

      display: flex;
      flex-direction: column;

      text-align: right;

      > strong {
          font-weight: 800;
          font-size: 24px;
          line-height: 34px;
      }
    }
  }
`;


export const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`