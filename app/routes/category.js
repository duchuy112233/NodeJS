import express from "express";
const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  res.send("Get All categoryyyyyy");
});
categoryRouter.post("/", (req, res) => {
  res.send("Get All category ");
});
categoryRouter.get("/:id", (req, res) => {
  res.send("Get All category Detail");
});
categoryRouter.put("/:id", (req, res) => {
  res.send("Get All category Update");
});
categoryRouter.delete("/:id", (req, res) => {
  res.send("Get All category Delete");
});

export default categoryRouter;
