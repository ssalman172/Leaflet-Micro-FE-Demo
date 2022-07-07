import React from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, TileLayer, ImageOverlay, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import L, { divIcon } from 'leaflet';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const MapWrapper = styled.div`
  background: #393E46;
  padding: 2%;
  border-radius: 4px;
  width: 80vw;
  min-height: 80vh;
  opacity: 90%;
`

const Title = styled.h1`
  color: #eee;
  margin-top: 0;
`

const Map = () => {
  const iconMarkup = renderToStaticMarkup(<img src='./assets/yellow-plane.svg' height={30} />);
  const shadowMarkup = renderToStaticMarkup(<img src="./assets/shadow-leaf.png" height={30} />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  const customMarkerShadow = divIcon({
    html: shadowMarkup,
  });
  const latLngBounds = L.latLngBounds([[-6.948658102374332, 107.61851850179244], [-6.9506534302708305, 107.62115493245045]]);
  const dummyIcon = L.icon({
    iconUrl: './assets/yellow-plane.svg',
    iconSize: [30, 30], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  const showOverlay = () => {
    return <ImageOverlay url="./assets/len.jpg" bounds={latLngBounds} />
  };

  return (
    <Wrapper>
      <MapWrapper>
        <Title>The Map</Title>
        <MapContainer center={[-6.949496719488826, 107.61966920913646]} zoom={17} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker eventHandlers={{ click: showOverlay }} position={[-6.949496719488826, 107.61966920913646]} icon={customMarkerIcon}>
            <Popup>Ini popup</Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </Wrapper>
  )
}

export default Map