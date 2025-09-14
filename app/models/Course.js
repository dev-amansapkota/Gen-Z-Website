// models/Course.js
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  img: String,
  desc: String,
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
