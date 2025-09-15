import connectToDatabase from "../../lib/mongodb";
import slider from "../../models/slider";


export async function POST(){
  try{
     await  connectToDatabase();


    const Sliders = [
       {
    img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3b019249-ddb5-49d5-ab2c-eb43d7f2e724.webp',
  title: 'NEB Resource1',
  desc: 'App '
},
{
    img: 'https://ik.imagekit.io/x2tlk7qbl/Test/5069011b-cd13-483e-ac43-d0f7180cfc6c.jpg',
    title: 'NEB Resource2',
  desc: 'App '
},
{
    img: 'https://ik.imagekit.io/x2tlk7qbl/Test/0af1db90-9990-4114-949e-63e04fbc2d60.jpg',
    title: 'NEB Resource3',
  desc: 'App '
}
    ]
     for(const Slides of Sliders){
        const exist = await slider.findOne({title: Slides.title});

        if(!exist){
          try{
            const created = await slider.create(Slides);
            console.log("created successfuull!!",created.title);
          }
          catch(err){
            console.err("Error Occured!!", err)
          }
        }

        
     }

     return new Response(JSON.stringify({message: "Operation Completed"}),{
         status: 200,
      headers: { "Content-Type": "application/json" },
       
     })
  }
 


  catch(err){
 console.error("error ocured", err)
  }
}