import Image from 'next/image'
import React from 'react'


import Link from 'next/link'
const ServiceItemsmm = () => {
  return (
    <div className='bg-primary rounded-3xl '>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-56 h-52 bg-white '>
    <Image src="/images/smm-image.png" alt=" "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h4 className='text-xl font-semibold pb-4 text-center'> Social Media Manager</h4>
           <p className='text-[15px]'> Brendin populyarlığını artırmaq istəyənlər üçün SMM xidmətlərini təklif edirik. Sosial şəbəkələrdə tanıtım istənilən biznes üçün uyğundur: startaplardan tutmuş aparıcı şirkətlərə qədər.</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/xidmetler/smm_xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItemsmm