import React from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

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
  const iconMarkup = renderToStaticMarkup(<img src='./pin.png' height={30} />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  return (
    <Wrapper>
      <MapWrapper>
        <Title>The Map</Title>
        <MapContainer center={[-6.9496521, 107.6174784]} zoom={17} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-6.9496521, 107.6174784]} icon={customMarkerIcon}>
            <Popup>
              PT Len Industri
            </Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </Wrapper>
  )
}

export default Map