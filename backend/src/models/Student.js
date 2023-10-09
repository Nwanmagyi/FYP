import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  matricNo: { type: String, required: true, unique: true },
});

export const StudentModel = mongoose.model("students", StudentSchema);
