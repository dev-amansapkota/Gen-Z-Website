import { FiBook } from "react-icons/fi";
import { FaArrowRight, FaQuestion } from "react-icons/fa";
import { LiaVideoSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { BiGroup } from "react-icons/bi";


export default function Home() {
  return (
    <>
    <nav className="my-3 flex justify-between items-center font-bold fon">
       <img src="https://media.istockphoto.com/id/1145199614/vector/vector-illustration-with-color-phrase-generation-z.jpg?s=612x612&w=0&k=20&c=g3uova_gfEOP5UtWVEzJAO24ppFUKA05i2tsRjOM1zk=" className="w-20 "></img>
      
    <div className="flex justify-between">
      
      <ul className="flex from-neutral-800 text-xl justify-end gap-6 mr-6">
<li className="relative cursor-pointer group">
  Batches
  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
</li>

       <a href="/About"> <li  className="hover:underline">Courses</li> </a>
        <li className="hover:underline">PYQs</li>
        <li className="hover:underline">Entrance Exam</li>
        

      </ul>
      <button className="bg-blue-900 text-xl px-10 py-2 text-center flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-gray-800 transition">
  Sign In
</button>

      
    </div>
    </nav>

   <div className="flex-col flex items-center justify-center min-h-screen bg-gray-900 relative ">
    <video src='/HomeVideo.mp4' loop playsInline muted   autoPlay className="h-full w-full absolute top-0  left-0 object-cover z-0 " >video</video>
      <div >
        <h1 className="relative z-10  text-white text-3xl font-mono overflow-hidden border-r-4 border-amber-500 whitespace-nowrap  animate-typing ">
        Welcome to Gen Z Learning 🚀
      </h1>
      </div>
 <div className="text-white something relative " >
      <h2 > Revolution In Nepal</h2>
      
    
    </div>
    </div>
    
<div className="justify-center flex text-3xl font-bold mt-8"> <h2>Our Courses</h2></div>
<section id="NEB"
 className="mx-10 my-4 flex">
<div className="h-[250px]  border-amber-700 w-[400px] bg-white shadow-2xs hover:scale-105 duration-300 transition-transform  hover:border-t-4 inset-shadow-zinc-100 relative rounded">
  <div className="bg-orange-100 h-full rounded-l-full w-[90px] justify-center  items-center absolute right-0 flex">
    <img src='https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp' className=" w-[40px]"></img>

  </div>
  <div className="p-4 cursor-pointer">
    <h2 className="font-bold text-2xl ">NEB</h2>
   <div className="flex ">
     <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex">
     Class 11
    </div>
    <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 mx-4 justify-center flex ">
     Class 12
    </div>
    
   </div>
   <div className="flex-col flex">
      <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex  ">
     Dropper
    </div>
    </div>

   <div className="mt-10 flex hover:text-amber-900 hover:underline  text-xl">
     <div >
      <h3> Explore Categories </h3>
    </div>
<button className="hover:bg-black rounded-full"><FaArrowRight className="mx-1 my-1"/></button>
   </div>
  </div>

</div>
<div className="h-[250px] w-[400px] bg-white shadow-2xs hover:scale-105 duration-300 transition-transform  hover:border-t-4 inset-shadow-zinc-100 relative rounded mx-8">
  <div className="bg-orange-100 h-full rounded-l-full w-[90px] justify-center  items-center absolute right-0 flex">
    <img src='https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp' className=" w-[40px]"></img>

  </div>
  <div className="p-4 cursor-pointer">
    <h2 className="font-bold text-2xl ">SEE</h2>
   <div className="flex ">
     <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex">
     Class 10
    </div>
    <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 mx-4 justify-center flex ">
     Class 9
    </div>
    
   </div>
   <div className="flex-col flex">
      <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex  ">
     Class 8
    </div>
    </div>

   <div className="mt-10 flex hover:text-amber-900 hover:underline  text-xl">
     <div >
      <h3> Explore Categories </h3>
    </div>
<button className="hover:bg-black rounded-full"><FaArrowRight className="mx-1 my-1"/></button>
   </div>
  </div>


</div>
<div className="h-[250px] w-[400px] bg-white shadow-2xs hover:scale-105 duration-300 transition-transform  hover:border-t-4 inset-shadow-zinc-100 relative rounded mx-8">
  <div className="bg-orange-100 h-full rounded-l-full w-[90px] justify-center  items-center absolute right-0 flex">
    <img src='https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp' className=" w-[40px]"></img>

  </div>
  <div className="p-4 cursor-pointer">
    <h2 className="font-bold text-2xl ">Entrance Exam</h2>
   <div className="flex ">
     <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex">
     Bsc.CSIT
    </div>
    <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 mx-4 justify-center flex ">
     BCA
    </div>
    
   </div>
   <div className="flex-col flex">
      <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex  ">
    BIT
    </div>
    
    </div>
    

   <div className="mt-10 flex hover:text-amber-900 hover:underline  text-xl">
     <div >
      <h3> Explore Categories </h3>
    </div>
<button className="hover:bg-black rounded-full"><FaArrowRight className="mx-1 my-1"/></button>
   </div>
  </div>
</div>

</section>
<section id="Bachelor"
 className="mx-10 my-8 flex">
<div className="h-[250px] w-[400px] bg-white shadow-2xs hover:scale-105 duration-300 transition-transform  hover:border-t-4 inset-shadow-zinc-100 relative rounded">
  <div className="bg-orange-100 h-full rounded-l-full w-[90px] justify-center  items-center absolute right-0 flex">
    <img src='https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp' className=" w-[40px]"></img>

  </div>
  <div className="p-4 cursor-pointer">
    <h2 className="font-bold text-2xl ">Bachelor</h2>
   <div className="flex ">
     <div className="w-[90px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex">
    BSC.CSIT
    </div>
    <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 mx-4 justify-center flex ">
     BCA
    </div>
    
   </div>
   <div className="flex-col flex">
      <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex  ">
     BIT
    </div>
    </div>

   <div className="mt-10 flex hover:text-amber-900 hover:underline  text-xl">
     <div >
      <h3> Explore Categories </h3>
    </div>
<button className="hover:bg-black rounded-full"><FaArrowRight className="mx-1 my-1"/></button>
   </div>
  </div>

</div>
<div className="h-[250px] w-[400px] bg-white shadow-2xs hover:scale-105 duration-300 transition-transform  hover:border-t-4 inset-shadow-zinc-100 relative rounded mx-8">
  <div className="bg-orange-100 h-full rounded-l-full w-[90px] justify-center  items-center absolute right-0 flex">
    <img src='https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp' className=" w-[40px]"></img>

  </div>
  <div className="p-4 cursor-pointer">
    <h2 className="font-bold text-2xl ">Others</h2>
   <div className="flex ">
     <div className="w-[95px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex">
     Kharidar
    </div>
    <div className="w-[110px] rounded-full border-2 shadow border-zinc-400 mt-5 mx-4 justify-center flex ">
     Nayab Subba
    </div>
    
   </div>
   <div className="flex-col flex">
      <div className="w-[80px] rounded-full border-2 shadow border-zinc-400 mt-5 justify-center flex  ">
     so on..
    </div>
    </div>

   <div className="mt-10 flex hover:text-amber-900 hover:underline  text-xl">
     <div >
      <h3> Explore Categories </h3>
    </div>
<button className="hover:bg-black rounded-full"><FaArrowRight className="mx-1 my-1"/></button>
   </div>
  </div>


</div>


</section>


<div className="text-center text-3xl font-bold">  <h2 >College Courses</h2></div>
<section id="Colleges-1" className="mt-7 mx-19 cursor-pointer flex ">

  <div className="h-auto w-[600px] mt-5 mb-12  bg-white rounded hover:scale-105 transition-all duration-500">
<img src="https://th.bing.com/th/id/R.c3414437f44458964340879663bfbf82?rik=K3szPQEkZqCdOw&pid=ImgRaw&r=0" className=""></img>
<h2 className="text-2xl font-bold my-2 mx-2">CMAT Preparation</h2>
<p className="text-zinc-600 my-2 mx-2"><span className="font-bold">CMAT</span> is a popular management entrance exam conducted by the Faculty of Management, Tribhuvan University. It is required for students ....</p>
  <div className="flex  mx-2">
<div className="flex">
  <FiBook className="text-green-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex text-zinc-700">
  <FaQuestion className="text-purple-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex mb-3">
  <LiaVideoSolid className="text-red-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
  </div>
  
  </div>
  
  <div className="h-auto w-[600px] mt-5 mb-12 mx-9 bg-white rounded hover:scale-105 transition-all duration-500">
<img src="https://i.ytimg.com/vi/s-CnvmuEJ6k/maxresdefault.jpg" className=""></img>
<h2 className="text-2xl font-bold my-2 mx-2">BIT Entrance Preparation</h2>
<p className="text-zinc-600 my-2 mx-2">The BIT entrance examination in Nepal is conducted by Tribhuvan University, and candidates must meet specific eligibility criteria and prepare for ..</p>
  <div className="flex mx-2 ">
<div className="flex">
  <FiBook className="text-green-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex text-zinc-700">
  <FaQuestion className="text-purple-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex mb-3">
  <LiaVideoSolid className="text-red-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
  </div>
  </div>
  
</section>
<section id="Colleges" className="mt-7 mx-19 cursor-pointer flex ">

  <div className="h-auto w-[600px] mt-5 mb-12  bg-white rounded hover:scale-105 transition-all duration-500">
<img src="https://th.bing.com/th/id/R.3b278015c9f96d1b15e11e0598bf263c?rik=AfOrWJBjjCG5Ow&pid=ImgRaw&r=0" className=""></img>
<h2 className="text-2xl font-bold my-2 mx-2">BSc.CSIT</h2>
<p className="text-zinc-600 my-2 mx-2">The Bachelor of Science in Computer Science and Information Technology (BSc CSIT) is a popular four-year program in Nepal, primarily offered by ...</p>
  <div className="flex  mx-2">
<div className="flex">
  <FiBook className="text-green-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex text-zinc-700">
  <FaQuestion className="text-purple-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex mb-3">
  <LiaVideoSolid className="text-red-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
  </div>
  
  </div>
  
  <div className="h-auto w-[600px] mt-5 mb-12 mx-9 bg-white rounded hover:scale-105 transition-all duration-500">
<img src="https://tse1.mm.bing.net/th/id/OIP._O8rDIqtEID1FI_j8A-20QHaD5?r=0&w=1201&h=631&rs=1&pid=ImgDetMain&o=7&rm=3" className=""></img>
<h2 className="text-2xl font-bold my-2 mx-2">BCA Entrance Preparation</h2>
<p className="text-zinc-600 my-2 mx-2">The Bachelor of Computer Applications (BCA) program in Nepal is a four-year degree focused on computer application development....</p>
  <div className="flex mx-2 ">
<div className="flex">
  <FiBook className="text-green-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex text-zinc-700">
  <FaQuestion className="text-purple-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
<div className="flex mb-3">
  <LiaVideoSolid className="text-red-700 my-1 text-xl"/>
  <h2 className="mx-2">4 Subjects</h2>

</div>
  </div>
  </div>
  
</section>
   
<h2 className="text-3xl font-bold justify-center items-center flex"> Colleges/Universities</h2>
  <section id="Colleges " className="mx-16 mb-10 flex my-6">
<div className="w-[500px] relative border border-white overflow-hidden rounded-2xl">
  <img src="https://utfs.io/f/iCN7oS8Yds8D7UNKY8nm6uNiY2ySwR9CtVMBF30bOr845UfD" className="relative h-[200px] z-0 w-[500px] hover:scale-105 box-content duration-300 transition-normal "></img>
  <div className="w-[100px] h-[90px] my-25  bg-white shadow-2xl rounded-2xl absolute justify-end flex items-end  z-10 bottom-5 left-0">
  <img src="https://utfs.io/f/iCN7oS8Yds8D5FscYKNIs9q3Y6xHKaQpGCJj5VXF4tzPEwof"></img>


  </div>
  <div className=" mx-2  ">
    <h2 className="font-bold text-xl my-2">Kathmandu University</h2>
     
   <div className="text-zinc-500 flex "> 
     <CiLocationOn className="my-1 " />
    <p className="mx-1"> Dhulikhel Nepal</p>
 
   </div>

<div className="text-zinc-500 flex"> 
  <BiGroup className="my-1"/>
  
  <p className="mx-1">16000 Students</p>
</div>
</div>
  
  <div className=" items-end right-0  flex justify-end mb-1  ">
  <h2 className="px-4 bg-blue-400 rounded-2xl ">Government</h2>
</div>
</div>

<div className="w-[500px] relative border border-white overflow-hidden mx-6 rounded-2xl">
  <img src="https://utfs.io/f/iCN7oS8Yds8Df605MYaP8m9nFwGR0SjlMEfq4OCKV2zvtYsb" className="relative h-[200px] z-0 w-[500px] hover:scale-105 box-content duration-300 transition-normal "></img>
  <div className="w-[100px] h-[90px] my-25  bg-white shadow-2xl rounded-2xl absolute justify-end flex items-end  z-10 bottom-5 left-0">
  <img src="https://utfs.io/f/iCN7oS8Yds8DQTO2SNyTEx7nI39RkfjXLueMFZ8bGBi6PDQd" className="rounded-2xl"></img>


  </div>
  <div className=" mx-2  ">
    <h2 className="font-bold text-xl my-2">Agriculture and Forestry University</h2>
     
   <div className="text-zinc-500 flex "> 
     <CiLocationOn className="my-1 " />
    <p className="mx-1"> Chitwan Nepal</p>
 
   </div>

<div className="text-zinc-500 flex"> 
  <BiGroup className="my-1"/>
  
  <p className="mx-1">2000 Students</p>
</div>
</div>
  
  <div className=" items-end right-0  flex justify-end mb-1  ">
  <h2 className="px-4 bg-blue-400 rounded-2xl ">Public</h2>
</div>
</div>



  </section>
  
  <section id="Colleges " className="mx-16 mb-10 flex my-6">
<div className="w-[500px] relative border border-white overflow-hidden rounded-2xl">
  <img src="https://utfs.io/f/iCN7oS8Yds8DD1Y3xzhLpQw5RofWtUmskEqhXbHNdDMxFAYr" className="relative h-[200px] z-0 w-[500px] hover:scale-105 box-content duration-300 transition-normal "></img>
  <div className="w-[100px] h-[90px] my-25  bg-white shadow-2xl rounded-2xl absolute justify-end flex items-end  z-10 bottom-5 left-0">
  <img src="https://utfs.io/f/iCN7oS8Yds8Dly5MlgiHnAISD2jENBtoFRJkUdabs9w4zpLY" className="rounded-2xl"></img>


  </div>
  <div className=" mx-2  ">
    <h2 className="font-bold text-xl my-2">Rajarshi janak university</h2>
     
   <div className="text-zinc-500 flex "> 
     <CiLocationOn className="my-1 " />
    <p className="mx-1"> Janakpur </p>
 
   </div>

<div className="text-zinc-500 flex"> 
  <BiGroup className="my-1"/>
  
  <p className="mx-1">2569+ Students</p>
</div>
</div>
  
  <div className=" items-end right-0  flex justify-end mb-1  ">
  <h2 className="px-4 bg-blue-400 rounded-2xl ">Government</h2>
</div>
</div>
</section>
    </>
  );
}
