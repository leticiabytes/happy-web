import Leaflet from 'leaflet';
import logoMini from '../assets/images/logoMini.svg';

export const mapIcon = Leaflet.icon({
  iconUrl: logoMini,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});