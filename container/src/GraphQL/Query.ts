import { gql } from "@apollo/client";

export const GET_COORDINATES = gql`
  query LatLng {
    latLng {
      name
      latitude
      longitude
    }
  }
`;

export const GET_TILE_LAYERS = gql`
  query Layers {
    layers {
      key
      url
      attribution
      maxNativeZoom
    }
  }
`;