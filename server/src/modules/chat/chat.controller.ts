import { Response } from "express";
import { AuthRequest } from "../auth/auth.middleware.js";
import { chatService } from "./chat.service.js";
import { getIO } from "./socket.js";

export async function getConversations(
  req: AuthRequest,
  res: Response
) {
  const conversations =
    await chatService.getConversations(
      req.userId!
    );

  res.json({
    success: true,
    data: conversations,
  });
}

export async function getMessages(
  req: AuthRequest,
  res: Response
) {
  const convoId =
    req.params.conversationId as string;

  const messages =
    await chatService.getMessages(
      convoId
    );

  res.json({
    success: true,
    data: messages,
  });
}

export async function sendMessage(
  req: AuthRequest,
  res: Response
) {

    const convoId=req.params.conversationId as string;

    const message =
        await chatService.sendMessage(
        convoId,
        req.userId!,
        req.body.text
        );

    const io = getIO();   

    io.to(req.params.conversationId).emit(
    "new-message",
    message
    );

    res.status(201).json({
        success: true,
        data: message,
    });
}