

export default function Home() {
  return (
    <>
    <nav className="my-3 flex justify-between items-center">
       <img src="https://media.istockphoto.com/id/1145199614/vector/vector-illustration-with-color-phrase-generation-z.jpg?s=612x612&w=0&k=20&c=g3uova_gfEOP5UtWVEzJAO24ppFUKA05i2tsRjOM1zk=" className="w-20 "></img>
      
    <div className="flex justify-between">
      
      <ul className="flex from-neutral-800 text-xl justify-end gap-4 mr-6">
<li className="relative cursor-pointer group">
  Home
  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
</li>

        <li className="hover:underline">Courses</li>
        <li className="hover:underline">PYQs</li>
        <li className="hover:underline">Entrance Exam</li>
        

      </ul>
      <div className="bg-black px-10 py-2 text-center flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-gray-800 transition">
  Sign In
</div>

      
    </div>
    </nav>

   <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-white text-3xl font-mono overflow-hidden border-r-4 border-amber-500 whitespace-nowrap animate-typing">
        Welcome to Gen Z Learning 🚀
      </h1>
    </div>
    </>
  );
}
