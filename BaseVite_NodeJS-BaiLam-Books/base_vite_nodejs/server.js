import express from "express";
import configDB from "./config/dbconfig";
import booksRouter from "./routes/books";
const app = express();

//
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//

configDB("mongodb://127.0.0.1:27017/config_nodejs");
app.get("/", (req, res) => {
  res.send("Home");
});
app.use("/books", booksRouter);

export const viteNodeApp = app;
