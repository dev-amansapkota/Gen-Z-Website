import connectToDatabase from "../../lib/mongodb";
import OurCourse from "../../models/OurCourses"

export async function GET(){
    try{
        await connectToDatabase();
        const AllCourses =await OurCourse.find({})
        return new Response(JSON.stringify(AllCourses),{
            status: 200,
            headers: {"Content-Type": "application/json"}
        })

    }
catch(err){
    console.log(err)
}
}