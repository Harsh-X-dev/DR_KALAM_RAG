import { Router } from "express";
import * as authcontroller from "../controller/auth.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/login", authcontroller.loginController);
authRouter.post("/logout", authcontroller.logoutController);
authRouter.post("/register", authcontroller.registerController);
authRouter.get("/get-user", authMiddleware, authcontroller.getUserController);

export default authRouter;
