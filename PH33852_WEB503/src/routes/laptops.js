import {Router} from "express";
import LaptopsController from "../controllers/LaptopsController";


const laptopRoutes = Router();
//
const laptopsController = new LaptopsController();

laptopRoutes.get("/", laptopsController.getAlllaptop);
laptopRoutes.post("/", laptopsController.create);
//
laptopRoutes.get("/:id", laptopsController.detail);
laptopRoutes.put("/:id", laptopsController.update);
laptopRoutes.delete("/:id", laptopsController.delete);

export default laptopRoutes;
