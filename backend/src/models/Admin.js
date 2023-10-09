import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: {type: String, required: true},
})

export const AdminModel = mongoose.model("admins", AdminSchema)