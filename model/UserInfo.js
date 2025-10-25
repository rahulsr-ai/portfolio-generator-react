import mongoose, { Schema } from "mongoose";

const userInfoSchema = new Schema(
  {
    template: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      trim: true,
      lowercase: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    profileImageUrl: {
      type: String,
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: Number,
    },
    location: {
      type: String,
    },
    socialMedia: [
      {
        platform: { type: String, trim: true },
        url: { type: String, trim: true },
      },
    ],
    contactMsg: {
      type: String,
    },
    contactEmail: {
      type: String,
      lowercase: true,
      trim: true,
    },
    contactPhoneNo: {
      type: Number,
    },
    skills: {
      type: [String],
      default: [],
    },
    services: [
      {
        title: { type: String },
        description: { type: String },
      },
    ],
    testimonials: [
      {
        name: { type: String, trim: true },
        quote: { type: String },
      },
    ],
    blogs: [
      {
        title: { type: String, trim: true },
        summary: { type: String },
      },
    ],
    projects: [
      {
        title: { type: String },
        description: { type: String },
        image: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const userInfo = mongoose.models?.UserInfo || mongoose.model("UserInfo", userInfoSchema);
// const userInfo = mongoose.model("UserInfo", userInfoSchema);

export default userInfo;
