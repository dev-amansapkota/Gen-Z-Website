import mongoose from "mongoose";

const BatchSchema = new mongoose.Schema({
title: {type: String, required:true},
duration: {type:String, required:true},
location: {type:String, required: true},
startDate: {type:String, required: true},
tag: {type:String, required:true}

}
);

const BatchCategorySchema = new mongoose.Schema({
    name: {type: String, required:true},
    batches: [BatchSchema]
})



export default mongoose.models.Batch || mongoose.model("Batch", BatchCategorySchema)