import React, { useEffect, useState } from 'react'
import { Navigation,Pagination,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'




interface Slides {
  img: string,
  title:string,
  desc: string,
}

const Homepage = () => {
 const [slides, setslides] = useState<Slides[]> ([])

 useEffect(()=>{
  const fetchSliders = async () => {
  const response = await fetch("/api/slider");
  const  data = await response.json();
setslides(data);
  }

  fetchSliders();
 },[]);
  return (
   <div >

    {slides.length > 1 && (
 <Swiper modules={[Navigation,Pagination,Autoplay]}
    autoplay={{delay:3000,  disableOnInteraction: false,}}
    
    navigation
    
    loop={true}
    
    pagination = {{clickable:true}}

    
    >
      {
        slides.map((slide, index)=>(
          <SwiperSlide key={index}>
             <div >
                <img src={slide.img}></img>
             </div>
          </SwiperSlide>
        ))
      }

    </Swiper>
    )}
   
       
      </div>
  )
}

export default Homepage