import { Router } from "express";
const authRouter = Router();
import AuthController from "../controllers/auth.js";

const authController = new AuthController();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default authRouter;