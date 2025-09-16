import mongoose from "mongoose"
const OurCourse = new mongoose.Schema({
title: {type: String, required: true},
categories:{type: [String], required: true},
button: {type: String, required: true},
img: {type: String, required: true},
color: {type: String, required: true},
link: {type: [String], required: true}
})


export default mongoose.models.OurCourse || mongoose.model("OurCourse",OurCourse)
