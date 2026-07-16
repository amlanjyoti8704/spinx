import { AppError } from "../../errors/AppError.js";
import { Conversation } from "../../models/conversation.model.js";
import { Message } from "../../models/message.model.js";

export class ChatService {

  async getConversations(userId: string) {

    return Conversation.find({
      participants: userId,
    })
      .populate("participants", "name avatar")
      .sort({
        updatedAt: -1,
      });

  }

  async getMessages(conversationId: string) {

    return Message.find({
      conversationId,
    }).sort({
      createdAt: 1,
    });

  }

  async sendMessage(
    conversationId: string,
    senderId: string,
    text: string
  ) {

    const conversation =
      await Conversation.findById(
        conversationId
      );

    if (!conversation) {
      throw new AppError(
        "Conversation not found",
        404
      );
    }

    if (
      !conversation.participants.some(
        (id) =>
          id.toString() === senderId
      )
    ) {
      throw new AppError(
        "Unauthorized",
        401
      );
    }

    const message =
      await Message.create({

        conversationId,

        senderId,

        text,

      });

    conversation.lastMessage = text;

    conversation.lastMessageAt =
      new Date();

    await conversation.save();

    return message;

  }
}

export const chatService = new ChatService();