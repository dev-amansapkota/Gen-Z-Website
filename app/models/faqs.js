import mongoose from "mongoose";


const FAQs = new mongoose.Schema({
    question: {type:String, required:true},
    answer: {type:String, required:true}
}) 

export default mongoose.models.FAQ || mongoose.model("FAQ",FAQs)