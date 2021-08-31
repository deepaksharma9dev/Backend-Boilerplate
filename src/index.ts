import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import sequelize from "./db/db";
import UserRouter from "./api/routers/Users";

const app: Application = express();
app.use("/api/users", UserRouter);

app.listen(process.env.PORT || 6000, async () => {
  console.log("server is running");
  try {
    await sequelize.authenticate();
    console.log("database has connected");
  } catch (err) {
    console.error(err.message);
  }
});
