import React, { useEffect, useState } from 'react'
import { CiLocationOn, CiCalendarDate } from 'react-icons/ci'
import { LuGraduationCap } from 'react-icons/lu'



interface PartnerColleges {
  img: string,
  name: string,
  logo:string,
  location: string,
  established:string,
  affiliated: string,
  courses: string[],


}
const PartnerColleges = () => {
  const [PartnerCollege, setPartnerCollege] = useState<PartnerColleges[]> ([]);

  useEffect(()=>{
    const FetchPartnerColleges=async()=>{
try{
   const response = await fetch("/api/PartnerColleges");
   const data = await response.json()
   setPartnerCollege(data);
} catch(err){

  }
 
    }
     FetchPartnerColleges();
    
  },[]);
  
  return (
    <div><h2 className='mx-4 text-[rgb(3,116,126)] text-3xl font-bold'>Partner Colleges</h2>
      <h2 className='mx-4'>Explore Our Partner College</h2>
      <section
       className='px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
       {PartnerCollege.map((partners, index)=>{
      return  (
       <div key={index} className='my-4 hover:shadow-xl overflow-hidden'>
           <img src={partners.img} className='hover:scale-105 duration-500 object-cover overflow-hidden rounded transition-transform'></img>
         <div  className='flex'>
          
            <img src={partners.logo}className='w-[60px] rounded my-7 mx-4 ' ></img>
          <div className=' gap-1 flex flex-col my-6 '>
           
           <h2 className='font-bold mx-3 '>{partners.name}</h2>

        <div className='flex items-center  '>
  <CiLocationOn className='mx-1' />
  <p>{partners.location}</p>
</div>
            
         </div>
         
          </div>
          <div className='flex flex-col mx-4'>
            <div className='flex'>
              <CiCalendarDate className='my-1' />
              <p className='mx-2'>{partners.established}</p>
            </div>
          <div className='flex'>
            <LuGraduationCap className='my-1' />
            <p className='mx-2'>{partners.affiliated}</p>
          </div>
          </div>
          <div className='flex items-stretch my-6 mx-4'>
            <div className='h-full  bg-blue-100 text-blue-900 font-bold  rounded px-2'>
              {partners.courses[0]}
            </div>
            <div className='h-full  bg-green-100 text-green-900 font-bold  rounded px-2 mx-4'>
              {partners.courses[1]}
            </div>
            <div></div>
          </div>
         
         
        </div>
       )
       })}

      </section></div>
  )
}

export default PartnerColleges