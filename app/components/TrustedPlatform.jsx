import React from 'react';

const TrustedPlatform = () => {
  return (
    <div className=" relative flex flex-col text-center py-10 justify-center bg-gradient-to-r from-[#e9f1fd] to-[#e5e8ec]">
  <h2 className="text-2xl font-bold text-gray-700">
    Nepal's <span className='text-purple-600'>Trusted</span> Educational Platform
  </h2>

  <div className="flex justify-center  mt-10 text-center  relative   ">
    <div className='absolute bg-white rounded text-black  px-2 md:left-110 py-2  '>
        <h2 className=''>Aman Sir, What's ExamSathi?</h2>
    </div>
    <div className='bg-[#140D52] absolute md:right-65 mt-40 rounded  text-white py-2 px-2 '>
        <h2 className=''>ExamSathi is where students get personalized support <br></br> and resources for exam preparation</h2>
    </div>
    <img
      src="https://ik.imagekit.io/x2tlk7qbl/Examsathi/unnamed%20(9)%20(1)%20(1).png"
      alt="Students"
      className="md:w-[600px] w-full h-auto  "
    />
  </div>
</div>

  );
};

export default TrustedPlatform;
