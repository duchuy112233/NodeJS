import { Router } from "express";
import MobileRouter from "./mobiles";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});
router.use("/mobiles", MobileRouter);

export default router;
