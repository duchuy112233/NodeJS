import express from "express";
import configDB from "./configdb/configdb";
import ProductRouter from "./Router/Product";
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

configDB("mongodb://127.0.0.1:27017/config_nodejs");

app.get("/", (req, res) => {
  res.send("Home");
});
app.use("/products", ProductRouter);

export const viteNodeApp = app;
