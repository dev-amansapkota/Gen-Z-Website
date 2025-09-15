import University from "../../models/University";
import connectToDatabase from "../../lib/mongodb"
export async function GET(){
  try{
    await connectToDatabase();
    const universities = await University.find({});
    return new Response(JSON.stringify(universities), {
      status: 200,
      headers: {"Content-Type": "application/json"}
    });


  } catch(err){

  }
}