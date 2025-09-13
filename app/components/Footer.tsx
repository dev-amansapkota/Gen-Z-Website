import Link from 'next/link'
import React from 'react'
import { CiInstagram, CiYoutube } from 'react-icons/ci'
import { FaFacebook, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div> <section className="w-full bg-[#FFFDF6] rounded-2xl py-6 px-4">
  <div className="flex flex-col md:flex-row justify-between items-start gap-1">
    
    <div className="flex items-center">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.jrPMu5I6nQScDjDIZk3JEwHaE8"
        className="w-[80px] h-[80px] object-cover rounded-2xl mr-4"
        alt="Logo"
      />
      <div>
        <h2 className="font-bold text-lg">Generation Z Nepal</h2>
        <p className="text-sm">We are for quality education</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 justify-evenly md:gap-[200px] w-full md:w-auto">
      <div>
        <h2 className="font-bold mb-2">Courses</h2>
        <p>Class 10</p>
        <p>Class 11</p>
        <p>Class 9</p>
        <p>Class 12</p>
      </div>
      <div>
        <h2 className="font-bold mb-2">Entrance</h2>
        <p>BSc.CSIT</p>
        <p>BCA</p>
        <p>BIT</p>
        <p>BBS</p>
        <p>BBA</p>
      </div>
      {/* Batches */}
      <div>
        <h2 className="font-bold mb-2">Batches</h2>
        <p>Alpha</p>
        <p>Beta</p>
        <p>Gamma</p>
        <p>Delta</p>
      </div>
    </div>
  </div>

  <div className="flex gap-6 justify-start mt-6 text-2xl">
    {[
      {
        logo: <FaFacebook />,
        link: "https://facebook.com",
        color: "#3b5998",
      },
      {
        logo: <CiInstagram />,
        link: "https://instagram.com",
        color: "#E4405F",
      },
      {
        logo: <FaTiktok />,
        link: "https://tiktok.com",
        color: "#000000",
      },
      {
        logo: <CiYoutube />,
        link: "https://youtube.com",
        color: "#FF0000",
      },
    ].map((socialIcon, index) => (
      <Link
        key={index}
        href={socialIcon.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 duration-300"
        style={{ color: socialIcon.color }}
      >
        {socialIcon.logo}
      </Link>
    ))}
  </div>

  <footer className="text-center font-bold mt-6 text-amber-800">
    © 2025 Aman Sapkota
  </footer>
</section>

        </div>
  )
}

export default Footer