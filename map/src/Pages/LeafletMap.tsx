import React from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, TileLayer, ImageOverlay, Popup, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import L, { divIcon } from 'leaflet';
import { Airplane } from 'react-ionicons';
const { BaseLayer } = LayersControl;

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
`

const Title = styled.h1`
  color: #eee;
  margin-top: 0;
`

const LeafletMap = () => {
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
      <MapContainer center={[-6.949496719488826, 107.61966920913646]} zoom={6} scrollWheelZoom={true}>
        <LayersControl>
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </BaseLayer>
          <BaseLayer name="NASA Gibs Blue Marble">
            <TileLayer
              url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
              attribution="&copy; NASA Blue Marble, image service by OpenGeo"
              maxNativeZoom={8}
            />
          </BaseLayer>
          <BaseLayer name="Stadia Aliade Smooth Dark">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              attribution="&copy; Stadia Maps, &copy; OpenMapTiles &copy; OpenStreetMap contributors"
              maxNativeZoom={20}
            />
          </BaseLayer>
          <BaseLayer name="Esri Worldmagery">
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