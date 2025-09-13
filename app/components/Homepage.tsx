import React from 'react'

const Homepage = () => {
  return (
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
  )
}

export default Homepage