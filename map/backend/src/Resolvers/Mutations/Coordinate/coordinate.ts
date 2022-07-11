import { createOne, deleteOne, updateOne } from "../../../Dao/Coordinate";

const createCoordinate = async (_: any, {input}: any, {}) => {
  return await createOne(input);
}

const updateCoordinate = async (_: any, {name}: any, {}) => {
  return await deleteOne(name);
}

const deleteCoordinate = async (_: any, {name, input}: any, {}) => {
  return await updateOne(name, input)
}

export {createCoordinate, updateCoordinate, deleteCoordinate};