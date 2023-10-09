import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    courseCode: {type: String, required:true, unique: true},
    courseTitle: {type: String, required: true, },
    courseType: {type:String, required: true}, 
    courseUnit: {type: String},          
    Prerequisite: {type:String},

})

export const CourseModel = mongoose.model("Courses", CourseSchema)