import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  pswd: { type: String, required: true },
});

export const UserModel = mongoose.model("users", UserSchema);
