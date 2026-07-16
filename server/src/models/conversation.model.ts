import mongoose, { InferSchemaType, Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    lastMessage: {
      type: String,
      default: "",
    },

    lastMessageAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

conversationSchema.index({ participants: 1 });

export type ConversationDocument = InferSchemaType<
  typeof conversationSchema
>;

export const Conversation = mongoose.model(
  "Conversation",
  conversationSchema
);