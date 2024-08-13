import { Router } from "express";
import MobilesController from "../controllers/Mobiles";

const mobilesController = new MobilesController();


const MobileRouter = Router();

MobileRouter.get("/", mobilesController.GetallMobile);
MobileRouter.post("/", mobilesController.createMobile);

MobileRouter.get("/:id", mobilesController.GetDetailMobile);
MobileRouter.put("/:id", mobilesController.UpdateMobile);
MobileRouter.delete("/:id", mobilesController.deleteMobile);

export default MobileRouter;
