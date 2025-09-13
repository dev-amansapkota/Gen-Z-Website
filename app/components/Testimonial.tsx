import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Testimonial = () => {
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

        {[
          {
            img: 'https://pariksha.solutions/images/testimonials/Prajwal-Pathak.jpeg' ,
            student_name:'Prajwal Pathak',
            college: 'Mechi Multiple Campus, Bsc. CSIT',
            feedback: '"This platform made entrance preparation so easy and effective. The notes, videos, and mock tests really helped me understand the topics well. I&quotem thankful for the support and highly recommend it to others."',
            rank: 'Rank:2',


        },
        {
            img: 'https://pariksha.solutions/images/testimonials/Prajwal-Pathak.jpeg' ,
            student_name:'Prajwal Pathak',
            college: 'Mechi Multiple Campus, Bsc. CSIT',
            feedback: '"This platform made entrance preparation so easy and effective. The notes, videos, and mock tests really helped me understand the topics well. I&quotem thankful for the support and highly recommend it to others."',
            rank: 'Rank:2',


        },
        {
            img: 'https://pariksha.solutions/images/testimonials/Prajwal-Pathak.jpeg' ,
            student_name:'Prajwal Pathak',
            college: 'Mechi Multiple Campus, Bsc. CSIT',
            feedback: '"This platform made entrance preparation so easy and effective. The notes, videos, and mock tests really helped me understand the topics well. I&quotem thankful for the support and highly recommend it to others."',
            rank: 'Rank:2',


        },
        {
            img: 'https://pariksha.solutions/images/testimonials/Prajwal-Pathak.jpeg' ,
            student_name:'Prajwal Pathak',
            college: 'Mechi Multiple Campus, Bsc. CSIT',
            feedback: '"This platform made entrance preparation so easy and effective. The notes, videos, and mock tests really helped me understand the topics well. I&quotem thankful for the support and highly recommend it to others."',
            rank: 'Rank:2',


        },
        {
            img: 'https://pariksha.solutions/images/testimonials/Prajwal-Pathak.jpeg' ,
            student_name:'Prajwal Pathak',
            college: 'Mechi Multiple Campus, Bsc. CSIT',
            feedback: '"This platform made entrance preparation so easy and effective. The notes, videos, and mock tests really helped me understand the topics well. I&quotem thankful for the support and highly recommend it to others."',
            rank: 'Rank:2',


        },
    ].map((Testimonials,index)=>{
       return(
          <SwiperSlide key={index} >
            <div className='flex my-5 md:mx-18'>
              <img 
                src={Testimonials.img} 
                alt={Testimonials.student_name}
                width={50}
                height={30}
                className='rounded-full'
              />
              <div className='flex flex-col mx-4'>
                <h2 className='font-bold'>{Testimonials.student_name}</h2>
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