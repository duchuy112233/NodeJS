import express from "express";
const booksRouter = express.Router();

booksRouter.get("/", (req, res) => {
  res.send("Get All Books");
});
booksRouter.post("/", (req, res) => {
  res.send("Add new Book");
});
booksRouter.get("/:id", (req, res) => {
  res.send("Book ID Detail");
});
booksRouter.put("/:id", (req, res) => {
  res.send("Update Book");
});
booksRouter.delete("/:id", (req, res) => {
  res.send("Delete Book");
});
export default booksRouter;
