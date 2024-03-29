import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import Sidebar from '../../components/Sidebar'
import api from "../../services/api";
import { mapIcon } from "../../utils";

import { Container, SSkeletonLine } from './styles';

import defaultImage from '../../assets/images/default-image.png';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekneds: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(res => {
      setOrphanage(res.data);
    });

  }, [params.id]);

  return (
    <Container id="page-orphanage">
      <Sidebar />

      {orphanage ?
        <main>
          <div className="orphanage-details">
            <img src={orphanage.images[activeImage].url} alt={orphanage.name} />

            <div className="images">
              {orphanage.images.map((image, i) => {
                return (
                  <button 
                    onClick={() => {
                      setActiveImage(i)
                    }}
                    className={activeImage === i ? 'active' : ''}
                    type="button" 
                    key={image.id}>
                    <img src={image.url} alt={orphanage.name}/>
                  </button>
                );
              })}
            </div>
            
            <div className="orphanage-details-content">
              <h1>{orphanage.name}</h1>
              <p>{orphanage.about}</p>
              <div className="map-container">
                <Map 
                  center={[orphanage.latitude, orphanage.longitude]} 
                  zoom={16} 
                  style={{ width: '100%', height: 280 }}
                  dragging={false}
                  touchZoom={false}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                  <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                </Map>
                <footer>
                  <a target="_blank" rel="noopener noreferrer" href={`http://www.google.com/maps/place/${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
                </footer>
              </div>

              <hr />

              <h2>Instruções para visita</h2>
              <p>{orphanage.instructions}</p>

              <div className="open-details">
                <div className="hour">
                  <FiClock size={32} color="#15B6D6" />
                  {orphanage.opening_hours}
                </div>
                {orphanage.open_on_weekneds ? 
                  <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
                  :
                  <div className="open-on-weekends">
                  <FiInfo size={32} color="#FF6690" />
                  Não Atendemos <br />
                  fim de semana
                </div>
                }
              </div>
              <button type="button" className="contact-button">
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
              </button>
            </div>
          </div>
        </main>
      :
      <main>
        <div className="orphanage-details">
          <img src={defaultImage} alt="carregando..." />

          <div className="images">
            <button 
              type="button" >
              <SSkeletonLine />
            </button>
            <button 
              type="button" >
              <SSkeletonLine />
            </button>
          </div>
          
          <div className="orphanage-details-content">
            <div className="map-container">
              <SSkeletonLine />
            </div>
            <div className="open-details">
              <SSkeletonLine />
            </div>
            <button type="button" className="contact-button">
              <SSkeletonLine />
            </button>
          </div>
        </div>
      </main>
      }
    </Container>
  );
}