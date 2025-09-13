import React from 'react'
import { CiLocationOn, CiCalendarDate } from 'react-icons/ci'
import { LuGraduationCap } from 'react-icons/lu'

const PartnerColleges = () => {
  return (
    <div><h2 className='mx-4 text-[rgb(3,116,126)] text-3xl font-bold'>Partner Colleges</h2>
      <h2 className='mx-4'>Explore Our Partner College</h2>
      <section
       className='px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
       {[
        {
        img: 'https://utfs.io/f/iCN7oS8Yds8DRR3gtew3heTUZGyVkJEKDazdbC4uY6M1wpPi',
        name: 'Model Institute Of Technology',
        logo: 'https://utfs.io/f/iCN7oS8Yds8Dnysqh3AlWbZ0mvKeQJoD1fz7Fsytw6Aj8i4n',
        location:'Bagbazar, Kathmandu',
        established: 'Established 2001',
        Affiliated: 'Affiliated to: International Americabn University',
        courses: ['BIT', 'BBA']
       },
       {
        img:'https://utfs.io/f/iCN7oS8Yds8DLVkhe3vXeCAgz5ckPqxKubojlLMZDQnR3whS',
        name:'Softwarica College of IT',
        logo:'https://utfs.io/f/iCN7oS8Yds8D7Lyte5nm6uNiY2ySwR9CtVMBF30bOr845UfD',
        location:'Maitri marg, Dillibazar, Kathmandu',
        established:'Established: 2010',
        Affiliated:'Affiliated to: Conventry University',
        courses: ['BSc hons CS with Ai', 'BSc(hons) Computing', 'BSc hons']

       },
       {
        img:'https://utfs.io/f/iCN7oS8Yds8DAIVycRmLZMFIrGibxalSV6TDKyq4dgmuptzo',
        name: 'Samridhi College',
        location: 'Lokanthali, Bhaktapur',
        logo:'https://utfs.io/f/iCN7oS8Yds8DkF9SUBp1iOvKxwU5MjurmSnaqRXy8cYBeZNV',
        established: 'Established: 2013',
        Affiliated: 'Affiliated to: Tribhuwan university',
        courses: ['CSIT', 'BBS']
       }

       ].map((partners, index)=>{
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
            <p className='mx-2'>{partners.Affiliated}</p>
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