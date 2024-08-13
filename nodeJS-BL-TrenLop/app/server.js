import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";


const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// Kết nối MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/db_nodejs");

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});