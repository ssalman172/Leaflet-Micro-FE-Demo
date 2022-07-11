import mongoose from "mongoose";
const { Schema } = mongoose;

const TileMapSchema = new Schema({
  key: {
    type: String,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  attribution: {
    type: String,
    required: true,
  },
  maxNativeZoom: {
    type: Number
  }
});

const TileMap = mongoose.model('TileMap', TileMapSchema);

export default TileMap;