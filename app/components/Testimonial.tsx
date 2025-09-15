import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface TestimonialData{
  img: string,
  students_name: string,
  college: string,
  feedback: string,
  rank: string
}
const Testimonial =  () => {
  const [Testimonial, setTestmimonial] = useState<TestimonialData[]> ([])

  useEffect(()=>{
    const FetchTestimonials = async () => {
      const response = await fetch("/api/Testimonials");
      const data = await response.json();
      setTestmimonial(data);
    }
    FetchTestimonials();
  })
  
  return (
    <div> <h2 className='text-[rgb(3,116,126)] font-bold text-center text-3xl'>Testimonials</h2>
      <Swiper modules={[Autoplay]} slidesPerView={1}
      breakpoints={{
        640:{
          slidesPerView:1,
        },
        768:{
      slidesPerView:2
        }
      }}
      
      autoplay={{delay:3000, disableOnInteraction:false}} className=' grid grid-cols-1 md:grid-cols-8 '>

        {Testimonial.map((Testimonials,index)=>{
       return(
          <SwiperSlide key={index} >
            <div className='flex my-5 md:mx-18'>
              <img 
                src={Testimonials.img} 
                alt={Testimonials.students_name}
                width={50}
                height={30}
                className='rounded-full'
              />
              <div className='flex flex-col mx-4'>
                <h2 className='font-bold'>{Testimonials.students_name}</h2>
                <p>{Testimonials.college}</p>
                
              </div>


              
            </div>
            <p className='text-start w-[350px] md:mx-18 '>{Testimonials.feedback}</p>

          </SwiperSlide>
         
       
      )
    })}
  
      </Swiper></div>
  )
}

export default Testimonial