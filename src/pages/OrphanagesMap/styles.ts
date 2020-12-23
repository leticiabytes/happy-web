import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  position: relative;

  .mapPopup .leaflet-popup-content-wrapper {  
    background: (255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .mapPopup .leaflet-popup-content {  
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mapPopup .leaflet-popup-content .buttonLink {  
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2668px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mapPopup .leaflet-popup-tip-container {  
    display: none;
  }

  > aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    padding: 88px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  > h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  > p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  > strong {
    font-weight: 800;
  }
`;

export const Button = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 22px;

  z-index: 1000;
`;
