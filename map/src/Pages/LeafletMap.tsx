import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, TileLayer, ImageOverlay, Popup, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import L, { divIcon } from 'leaflet';
import { Airplane } from 'react-ionicons';
import PubSub from 'pubsub-js';
const { BaseLayer } = LayersControl;

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  width: 100%;
`

const LeafletMap = () => {
  const [currentTile, setCurrentTile] = useState('OpenStreetMap');

  const changeLayer = (msg: string, data: string) => {
    setCurrentTile(data);
  }

  useEffect(() => {
    PubSub.subscribe('MAP_LAYER', changeLayer);
  })

  const iconMarkup = renderToStaticMarkup(<Airplane
    color={'#d83430'}
    rotate
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
  }

  return (
    <Wrapper>
      <MapContainer 
        center={[-6.949496719488826, 107.61966920913646]} 
        zoom={6} 
        scrollWheelZoom={true}
        style={{
          borderRadius: '0 12px 12px 0',
          width: '100%'
        }}
      >
        <LayersControl>
          <BaseLayer checked={currentTile === 'OpenStreetMap'} name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </BaseLayer>
          <BaseLayer checked={currentTile === 'StadiaAliadeSmoothDark'} name="Stadia Aliade Smooth Dark">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              attribution="&copy; Stadia Maps, &copy; OpenMapTiles &copy; OpenStreetMap contributors"
              maxNativeZoom={20}
            />
          </BaseLayer>
          <BaseLayer checked={currentTile === 'EsriWorldmagery'} name="Esri Worldmagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </BaseLayer>
        </LayersControl>
        <Marker eventHandlers={{ click: showOverlay }} position={[-6.949496719488826, 107.61966920913646]} icon={customMarkerIcon}>
          <Popup>PT Len Industri</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  )
}

export default LeafletMap