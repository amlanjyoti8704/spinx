import mongoose, { Schema, InferSchemaType } from "mongoose";

export enum RequestStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

const requestSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(RequestStatus),
      default: RequestStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

requestSchema.index(
  {
    senderId: 1,
    receiverId: 1,
  },
  {
    unique: true,
  }
);

export type RequestDocument = InferSchemaType<typeof requestSchema>;

export const Request = mongoose.model("Request", requestSchema);