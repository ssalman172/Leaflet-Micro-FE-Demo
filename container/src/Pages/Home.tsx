import React from 'react'
import styled from 'styled-components'
// @ts-ignore
const Sidebar = React.lazy(() => import("Sidebar/Sidebar"));
// @ts-ignore
const LeafletMap = React.lazy(() => import("LeafletMap/LeafletMap"));
import { useQuery } from '@apollo/client';
import { GET_COORDINATES, GET_TILE_LAYERS } from "../GraphQL/Query";

const getCoordinates = () => {
  const { data } = useQuery(GET_COORDINATES);
  try {
    return data.latLng;
  } catch (err) { }
}

const getTileLayers = () => {
  const { data } = useQuery(GET_TILE_LAYERS);
  try {
    return data.layers;
  } catch (err) { }
}

const Wrapper = styled.main`
  display: flex;
  margin: 1rem 48px 0 48px;
  padding-bottom: 35px;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Home = () => {
  return (
    <>
      <Wrapper>
        <Sidebar tileLayers={getTileLayers()} />
        <LeafletMap coordinates={getCoordinates()} tileLayers={getTileLayers()} />
      </Wrapper>
    </>
  )
}

export default Home