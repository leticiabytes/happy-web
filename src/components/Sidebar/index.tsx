import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Container, Button } from './styles';
import mapMarkerImg from '../../assets/images/logoMini.svg';


const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  
  return (
    <Container>
        <img src={mapMarkerImg} alt="Happy" />

          <Button onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </Button>
    </Container>
  );
};

export default Sidebar;
