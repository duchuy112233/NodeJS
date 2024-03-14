import express from "express";
const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  res.send("Get All categoryyyyyy");
});

export default categoryRouter;
