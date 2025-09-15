import React, { useEffect, useState } from 'react'
import { BiGroup } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'

interface University {
  name: string;
  img: string;
  logo: string;
  location: string;
  students: string;
  type: "Government" | "Public" | "Private";
}
const UniversityCard = () => {
  const [universities, setUniversities] = useState<University[]> ([]);

  useEffect(()=>{
  const  fetchUniversityDetails = async ()=>{
    
  try{
const response = await fetch("/api/universities");
const data = await response.json();
setUniversities(data);
  } catch(err){

  }
   }
   fetchUniversityDetails();
  },[]
  
  );
  return (
    <div><h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
            Colleges/Universities
          </h2>
          <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {universities.map((universities, index) => (
              <div
                key={index}
                className="relative bg-white text-black rounded-lg overflow-hidden"
              >
                <img
                  src={universities.img}
                  alt={universities.name}
                  width={500}
                  height={240}
                  className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-32 left-4  w-20 h-20 bg-white shadow-xl rounded-lg flex items-center justify-center">
                  <img
                    src={universities.logo}
                    alt={`${universities.name} Logo`}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{universities.name}</h3>
                  <div className="flex items-center text-zinc-500 mt-2">
                    <CiLocationOn className="text-lg" />
                    <span className="ml-1 text-sm">{universities.location}</span>
                  </div>
                  <div className="flex items-center text-zinc-500 mt-1">
                    <BiGroup className="text-lg" />
                    <span className="ml-1 text-sm">{universities.students}</span>
                  </div>
                  <div className="flex justify-end mt-2">
                    <span className="px-4 py-1 bg-blue-400 rounded-full text-sm">
                      {universities.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
    </div>
  )
}

export default UniversityCard