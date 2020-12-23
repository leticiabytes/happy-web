import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import { Container, Footer } from './styles';
import ButtonNavigation from '../../components/ButtonNavigation'
import Logo from '../../assets/images/Logo.svg';

const LandingPage: React.FC = () => {
  return (
      <Container>
        <div className="content-wrapper">
          <img src={Logo} alt="logo"/>
            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>Visite orfanatos e mude o dia
  de muitas crianças.</p>
            </main>
          <div className="location">
            <strong>Palmas</strong>
            <span>Tocantins</span>
          </div>
          <Footer>
            <ButtonNavigation url="/app" color="#FFD000" size="80px">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
            </ButtonNavigation>
          </Footer>
        </div>
      </Container>
  );
};

export default LandingPage;
