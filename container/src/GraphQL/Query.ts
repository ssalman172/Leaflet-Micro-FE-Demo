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