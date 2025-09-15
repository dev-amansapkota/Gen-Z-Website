
import React, { useEffect, useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { FiBook } from 'react-icons/fi';
import { LiaVideoSolid } from 'react-icons/lia';


interface Courses {
  title: string;
  img: string;
  desc: string;
}

const UniversityCard = () => {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/courses');
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error! ${res.status} - ${errorText}`);
      }
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error('❌ Failed to load courses:', error);
      // Optionally set an error state to display to the user
      // setError('Failed to load courses. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  fetchCourses();
}, []);



   
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center my-8">
        College Courses
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : (
        <section className="px-7 sm:px-6 lg:px-15 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-2xl text-black group rounded-lg overflow-hidden shadow-inner"
            >
              <img
                src={course.img}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-2xl"
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
      )}
    </div>
  );
};

export default UniversityCard;
