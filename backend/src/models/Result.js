import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  courseCode: { type: Number, required: true, unique: true },
  courseTitle: { type: String, required: true },
  courseRemark: { type: String, required: true },
});

export const ResultModel = mongoose.model("results", ResultSchema);
