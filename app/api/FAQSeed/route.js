import connectToDatabase from "../../lib/mongodb";
import FAQ from "../../models/faqs"



export async function POST(){
     try{
       await  connectToDatabase();

        const FAQs = [
            {
      question: "What is Generation Z website?",
      answer: "A Generation Z website is a digital platform designed specifically to engage and resonate with the unique preferences, values, and online behaviors of Generation Z, emphasizing speed, visual storytelling, personalization, social media integration, and mobile-first usability.",
     
    }
        ]

        for(const questions of FAQs){
            const exist = await FAQ.findOne({question: FAQ.question});

            if(!exist){
                const created = await FAQ.create(questions);
                console.log("Created Successfully!!", created.questions)
            }
        }


        return new Response(JSON.stringify({message:'Operation Successful!!'},{
            status: 200,
            headers: {"Content-Type": "application/json"}
        }))
     } catch(err){
        console.log(err)

     }
}