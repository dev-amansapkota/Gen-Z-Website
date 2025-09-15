import mongoose from "mongoose"
const TestimonialsModels = new mongoose.Schema({


    img:{ type: String, required:true},
    students_name:{type: String, required:true},
    college: {type: String, required:true},
    feedback:{type:String, required:true},
    rank: {type: String, required:true}
 

})

const modelName ="TestimonialModel"
export default mongoose.models[modelName] || mongoose.model(modelName,TestimonialsModels)