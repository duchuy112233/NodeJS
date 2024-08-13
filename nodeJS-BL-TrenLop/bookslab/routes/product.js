import { Router } from "express";
import ProductsControllers from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermision";

const productRouter = Router();

const productsControllers = new ProductsControllers();
//
productRouter.get("/", productsControllers.getAllProducts);
productRouter.post("/",checkPermission, productsControllers.cretateProducts);
//
productRouter.get("/:id", productsControllers.DetailProducts);
productRouter.put("/:id",checkPermission, productsControllers.UpdateProducts);
productRouter.delete("/:id",checkPermission, productsControllers.DeleteProducts);

export default productRouter;
