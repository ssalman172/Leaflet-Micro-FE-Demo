import Coordinate from "../Models/coordinateModel"

export const findAll = async () => {
  try {
    return await Coordinate.find();
  } catch (error) {
    console.log(error);
  }
}

export const createOne = async (input: any) => {
  try {
    return Coordinate.create(input);
  } catch (error) {
    console.log(error);
  }
}

export const updateOne = async (name: string, input: any) => {
  try {
    const CoordinateToUpdate = await Coordinate.findOne({ name: name });

    if (CoordinateToUpdate !== null) {
      CoordinateToUpdate.name = input?.name;
      CoordinateToUpdate.latitude = input?.latitude;
      CoordinateToUpdate.longitude = input?.longitude;
    }

    return  await CoordinateToUpdate?.save();
  } catch (error) {
    console.log(error);
  }
}

export const deleteOne = async (name: string) => {
  try {
    const deleteCoordinate = await Coordinate.deleteOne({name: name});
  
    if (deleteCoordinate.deletedCount) return {name: name}
  } catch (error) {
    console.log(error);
  }
}