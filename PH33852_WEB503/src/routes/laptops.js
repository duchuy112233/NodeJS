import express from "express";
import LaptopsControllers from "../controllers/LaptopsController.js";


const laptopRoutes = express.Router();
//
const laptopsControllers = new LaptopsControllers();

laptopRoutes.get("/", laptopsControllers.getAllLaptops);
laptopRoutes.post("/", laptopsControllers.cretateLaptops);
//
laptopRoutes.get("/:id", laptopsControllers.DetailLaptops);
laptopRoutes.put("/:id", laptopsControllers.UpdateLaptops);
laptopRoutes.delete("/:id", laptopsControllers.DeleteLaptops);

export default laptopRoutes;
