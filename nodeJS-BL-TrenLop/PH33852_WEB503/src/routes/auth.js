import { Router } from 'express';
import Authcontroler from '../controllers/AuthController.js';

const AuthRouter = Router();
const authcontroler = new Authcontroler();
AuthRouter.post("/register",authcontroler.dangky)
AuthRouter.post("/login",authcontroler.login)

export default AuthRouter

