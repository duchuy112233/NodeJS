
import express from "express";
const blogsRouter = express.Router();

blogsRouter.get("/", (req, res) => {
  res.send("Get All Blogssssssssssssssssss");
});
blogsRouter.post("/", (req, res) => {
  res.send("Get All Blogs ");
});
blogsRouter.get("/:id", (req, res) => {
  res.send("Get All Blogs Detail");
});
blogsRouter.put("/:id", (req, res) => {
  res.send("Get All Blogs Update");
});
blogsRouter.delete("/:id", (req, res) => {
  res.send("Get All Blogs Delete");
});

export default blogsRouter;
