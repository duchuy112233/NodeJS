import express from "express";
const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("Get All productssssssss");
});
productRouter.post("/", (req, res) => {
  res.send("Get All product ");
});
productRouter.get("/:id", (req, res) => {
  res.send("Get All product Detail");
});
productRouter.put("/:id", (req, res) => {
  res.send("Get All product Update");
});
productRouter.delete("/:id", (req, res) => {
  res.send("Get All product Delete");
});

export default productRouter;
