import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'


interface Course{
  title: string,
  categories: string[],
  button:  string,
  img:  string,
  color: string,
  link: string[]
}
const CourseCard = () => {
  const [Courses, setCourses] = useState<Course[]> ([])

  useEffect(()=>{
    const FetchCourses =async () =>{
const response = await fetch("/api/OurCourses");
const data = await response.json();
setCourses(data);

    }
    FetchCourses();

  },[]);
  return (
    <div><h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
            Our Courses
          </h2>
          <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Courses.map((course, index) => (
              <div
                key={index}
                className="relative bg-white text-black rounded-lg   shadow-gray-400 hover:scale-105 transition-transform duration-500 hover:border-t-4 border-amber-700"
              >
                <div style={{backgroundColor:course.color}} 
                className="absolute right-0 h-full w-20  rounded-l-full flex items-center justify-center">
                  <img
                    src={course.img}
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
                      <Link key={i} href={course.link[i]}>
                        <span
                       
                        className="px-4 py-1 border-1 border-zinc-400 rounded-full text-sm"
                      >
                        {cat}
                      </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-zinc-700 hover:text-amber-900 hover:underline">
                   <Link href={course.button}> <span>Explore Categories</span> </Link>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </section></div>
  )
}

export default CourseCard