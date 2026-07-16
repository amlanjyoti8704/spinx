import { Router } from "express";

import { protect } from "../auth/auth.middleware.js";

import {
  getConversations,
  getMessages,
  sendMessage,
} from "./chat.controller.js";

const router = Router();

router.use(protect);

router.get("/", getConversations);

router.get("/:conversationId/messages", getMessages);

router.post("/:conversationId/messages", sendMessage);

export default router;