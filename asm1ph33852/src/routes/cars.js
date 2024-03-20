import express from "express";
import CarsControllers from "../controllers/cars.js";

const carRouter = express.Router();
//
const carsControllers = new CarsControllers();
//
carRouter.get("/", carsControllers.getAllCars);
carRouter.post("/", carsControllers.createCars);
//
carRouter.get("/:id", carsControllers.detailCars);
carRouter.put("/:id", carsControllers.updateCars);
carRouter.delete("/:id", carsControllers.deleteCars);


export default carRouter;
