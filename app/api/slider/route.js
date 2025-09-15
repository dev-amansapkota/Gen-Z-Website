import connectToDatabase from "../../lib/mongodb";
import slider from "../../models/slider";


export async function GET(){
    try{
      await  connectToDatabase();
        const SliderImages =await slider.find({});
        return new Response(JSON.stringify(SliderImages),{
            status: 200,
            headers: {"Content-Type": "application/json"}
        })
    }
    catch(err){

    }
}