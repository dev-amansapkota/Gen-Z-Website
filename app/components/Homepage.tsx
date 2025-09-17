import React, { useEffect, useState } from 'react'
import { Navigation,Pagination,Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'




interface Slides {
  img: string,
  title:string,
  desc: string,
  url: string,
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
             <Link href={slide.url}>
                <img src={slide.img}></img>
             </Link>
          </SwiperSlide>
        ))
      }

    </Swiper>
    )}
   
       
      </div>
  )
}

export default Homepage