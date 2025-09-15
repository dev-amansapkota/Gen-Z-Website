import connectToDatabase from "../../lib/mongodb";
import PartnerColleges from "../../models/PartnerColleges"


export async function GET(){
    try{
  await connectToDatabase();
  const PartnerCollege = await PartnerColleges.find({});
  return new Response(JSON.stringify(PartnerCollege),{
    status: 200,
    headers: {"Content-Type": "application/json"}
  })
    }
    catch(err){

    }
}