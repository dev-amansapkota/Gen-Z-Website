// // models/Course.js
// import mongoose from "mongoose";

import mongoose from "mongoose";

// const CourseSchema = new mongoose.Schema({
//   title: String,
//   img: String,
//   desc: String,
// });

// export default mongoose.models.Course || mongoose.model("Course", CourseSchema);



const CourseSchemas = new mongoose.Schema({

  title: String,
  img: String,
  desc: String
});

export default mongoose.models.Courses || mongoose.model('Courses', CourseSchemas)