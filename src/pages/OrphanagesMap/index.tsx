import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';
import { mapIcon } from '../../utils';

import { Container, Header, Footer, Button } from './styles';
import ButtonNavigation from '../../components/ButtonNavigation';

import { FiArrowRight, FiPlus } from 'react-icons/fi';
import logoMini from '../../assets/images/logoMini.svg';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  
  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    });

  }, []);

  return (
    <Container>
      <aside>
        <Header>
          <img src={logoMini} alt="logo" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </Header>
        <Footer>
          <strong>Palmas</strong>
          <span>Tocantins</span>
        </Footer>
      </aside>
      <Map 
          center={[-10.226389,-48.3255016]}
          zoom={11}
          style={{
            width: '100%', height: '100%'
          }}
        >
          {orphanages.map(orphanage => {
            return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            > 
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="mapPopup">
                  {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`} className="buttonLink">
                    <FiArrowRight size={20} color="#FFF" />
                  </Link>
                </Popup>
            </Marker>
          )})}
          {/* <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        </Map>

      <Button>
        <ButtonNavigation url="/orphanages/create" color="#15C3D6" size="80px">
          <FiPlus size={32} color="#FFF"/>
        </ButtonNavigation>
      </Button>
    </Container>
  );
};

export default OrphanagesMap;
