import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { FiBook } from 'react-icons/fi'
import { LiaVideoSolid } from 'react-icons/lia'

const UniversityCard = () => {
  return (
    <div> <h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
            College Courses
          </h2>
          <section className="px-7  sm:px-6 lg:px-15 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
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
                className="bg-white hover:shadow-2xl text-black group rounded-lg overflow-hidden shadow-inner "
              >
                <img
                  src={course.img}
                  alt={course.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-2xl "
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
          </section></div>
  )
}

export default UniversityCard