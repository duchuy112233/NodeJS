import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";

// require("dotenv").config();

// const port = process.env.PORT || 3000; // Nếu PORT không được định nghĩa trong file .env thì mặc định là 3000
// const dbUrl = process.env.DB_URL;

const app = express();
const port = 3000;

// Kết nối MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/db_nodejs");

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
