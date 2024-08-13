import express from "express";
const booksRouter = express.Router();

import BooksController from "../controllers/books.js";


const booksController = new BooksController();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", booksController.createBook);

booksRouter.get("/:id", booksController.getBookDetail);
booksRouter.put("/:id", booksController.updateBook);

booksRouter.delete("/:id", booksController.deleteBooks);

export default booksRouter;