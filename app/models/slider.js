import mongoose from "mongoose";

const SliderModel = mongoose.Schema({
    img: {type: String, required:true},
    title: {type:String, required: true},
    desc: {type: String, required: true},
    url: {type: String, required: true}
})

export default mongoose.models.Slider || mongoose.model("Slider",SliderModel)