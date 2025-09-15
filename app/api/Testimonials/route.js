import connectToDatabase from "../../lib/mongodb";
import Testimonials from "../../models/Testimonials";

export async function GET(){
    try{
        await connectToDatabase();
       const AllTestimonials = await Testimonials.find({});
       return new Response(JSON.stringify(AllTestimonials), {
        status:200,
        header: {"Content-Type":"application/json"}
       });
    }
     catch(err){}
}