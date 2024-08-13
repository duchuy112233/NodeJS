import { Router } from "express";
import ProductControler from "../controller/Product";

const ProductRouter = Router()
const productControler = new ProductControler()

ProductRouter.get("/",productControler.GetAllProduct)
ProductRouter.post("/",productControler.CreateProduct)
ProductRouter.get("/:id",productControler.DetailProduct)
ProductRouter.put("/:id",productControler.UpdateProduct)
ProductRouter.delete("/:id",productControler.DeleteProduct)

export default ProductRouter