import express from "express";
import ProductsControllers from "../controllers/products.js";

const productRouter = express.Router();
const productsControllers = new ProductsControllers();
//
productRouter.get("/", productsControllers.getAllProducts);
productRouter.post("/", productsControllers.cretateProducts);
//
productRouter.get("/:id", productsControllers.DetailProducts);
productRouter.put("/:id", productsControllers.UpdateProducts);
productRouter.delete("/:id", productsControllers.DeleteProducts);

export default productRouter;