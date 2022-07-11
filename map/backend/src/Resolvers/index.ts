import TileMapQueries from './Queries/TileMap'
import TileMapMutations from './Mutations/TileMap'
import CoordinateQueries from './Queries/Coordinate'
import CoordinateMutations from './Mutations/Coordinate'

export = {
  Mutation: {
    ...TileMapMutations, ...CoordinateMutations
  },
  Query: {
    ...TileMapQueries, ...CoordinateQueries
  }
}