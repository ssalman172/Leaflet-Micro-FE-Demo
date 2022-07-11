import { gql } from "apollo-server";

export = gql`
  type TileLayer {
    key: String!
    url: String!
    attribution: String!
    maxNativeZoom: Int
  }

  input CreateTileLayer {
    key: String!
    url: String!
    attribution: String!
    maxNativeZoom: Int
  }

  input UpdateTileLayer {
    key: String
    url: String
    attribution: String
    maxNativeZoom: Int
  }

  type DeletePayload{
    key: String!
  }

  type Query {
    layers: [ TileLayer ]
  }

  type Mutation {
    createTileLayer(input: CreateTileLayer): TileLayer!
    updateTileLayer(key: String, input: UpdateTileLayer): TileLayer!
    deleteTileLayer(key: String): DeletePayload!
  }
`;