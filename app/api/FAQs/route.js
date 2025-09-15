import connectToDatabase from "../../lib/mongodb";
import FAQ from "../../models/faqs"

export async function GET(){
    try{
        connectToDatabase();
        const FAQs = await FAQ.find({});
        return new Response(JSON.stringify(FAQs),{
            status: 200,
            headers: {"Content-Type": "application/json"}
        })
    }
    catch(err){
        console.log(err)
    }
}