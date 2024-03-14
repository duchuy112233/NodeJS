import express from "express";
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("Get All productssssssss");
});

export default productRouter;
