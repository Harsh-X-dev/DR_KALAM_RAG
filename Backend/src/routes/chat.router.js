import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  chatController,
  getAllChatsController,
  getAllMessagesController,
} from "../controller/chat.controller.js";

const chatRouter = Router();

chatRouter.post("/", authMiddleware, chatController);

chatRouter.get("/", authMiddleware, getAllChatsController);
chatRouter.get("/messages/:chatId", authMiddleware, getAllMessagesController);

export default chatRouter;
