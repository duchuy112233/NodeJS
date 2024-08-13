//      npm init -y
//      npm install express
//      npm i nodemon
//      node ./index.js

//      npm i ejs lab 2

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  console.log(`/ home`);
  res.send(`trang home`);
});
app.get("/product", (req, res, next) => {
  console.log(`product`);
  res.send("trang products");
});
app.get("/product/:id", (req, res, next) => {
  console.log(`product-detaill`);
  res.send(`products detaill id: ${req.params.id} `);
});

app.listen(port, () => {
  console.log(`Ung dung chay voi port ${port}`);
});
