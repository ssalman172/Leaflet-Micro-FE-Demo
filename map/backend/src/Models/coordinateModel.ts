import mongoose from "mongoose";
const { Schema } = mongoose;

const CoordinateSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  }
});

const Coordinate = mongoose.model('Coordinate', CoordinateSchema);

export default Coordinate;