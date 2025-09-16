'use client';
import Navbar from '@/app/components/Navbar';
import React from 'react';

interface Props {
  params: {
    category: string;
  };
}

const Page = ({ params }: Props) => {
  const { category } = params;

  return (
    <div>
      <Navbar />

      <div className="bg-[linear-gradient(178deg,_rgb(233,239,249)_4.55%,_rgb(234,240,250)_98.38%)] w-full h-72 flex justify-center relative">
<div className='flex  absolute right-0'>
          <img src="https://pwskills.com/images/masterClass/hero-bg.svg" className=''></img>
</div>
        <div className="my-12 text-center">
         
          <h2 className="text-5xl font-bold m-2">Get Best Notes of {category}</h2>
          <p className="">Learn & Get Best Notes From Our Best Teachers & Top Students</p>
        </div>

        <div className="w-[550px] text-center bottom-0 h-[130px] bg-white left-1/2 absolute -translate-x-1/2 rounded shadow-md px-4">
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



      <div className='my-8'>
        <div className='w-[200px] h-[70px] rounded-2xl bg-amber-50 shadow hover:scale-105 duration-500'>
<div>
  <h2>Physics</h2>
</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
