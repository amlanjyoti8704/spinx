import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    parsedText: {
      type: String,
      default: "",
    },

    skills: {
      type: [String],
      default: [],
    },

    headline: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Profile = mongoose.model(
  "Profile",
  profileSchema
);