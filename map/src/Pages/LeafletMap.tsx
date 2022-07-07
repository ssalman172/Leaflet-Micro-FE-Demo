import React from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, TileLayer, ImageOverlay, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import L, { divIcon } from 'leaflet';
import { Airplane } from 'react-ionicons';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Title = styled.h1`
  color: #eee;
  margin-top: 0;
`

const LeafletMap = () => {
  const iconMarkup = renderToStaticMarkup(<Airplane
    color={'#d83430'}
    title={""}
    height="30px"
    width="30px"
  />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  const latLngBounds = L.latLngBounds([[-6.948658102374332, 107.61851850179244], [-6.9506534302708305, 107.62115493245045]]);

  const showOverlay = () => {
    return <ImageOverlay url="./assets/len.jpg" bounds={latLngBounds} />
  };

  return (
    <Wrapper>
      <MapContainer center={[-6.949496719488826, 107.61966920913646]} zoom={17} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker eventHandlers={{ click: showOverlay }} position={[-6.949496719488826, 107.61966920913646]} icon={customMarkerIcon}>
          <Popup>PT Len Industri</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  )
}

export default LeafletMap