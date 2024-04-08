import { Router } from "express";
const booksRouter = Router();
import BooksController from "../controllers/books";
import { checkPermission } from "../middlewares/checkPermision";

const booksController = new BooksController();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.post("/", checkPermission,booksController.createBook);

booksRouter.get("/:id", booksController.getBookDetail);
booksRouter.put("/:id", checkPermission,booksController.updateBook);
booksRouter.delete("/:id",checkPermission, booksController.deleteBook);

export default booksRouter;
