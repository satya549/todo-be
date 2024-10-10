import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.mongo_URL as string;

const connectDB = async () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("DB connected susseccfully");
    })
    .catch((error) => {
      console.log("DB connection failed", error);
    });
};

export default connectDB;
