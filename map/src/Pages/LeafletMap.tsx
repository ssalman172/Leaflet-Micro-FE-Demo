import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MapContainer, Marker, TileLayer, ImageOverlay, Popup, LayersControl, Rectangle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import L, { divIcon } from 'leaflet';
import { Airplane } from 'react-ionicons';
import PubSub from 'pubsub-js';
const { BaseLayer } = LayersControl;

interface Props {
  coordinates?: Array<any>,
  tileLayers?: Array<any>
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  width: 100%;
`

const LeafletMap = ({ coordinates, tileLayers }: Props) => {
  const markerCoordinates = coordinates;
  const layers = tileLayers;

  const [currentTile, setCurrentTile] = useState('StadiaAliadeSmoothDark');

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
        zoom={15}
        scrollWheelZoom={true}
        style={{
          borderRadius: '0 12px 12px 0',
          width: '100%'
        }}
      >
        <LayersControl>
          {layers &&
            layers.map((layer) => {
              return (
                <BaseLayer key={layer.key} checked={currentTile === layer.key} name={(layer.key).split(/(?=[A-Z])/).join(' ')}>
                  <TileLayer
                    url={layer.url}
                    attribution={layer.attribution}
                  />
                </BaseLayer>
              )
            })
          }
          <LayersControl.Overlay checked name="Show Overlays">
            <Rectangle color='red' bounds={latLngBounds} />
          </LayersControl.Overlay>
        </LayersControl>
        {markerCoordinates &&
          markerCoordinates.map((coordinate) => {
            return (
              <Marker key={coordinate.name} eventHandlers={{ click: showOverlay }} position={[Number(coordinate.latitude), Number(coordinate.longitude)]} icon={customMarkerIcon}>
                <Popup>{coordinate.name}</Popup>
              </Marker>
            );
          })
        }
      </MapContainer>
    </Wrapper>
  )
}

export default LeafletMap