import { gql } from "apollo-server";

export = gql`
  type Coordinate {
    name: String!
    latitude: String!
    longitude: String!
  }

  input CreateCoordinate {
    name: String!
    latitude: String!
    longitude: String!
  }

  input UpdateCoordinate {
    name: String
    latitude: String
    longitude: String
  }

  type DeletePayload{
    name: String!
  }

  type Query {
    latLng: [ Coordinate ]
  }

  type Mutation {
    createCoordinate(input: CreateCoordinate): Coordinate!
    updateCoordinate(name: String, input: UpdateCoordinate): Coordinate!
    deleteCoordinate(name: String): DeletePayload!
  }
`;