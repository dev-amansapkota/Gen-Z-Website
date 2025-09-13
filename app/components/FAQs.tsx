import React, { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const FAQs = () => {
     const [isArrowOpen, setIsArrowOpen] = useState(false);
  return (
    <div><div className='my-6'>
          <h2 className='font-bold text-center text-2xl  text-red-700 '>FAQs</h2>
        <p className='text-center'> Have Any Queries? Feel free to ask</p>
        
        </div>
        
        <div className=' flex max-w-1/2  mx-auto '>
                
          <button onClick={()=>setIsArrowOpen(!isArrowOpen)}
          
          className='hover:underline max-w-1/2  mx-auto '>
              
            <div className='flex'><h2 className='font-bold'>What is Generation Z website?</h2>
       

          {isArrowOpen ?(
            <FiChevronUp className='my-1 mx-4'/>
          ):(
            <FiChevronDown className='my-1 mx-4'/>
          )
            
          }</div>
          

          {isArrowOpen && (
            <div className='text-start'>
              <p> {'=> '}A Generation Z website is a digital platform designed specifically to engage and resonate with the unique preferences, values, and online behaviors of Generation Z, emphasizing speed, visual storytelling, personalization, social media integration, and mobile-first usability.</p>
            </div>
            
          )
}

         
          </button>
           <div className=' items-end flex '><img src='https://i.imgur.com/oeqNAPk.png' className='md:w-[200px]  '></img></div>
        </div></div>
  )
}

export default FAQs