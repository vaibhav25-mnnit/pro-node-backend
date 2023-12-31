import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_CONNECTION_URL}${DB_NAME}`
    );
    console.log(
      "Successfully connected to database....✌️✌️\nhost:-" +
        connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Mongodb connection error:- " + error);
    process.exit();
  }
};

export default connectToDb;
