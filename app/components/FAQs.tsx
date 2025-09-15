import React, { useEffect, useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface questions {
  question: string,
  answer:string
}
const FAQs = () => {
     const [isArrowOpen, setIsArrowOpen] = useState(false);
     const [faqs, setFaqs] = useState <questions[]> ([])

     useEffect(()=>{
      const fetchFaqs =async () => {
       const response = await fetch("/api/FAQs") ;
      const data = await response.json();

      setFaqs(data);
      }

      fetchFaqs();
     },[]);
     
  return (
    <div><div className='my-6'>
          <h2 className='font-bold text-center text-2xl  text-red-700 '>FAQs</h2>
        <p className='text-center'> Have Any Queries? Feel free to ask</p>
        
        </div>
        
        <div className=' flex max-w-1/2  mx-auto '>
                
         { faqs.map((FAQ, index)=>(
           <div key={index} className='hover:underline max-w-1/2  mx-auto'>
            <button onClick={()=>setIsArrowOpen(!isArrowOpen)}
          
        >
              
            <div className='flex'><h2 className='font-bold'>{FAQ.question}</h2>
       

          {isArrowOpen ?(
            <FiChevronUp className='my-1 mx-4'/>
          ):(
            <FiChevronDown className='my-1 mx-4'/>
          )
            
          }</div>
          

          {isArrowOpen && (
            <div className='text-start'>
              <p> {'=> '}{FAQ.answer}</p>
            </div>
            
          )
}

         
          </button>
            </div>

         ))}
        
        
        
          
           <div className=' items-end flex '><img src='https://i.imgur.com/oeqNAPk.png' className='md:w-[200px]  '></img></div>
        </div></div>
  )
}

export default FAQs