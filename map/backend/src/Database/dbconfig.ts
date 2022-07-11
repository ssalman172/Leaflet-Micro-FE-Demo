require('dotenv').config();
import mongoose from "mongoose";

const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;

const connectDB = () => {
  return mongoose.connect(DATABASE_CONNECTION_STRING as string, {}, err => {
    if (err) {
      console.error('Connection to DB failed');
    } else {
      console.log('Connection to DB was successful');
    }
  })
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed"));

export = connectDB;