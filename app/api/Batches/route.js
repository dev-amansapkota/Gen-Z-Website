import connectToDatabase from "../../lib/mongodb";
import Batch from "../../models/Batches";

export async function GET(){
    try{
        await connectToDatabase();
        const AllBatches = await Batch.find({})
        return new Response(JSON.stringify(AllBatches), {
            status: 200,
            headers: {'Content-Type': 'application/json'}
        })
    }
    catch(err){
        console.log(err)
    }
}