import { Router } from "express";

import laptopRoutes from "./laptops.js";
import AuthRouter from "./auth.js";


const router = Router();

router.get("/", (req, res) => {
  res.send("Homee");
});
router.use("/laptops", laptopRoutes);
router.use("/auth", AuthRouter);
