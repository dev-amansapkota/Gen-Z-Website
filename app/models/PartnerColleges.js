import mongoose from "mongoose";

const PartnerCollegeSchema = new mongoose.Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  established: { type: String, required: true },
  affiliated: { type: String, required: true },
  courses: { type: [String], required: true },
});

const modelName = "PartnerCollegeModel";

export default mongoose.models[modelName] || mongoose.model(modelName, PartnerCollegeSchema);
