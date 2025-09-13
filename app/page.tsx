'use client'
import { useState } from 'react';
import { FiBook } from 'react-icons/fi';
import { FaArrowRight, FaQuestion } from 'react-icons/fa';
import { LiaVideoSolid } from 'react-icons/lia';
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci';
import { BiGroup } from 'react-icons/bi';
import { LuGraduationCap } from "react-icons/lu";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-zinc-800">
   
      <nav className="my-3 px-4 sm:px-6 lg:px-10 flex justify-between items-center font-bold">
        <img
          src="https://media.istockphoto.com/id/1145199614/vector/vector-illustration-with-color-phrase-generation-z.jpg?s=612x612&w=0&k=20&c=g3uova_gfEOP5UtWVEzJAO24ppFUKA05i2tsRjOM1zk="
          alt="Gen Z Learning Logo"
          width={80}
          height={80}
          className="w-16 sm:w-20"
        />
        <div className="flex items-center">
          <ul className="hidden md:flex text-lg lg:text-xl gap-4 lg:gap-6 mr-4 lg:mr-6">
            <li className="relative cursor-pointer group">
              Batches
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:underline">
              <a href="/about">Courses</a>
            </li>
            <li className="hover:underline">PYQs</li>
            <li className="hover:underline">Entrance Exam</li>
          </ul>
          <button className="bg-blue-900  text-white text-lg px-6 lg:px-10 py-2 rounded-full hover:bg-gray-800 transition">
            Sign In
          </button>
          <button
            className="md:hidden ml-4 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          > 
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 text-white z-20 md:hidden">
            <ul className="flex flex-col items-center text-lg py-4 gap-4">
              <li className="hover:underline">Batches</li>
              <li className="hover:underline">
                <a href="/about">Courses</a>
              </li>
              <li className="hover:underline">PYQs</li>
              <li className="hover:underline">Entrance Exam</li>
            </ul>
          </div>
        )}
      </nav>
      <div className="relative flex flex-col items-center justify-center min-h-[50vh] sm:min-h-screen">
        <video
          src="/HomeVideo.mp4"
          loop
          playsInline
          muted
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-white animate-typing border-r-4 border-amber-500 whitespace-nowrap overflow-hidden">
            Welcome to Gen Z Learning 🚀
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold">
            Revolution In Nepal
          </h2>
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
        Our Courses
      </h2>
      <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          {
            title: 'NEB',
            categories: ['Class 11', 'Class 12', 'Dropper'],
            link: '/neb-categories'
          },
          {
            title: 'SEE',
            categories: ['Class 10', 'Class 9', 'Class 8'],
             link: '/see-categories'
          },
          {
            title: 'Entrance Exam',
            categories: ['Bsc.CSIT', 'BCA', 'BIT'],
             link: '/entrance-categories'
          },
          {
            title: 'Bachelor',
            categories: ['BSC.CSIT', 'BCA', 'BIT'],
             link: '/bachelors-categories'
          },
          {
            title: 'Others',
            categories: ['Kharidar', 'Nayab Subba', 'so on..'],
            link: '/others-categories'
          },
        ].map((course, index) => (
          <div
            key={index}
            className="relative bg-white text-black rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:border-t-4 border-amber-700"
          >
            <div className="absolute right-0 h-full w-20 bg-orange-100 rounded-l-full flex items-center justify-center">
              <img
                src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
                alt={course.title}
                width={40}
                height={40}
                className="w-10"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl font-bold">{course.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {course.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 border-2 border-zinc-400 rounded-full text-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center text-lg hover:text-amber-900 hover:underline">
               <a href={course.link}> <span>Explore Categories</span> </a>
                <FaArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
        College Courses
      </h2>
      <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          {
            title: 'CMAT Preparation',
            img: 'https://th.bing.com/th/id/R.c3414437f44458964340879663bfbf82?rik=K3szPQEkZqCdOw&pid=ImgRaw&r=0',
            desc: 'CMAT is a popular management entrance exam conducted by the Faculty of Management, Tribhuvan University...',
          },
          {
            title: 'BIT Entrance Preparation',
            img: 'https://i.ytimg.com/vi/s-CnvmuEJ6k/maxresdefault.jpg',
            desc: 'The BIT entrance examination in Nepal is conducted by Tribhuvan University...',
          },
          {
            title: 'BSc.CSIT',
            img: 'https://th.bing.com/th/id/R.3b278015c9f96d1b15e11e0598bf263c?rik=AfOrWJBjjCG5Ow&pid=ImgRaw&r=0',
            desc: 'The Bachelor of Science in Computer Science and Information Technology (BSc CSIT) is a popular four-year program...',
          },
          {
            title: 'BCA Entrance Preparation',
            img: 'https://tse1.mm.bing.net/th/id/OIP._O8rDIqtEID1FI_j8A-20QHaD5?r=0&w=1201&h=631&rs=1&pid=ImgDetMain&o=7&rm=3',
            desc: 'The Bachelor of Computer Applications (BCA) program in Nepal is a four-year degree...',
          },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={course.img}
              alt={course.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl sm:text-2xl font-bold">{course.title}</h3>
              <p className="text-zinc-600 text-sm sm:text-base mt-2">
                {course.desc}
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center">
                  <FiBook className="text-green-700 text-xl" />
                  <span className="ml-2 text-sm">4 Subjects</span>
                </div>
                <div className="flex items-center">
                  <FaQuestion className="text-purple-700 text-xl" />
                  <span className="ml-2 text-sm">4 Subjects</span>
                </div>
                <div className="flex items-center">
                  <LiaVideoSolid className="text-red-700 text-xl" />
                  <span className="ml-2 text-sm">4 Subjects</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
        Colleges/Universities
      </h2>
      <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
        {[
          {
            name: 'Kathmandu University',
            img: 'https://utfs.io/f/iCN7oS8Yds8D7UNKY8nm6uNiY2ySwR9CtVMBF30bOr845UfD',
            logo: 'https://utfs.io/f/iCN7oS8Yds8D5FscYKNIs9q3Y6xHKaQpGCJj5VXF4tzPEwof',
            location: 'Dhulikhel Nepal',
            students: '16000 Students',
            type: 'Government',
          },
          {
            name: 'Agriculture and Forestry University',
            img: 'https://utfs.io/f/iCN7oS8Yds8Df605MYaP8m9nFwGR0SjlMEfq4OCKV2zvtYsb',
            logo: 'https://utfs.io/f/iCN7oS8Yds8DQTO2SNyTEx7nI39RkfjXLueMFZ8bGBi6PDQd',
            location: 'Chitwan Nepal',
            students: '2000 Students',
            type: 'Public',
          },
          {
            name: 'Rajarshi Janak University',
            img: 'https://utfs.io/f/iCN7oS8Yds8DD1Y3xzhLpQw5RofWtUmskEqhXbHNdDMxFAYr',
            logo: 'https://utfs.io/f/iCN7oS8Yds8Dly5MlgiHnAISD2jENBtoFRJkUdabs9w4zpLY',
            location: 'Janakpur',
            students: '2569+ Students',
            type: 'Government',
          },
        ].map((uni, index) => (
          <div
            key={index}
            className="relative bg-white text-black rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={uni.img}
              alt={uni.name}
              width={500}
              height={240}
              className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-32 left-4  w-20 h-20 bg-white shadow-xl rounded-lg flex items-center justify-center">
              <img
                src={uni.logo}
                alt={`${uni.name} Logo`}
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{uni.name}</h3>
              <div className="flex items-center text-zinc-500 mt-2">
                <CiLocationOn className="text-lg" />
                <span className="ml-1 text-sm">{uni.location}</span>
              </div>
              <div className="flex items-center text-zinc-500 mt-1">
                <BiGroup className="text-lg" />
                <span className="ml-1 text-sm">{uni.students}</span>
              </div>
              <div className="flex justify-end mt-2">
                <span className="px-4 py-1 bg-blue-400 rounded-full text-sm">
                  {uni.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>


      <h2 className='mx-4 text-[rgb(3,116,126)] text-3xl font-bold'>Partner Colleges</h2>
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
        <div key='index' className='my-4 '>
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
          <div className='flex flex-col'>
            <div className='flex'>
              <CiCalendarDate className='my-1' />
              <p className='mx-2'>{partners.established}</p>
            </div>
          <div className='flex'>
            <LuGraduationCap className='my-1' />
            <p className='mx-2'>{partners.Affiliated}</p>
          </div>
          </div>
          <div className='flex items-stretch my-6'>
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

      </section>
    </div>
  );
}    