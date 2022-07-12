import TileMap from "../Models/tileModel"

export const findAll = async () => {
  try {
    return await TileMap.find();
  } catch (error) {
    console.log(error);
  }
}

export const createOne = async (input: any) => {
  try {
    return TileMap.create(input);
  } catch (error) {
    console.log(error);
  }
}

export const updateOne = async (key: string, input: any) => {
  try {
    const TileMapToUpdate = await TileMap.findOne({ key: key });

    Object.keys(input).forEach((value) => {
      if (TileMapToUpdate !== null) {
        (TileMapToUpdate as any)[value] = input[value] || (TileMapToUpdate as any)[value]
      }
    })

    return  await TileMapToUpdate?.save();
  } catch (error) {
    console.log(error);
  }
}

export const deleteOne = async (key: string) => {
  try {
    const deleteTileMap = await TileMap.deleteOne({key: key});
  
    if (deleteTileMap.deletedCount) return {key: key}
  } catch (error) {
    console.log(error);
  }
}