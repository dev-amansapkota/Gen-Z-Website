import React, { useState } from 'react'

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
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
  )
}

export default Navbar