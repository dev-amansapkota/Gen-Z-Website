import connectToDatabase from "../../lib/mongodb";
import OurCourse from "../../models/OurCourses"

export async function POST(){
    try{
        await connectToDatabase();

        const Courses = [
            {
                title: 'NEB',
                categories: ['Class 11', 'Class 12', 'Dropper'],
                button: '/neb-categories',
                img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp',
                color: 'rgb(255, 243, 224)',
                link: ['/Class-11',
                    '/Class-12',
                    '/Dropper',



                    
                ]
              },
              {
                title: 'SEE',
                categories: ['Class 10', 'Class 9', 'Class 8'],
                 button: '/see-categories',
                 img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/438cff9f-f45c-4961-9ab3-33a59b88352c.webp',
                 color: 'rgb(255, 242, 242)',
                 link: ["/Class-10", "/Class-9", "/Class-8"],
              },
              {
                title: 'Entrance Exam',
                categories: ['Bsc.CSIT', 'BCA', 'BIT'],
                 button: '/entrance-categories',
                 img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ed50a2a8-e5fc-4ce0-bcee-823c32ea49e9.webp',
                 color: '#19183B',
                 link: ["/bsc-csit", "/bca", "/bit"],
              },
              {
                title: 'Bachelor',
                categories: ['BSC.CSIT', 'BCA', 'BIT'],
                 button: '/bachelors-categories',
                 img:'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/8556a2c4-1fd3-4d16-bdfb-62f4afa21310.webp',
                 color: '#673AB7D9',
                 link: ["/bsc-csit", "/bca", "/bit"],

              },
              {
                title: 'Others',
                categories: ['Kharidar', 'Nayab Subba', 'so on..'],
                button: '/others-categories',
                img:'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/002e5e6e-47f1-4b21-89e0-8218ffcce066.webp',
                color: 'rgb(255, 243, 224)',
                link: ["/kharidar", "/nayab-subba", "/others"],
              },
        ]
        for(const OurCourses of Courses){
            const exist =await  OurCourse.findOne({title: OurCourse.title})

            if(!exist){
                try{
                    const created = await OurCourse.create(OurCourses);
                    console.log("Created Successfully!!",created.title);
                }
                catch(err){
                    console.log(err)
                }
            } 
        }

        return new Response(JSON.stringify({message: 'operation Sucessfull!!'}),{
            status: 200,
            headers: {'Content-Type': 'application/json'}
        });
        
    }catch(err){
        console.log(err)
    }
}