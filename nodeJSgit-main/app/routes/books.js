import { Router } from "express";
const booksRouter = Router();
import BooksController from "../controllers/books.js";

const booksController = new BooksController();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", booksController.createBook);
booksRouter.get("/:id", booksController.getBookDetail);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

export default booksRouter;