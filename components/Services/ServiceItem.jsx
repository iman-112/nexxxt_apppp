import Image from 'next/image'
import React from 'react'
import Title from "../ui/Title"
import { RiShoppingCart2Fill} from "react-icons/ri"
const ServiceItem = () => {
  return (
    <div className='bg-primary rounded-3xl'>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-36 h-36 bg-white '>
    <Image src="/images/service-4.png" alt=" "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h4 className='text-xl font-semibold pb-2'> Web Saytların hazırlanması</h4>
           <p className='text-[15px]'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt similique expedita eius molestiae id culpa corrupti aspernatur eligendi voluptatum illum?.</p>  
           <div className='flex justify-between   items-center mt-4'>
            <span className='text-xs '>650 AZN-dən başlayaraq</span>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItem