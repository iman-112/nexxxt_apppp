import Image from 'next/image'
import React from 'react'


import Link from 'next/link'
const ServiceItem = () => {
  return (
    <div className='bg-primary rounded-3xl mb-6'>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-56 h-48 bg-white '>
    <Image src="/images/web-image.png" alt="  "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h4 className='text-xl font-semibold pb-4 text-center'> Web Sayt</h4>
           <p className='text-[15px]'> Müasir freymvork və Proqram dillərindən istifadə edərək, sürətli, kreativ, geniş-funksiyalı, bütün cihaz ekranlarına uyğunlaşan yüksək səviyyəli , istəyinizə uyğun veb saytlar  hazırlayırıq.</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/xidmetler/sayt_xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItem