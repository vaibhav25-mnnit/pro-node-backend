import dotenv from "dotenv";
import connectToDb from "./db/connetToDb.js";

dotenv.config({
  path: "./env",
});
connectToDb();
