import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  students: { type: String }, // or Number, depending on data
  type: { type: String, enum: ["Government", "Public", "Private"], required: true },
});

// Prevent model overwrite error in dev
const University =
  mongoose.models.University || mongoose.model("University", UniversitySchema);

export default University;
