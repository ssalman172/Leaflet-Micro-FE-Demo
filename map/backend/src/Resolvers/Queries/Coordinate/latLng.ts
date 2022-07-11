import { findAll } from "../../../Dao/Coordinate"

export = async (_: any, {}, {}) => {
  return await findAll();
}