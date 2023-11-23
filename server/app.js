import express from "express";
import cors from "cors";

import { db } from "./database/db.js";
import pixel from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", pixel);

const connectToDatabase = async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.log(`Error de conexion: ${error}`);
  }
};

connectToDatabase();

app.listen(8000, () => {
  console.log(`SERVER: http://localhost:8000`);
});
