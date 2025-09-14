import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CourseCard = () => {
  return (
    <div><h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
            Our Courses
          </h2>
          <section className="px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'NEB',
                categories: ['Class 11', 'Class 12', 'Dropper'],
                link: '/neb-categories',
                img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp',
                color: 'rgb(255, 243, 224)'
              },
              {
                title: 'SEE',
                categories: ['Class 10', 'Class 9', 'Class 8'],
                 link: '/see-categories',
                 img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/438cff9f-f45c-4961-9ab3-33a59b88352c.webp',
                 color: 'rgb(255, 242, 242)'
              },
              {
                title: 'Entrance Exam',
                categories: ['Bsc.CSIT', 'BCA', 'BIT'],
                 link: '/entrance-categories',
                 img: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ed50a2a8-e5fc-4ce0-bcee-823c32ea49e9.webp',
                 color: '#19183B'
              },
              {
                title: 'Bachelor',
                categories: ['BSC.CSIT', 'BCA', 'BIT'],
                 link: '/bachelors-categories',
                 img:'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/8556a2c4-1fd3-4d16-bdfb-62f4afa21310.webp',
                 color: '#673AB7D9'
              },
              {
                title: 'Others',
                categories: ['Kharidar', 'Nayab Subba', 'so on..'],
                link: '/others-categories',
                img:'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/002e5e6e-47f1-4b21-89e0-8218ffcce066.webp',
                color: 'rgb(255, 243, 224)'
              },
            ].map((course, index) => (
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
                      <span
                        key={i}
                        className="px-4 py-1 border-1 border-zinc-400 rounded-full text-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-zinc-700 hover:text-amber-900 hover:underline">
                   <Link href={course.link}> <span>Explore Categories</span> </Link>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </section></div>
  )
}

export default CourseCard