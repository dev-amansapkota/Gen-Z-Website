import connectToDatabase from "../../lib/mongodb";
import Batch from "../../models/Batches"

export async function POST(){
    try{
      await connectToDatabase();

       const batchCategory = [
    {
      name: "Offline Batches",
      batches: [
        {
          title: "Data Science Offline Batch",
          duration: "6 months",
          location: "Delhi Campus",
          startDate: "25 Sep, 2025",
          tag: "Limited Seats",
        },
        {
          title: "Digital Marketing Offline",
          duration: "4 months",
          location: "Mumbai Campus",
          startDate: "10 Oct, 2025",
          tag:"test"
        },
      ],
    },
    {
      name: "Online Batches",
      batches: [
        {
          title: "Full Stack Web Development",
          duration: "5 months",
          location: "Zoom",
          startDate: "1 Oct, 2025",
          tag: "Popular",
        },
        {
          title: "Cybersecurity Bootcamp",
          duration: "6 months",
          location: "Online Portal",
          startDate: "15 Oct, 2025",
          tag: "te"
        },
      ],
      
    },
      {
      name: "Weekend Batches",
      batches: [
        {
          title: "AI for Working Professionals",
          duration: "3 months",
          location: "Online",
          startDate: "12 Oct, 2025",
          tag: "Weekend",
        },
      ],
    },
    
]
for(const BatchesCategory of batchCategory){
    const exist =await  Batch.findOne({name:Batch.name});

    if(!exist){
        const created = await Batch.create(BatchesCategory);
        console.log("Created Successfully!!", created.name);

    }
}

return new Response(JSON.stringify({message: 'Operation Successfull!'}),{
    status: 200,
    headers: {'Content-Type': 'application/json'}
})
    
    }catch(err){
        console.log(err)
    }
}