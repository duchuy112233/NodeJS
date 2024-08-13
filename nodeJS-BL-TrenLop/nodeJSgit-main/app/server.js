import express from "express";
import router from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
connectMongoDB("mongodb://127.0.0.1:27017/db_nodejs");
app.use("/", router);
export const viteNodeApp = app;