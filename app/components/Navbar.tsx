import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


interface Batch {
  title: string;
  duration: string;
  location: string;
  startDate: string;
  tag?: string; 
}

interface BatchCategory {
  name: string;
  batches: Batch[];
}



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [batchTab, setBatchTab] = useState(0);
  const [batch, setBatch] = useState<BatchCategory[]> ([])


  useEffect(()=>{
    const FetchBatches =async () =>{
   const response =await fetch('/api/Batches');
   const data =await  response.json();
   setBatch(data);

    }
    FetchBatches();

  },[]);

  

  const categories = [
    {
      name: "Data Science & Analytics",
      courses: [
        { title: "Data Science With Generative AI Course", tag: "Bestseller", duration: "6 months" },
        { title: "Data Analytics With AI Course (Live)", tag: "Popular", duration: "7 months" },
        { title: "Data Analytics Course - Hinglish", duration: "8 months" },
      ],
    },
    {
      name: "Software Development Courses",
      courses: [
        { title: "Full Stack Web Dev", tag: "Popular", duration: "6 months" },
        { title: "Frontend with React", duration: "4 months" },
      ],
    },
    {
      name: "Digital Marketing With AI",
      courses: [
        { title: "AI Marketing Bootcamp", duration: "3 months" },
      ],
    },
  ];

  const masterclasses = [
    {
      title: "The Fastest-Hiring Companies Want FinTech...",
      date: "Monday, 15 Sep, 2025",
    },
    {
      title: "Data Science for Beginners: Predicting House Prices",
      date: "Sunday, 14 Sep, 2025",
    },
    {
      title: "Data Analytics Essentials: Introduction to SQL",
      date: "Sunday, 14 Sep, 2025",
    },
  ];

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md py-2 px-4 sm:px-6 lg:px-10 flex justify-between items-center flex-wrap font-bold">
    
      <div className="flex-shrink-0">
        <img
          src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-1/537426629_690766817355702_5921836546936864767_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeHrvz6lECSF9FaoONR5bihfBxU7QgpyRzgHFTtCCnJHOGoTS2HsuOiDda1_5qczwyOVGjryd85n1ESyxSQxJ_Um&_nc_ohc=1hOjxhamoDIQ7kNvwHAqqWw&_nc_oc=Adkjnblnc-n0oBE0JHNPcuZTtfIKzwz_3P_jz1OOV9Fw_cYNObLHaRs3FgmyaI4DORo99xL73d2SuLWfpU2B6wu5&_nc_zt=24&_nc_ht=scontent.fktm21-2.fna&_nc_gid=aE8FZfBSeKkp3tWoEiWUOg&oh=00_AfanN9ORrrmrd1-HnC6RVnnnmfeo2_xsAY00pypztDXsPg&oe=68CDF0D8"
          alt="Gen Z Learning Logo"
          className="w-16 sm:w-20 h-[50px]"
        />
      </div>

    
      <ul className="hidden md:flex text-lg gap-6 items-center">

        <li className="relative group">
          <button className="hover:underline">Batches</button>
          <div className="absolute left-0 top-full mt-1 w-[900px] bg-white shadow-xl border z-50
                          opacity-0 pointer-events-none
                          group-hover:opacity-100 group-hover:pointer-events-auto
                          transition-opacity duration-200">
            <div className="grid grid-cols-3 p-6 gap-6">
              <div className="border-r pr-4">
                {batch.map((batch, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setBatchTab(idx)}
                    className={`block w-full text-left py-2 px-3 rounded ${
                      idx === batchTab
                        ? "bg-red-100 text-red-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {batch.name}
                  </button>
                ))}
              </div>

              {/* Batches List */}
              <div className="border-r pr-4">
                {batch[batchTab]?.batches?.map((b, idx) => (
                  <div key={idx} className="border p-3 rounded-lg mb-2">
                    <div className="flex justify-between items-center">
                      <h4>{b.title}</h4>
                      {b.tag && (
                        <span className="text-xs bg-purple-200 text-purple-800 font-semibold px-2 py-0.5 rounded">
                          {b.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{b.duration}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-blue-700 font-semibold text-sm mb-2">Masterclasses</h3>
                {masterclasses.map((item, idx) => (
                  <div key={idx} className="text-sm mb-2">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>

        {/* Courses */}
        <li className="relative group">
          <button className="hover:underline">Courses</button>
          <div className="absolute left-0 top-full mt-1 w-[900px] bg-white shadow-xl border z-50
                          opacity-0 pointer-events-none
                          group-hover:opacity-100 group-hover:pointer-events-auto
                          transition-opacity duration-200">
            <div className="grid grid-cols-3 p-6 gap-6">
              {/* Category Tabs */}
              <div className="border-r pr-4">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveCategory(idx)}
                    className={`block w-full text-left py-2 px-3 rounded ${
                      idx === activeCategory
                        ? "bg-red-100 text-red-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Courses List */}
              <div className="pr-4">
                {categories[activeCategory].courses.map((course, idx) => (
                  <div key={idx} className="border p-3 rounded-lg mb-2 hover:shadow-sm transition">
                    <div className="flex justify-between items-center">
                      <h4>{course.title}</h4>
                      {course.tag && (
                        <span className="text-xs bg-purple-200 text-purple-800 font-semibold px-2 py-0.5 rounded">
                          {course.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{course.duration}</p>
                  </div>
                ))}
              </div>

              {/* Masterclasses */}
              <div className="border-l pl-4">
                <h3 className="text-blue-700 font-semibold text-sm mb-2">Masterclasses</h3>
                {masterclasses.map((item, idx) => (
                  <div key={idx} className="text-sm mb-2">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>

        <li className="hover:underline">PYQs</li>
        <li className="hover:underline">Entrance Exam</li>
        <li className="hover:underline">Mock Exam</li>
      </ul>

      {/* Search, Sign In, Hamburger */}
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <div className="relative w-40 sm:w-60 md:w-72">
          <FaSearch className="absolute top-2 left-2 text-gray-500" />
          <input
            type="search"
            placeholder="Search Course"
            className="w-full pl-8 pr-3 py-1 border rounded-md text-sm"
          />
        </div>
        <button className="bg-blue-900 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
          Sign In
        </button>
        <button
          className="md:hidden text-2xl ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="w-full mt-4 bg-gray-800 text-white px-4 py-4 md:hidden rounded-lg">
          <ul className="flex flex-col gap-4 text-base">
            <li>
              <details>
                <summary className="cursor-pointer">Batches</summary>
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  {batch.map((cat, idx) => (
                    <li key={idx}>
                      <p className="font-semibold">{cat.name}</p>
                      <ul className="pl-2 space-y-1">
                        {cat.batches.map((b, i) => (
                          <li key={i} className="text-gray-300">
                            {b.title}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">Courses</summary>
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <p className="font-semibold">{cat.name}</p>
                      <ul className="pl-2 space-y-1">
                        {cat.courses.map((c, i) => (
                          <li key={i} className="text-gray-300">{c.title}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>PYQs</li>
            <li>Entrance Exam</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
