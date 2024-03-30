import { Router } from "express";
import booksRouter from "./books";
import authRouter from "./auth";
import productRouter from "./product";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/books", booksRouter);
router.use("/product", productRouter);


export default router;
