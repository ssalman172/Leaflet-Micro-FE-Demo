import { createOne, deleteOne, updateOne } from "../../../Dao/TileMap";

const createTileLayer = async (_: any, {input}: any, {}) => {
  return await createOne(input);
}

const updateTileLayer = async (_: any, {key}: any, {}) => {
  return await deleteOne(key);
}

const deleteTileLayer = async (_: any, {key, input}: any, {}) => {
  return await updateOne(key, input)
}

export {createTileLayer, updateTileLayer, deleteTileLayer};