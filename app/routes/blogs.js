
import express from "express";
const blogsRouter = express.Router();

blogsRouter.get("/", (req, res) => {
  res.send("Get All Blogssssssssssssssssss");
});

export default blogsRouter;
