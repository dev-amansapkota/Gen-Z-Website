'use client';
import Navbar from '@/app/components/Navbar';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForward, MdOutlineArrowForwardIos, MdOutlineScience } from "react-icons/md";
import React from 'react';
import { FaArrowRight, FaReact } from 'react-icons/fa';
import { FaFlask } from "react-icons/fa6";
import { SiReacthookform } from "react-icons/si";
import Link from 'next/link';

interface Props {
  params: {
    category: string;
  };
}

const Page = ({ params }: Props) => {
  const { category } = params;

  const SubjectCategory = [
    {
   name: "Physics",
   bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
   Icon: FaFlask,
   IconBG: "bg-gradient-to-br from-blue-500  to-blue-700",
   border: "border-blue-200"
  
  },
  {
   name: "Chemistry",
   bgColor: "bg-gradient-to-br from-red-50 to-red-100",
   Icon: FaReact,
   IconBG: "bg-gradient-to-br from-red-500  to-red-700",
   border: "border-red-200 "
  
  },
  {
   name: "Mathematics",
   bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
   Icon: SiReacthookform,
   IconBG: "bg-gradient-to-br from-purple-500  to-purple-700",
   border: "border-purple-200 "
  
  },
  {
   name: "Nepali",
   bgColor: "bg-gradient-to-br from-green-50 to-green-100",
   Icon: FaFlask,
   IconBG: "bg-gradient-to-br from-green-500  to-green-700",
   border: "border-green-200 "
  
  },
   {
   name: "English",
   bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
   Icon: FaFlask,
   IconBG: "bg-gradient-to-br from-yellow-500  to-yellow-700",
   border: "border-green-200 "
  
  },
   {
   name: "Biology",
   bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
   Icon: FaFlask,
   IconBG: "bg-gradient-to-br from-pink-500  to-pink-700",
   border: "border-pink-200 "
  
  },
   {
   name: "Computer Science",
   bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
   Icon: FaFlask,
   IconBG: "bg-gradient-to-br from-indigo-500  to-indigo-700",
   border: "border-indigo-200 "
  
  },
  
]
  return (
    <div>
      <Navbar />

      <div className="bg-[linear-gradient(178deg,_rgb(233,239,249)_4.55%,_rgb(234,240,250)_98.38%)] w-full h-72 flex justify-center relative">
<div className='md:flex  absolute right-0 hidden'>
          <img src="https://pwskills.com/images/masterClass/hero-bg.svg" className=''></img>
</div>
        <div className="my-12 text-center">
         
          <h2 className="md:text-5xl font-bold m-2">Get Best Notes of {category}</h2>
          <p className="">Learn & Get Best Notes From Our Best Teachers & Top Students</p>
        </div>

        <div className="md:w-[550px] text-center bottom-0 h-[130px] bg-white left-1/2 absolute -translate-x-1/2 rounded  px-4 w-full">
          <p className="text-purple-400 font-semibold my-2">Benefits</p>

          <div className="flex justify-between h-[90px] ">

            <div className="flex flex-col items-center justify-between  h-full px-5 ">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.pcB7jL_4dpIB3Lr_wq0fjgHaH7"
                className="w-[40px] h-[40px] object-contain"
                alt="Top Notes"
              />
              <p className="text-xs text-zinc-600">Top.Notes</p>
            </div>


            <div className="flex flex-col items-center justify-between h-full px-5 ">
              <img
                src="https://th.bing.com/th/id/R.2359d66c1a77b23ac453045690f74aba?rik=BlG9YOuwn5QFlw&pid=ImgRaw&r=0"
                className="w-[40px] h-[40px] object-contain"
                alt="PYQs"
              />
              <p className="text-xs text-zinc-600">PYQs</p>
            </div>

            <div className="flex flex-col items-center justify-between h-full px-3 ">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.rZClwQ0VGXaZwIDrM5vjgwAAAA"
                className="w-[40px] h-[40px] object-contain"
                alt="Exam"
              />
              <p className="text-xs text-zinc-600">Exam</p>
            </div>

            <div className="flex flex-col items-center justify-between h-full px-3">
              <img
                src="https://th.bing.com/th/id/R.3f1155c5f48357b7d25bf1643a79874d?rik=1vDbg%2f2tkHj09A&pid=ImgRaw&r=0"
                className="w-[40px] h-[40px] object-contain"
                alt="Toppers Notes"
              />
              <p className="text-xs text-zinc-600">Toppers Notes</p>
            </div>
          </div>
        </div>
      </div>


<div className='grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3'>
 
{
  SubjectCategory.map((Subjects,index)=>(
     <Link href={`/notes/${category}/physics`} className='flex' key={index}> 
      <div  
      className='my-8  mx-8 md:w-[330px] w-full'>
        <div className={`  h-[100px] border   rounded-2xl  shadow hover:shadow-xl shadow-lg hover:scale-105 duration-500 ${Subjects.bgColor} ${Subjects.border} `} >
<div className=''>
  <div className='mx-6  flex justify-between'>
  <div><h2 className='my-2 font-bold'>{Subjects.name}</h2>
  <p>Complete Notes</p>
  <div className='flex text-red-500'>
   <button className='hover:underline'> Explore </button>
 <MdOutlineArrowForwardIos className='my-1 mx-2'/>
 
</div></div>


 <div className='flex justify-center my-auto'><Subjects.Icon className={`p-2 text-5xl  rounded-xl text-white ${Subjects.IconBG}`} 
  />
</div>
</div>


</div>
        </div>
      </div>
      </Link>
  ))
  
}

</div>
    </div>
  );
};

export default Page;
