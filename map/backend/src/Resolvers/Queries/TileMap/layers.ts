import { findAll } from "../../../Dao/TileMap"

export = async (_: any, {}, {}) => {
  return await findAll();
}