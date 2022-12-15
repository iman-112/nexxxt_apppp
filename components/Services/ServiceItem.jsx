import Image from 'next/image'
import React from 'react'


import Link from 'next/link'
const ServiceItem = () => {
  return (
    <div className='bg-primary rounded-3xl '>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-36 h-36 bg-white '>
    <Image src="/images/service-4.png" alt=" "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h4 className='text-xl font-semibold pb-4 text-center'> Web Saytların hazırlanması</h4>
           <p className='text-[15px]'> Müasir freymvork və CMS-lərdən istifadə edərək, sürətli, kreativ, geniş-funksiyalı, bütün cihaz ekranlarına uyğunlaşan yüksək səviyyəli veb saytlar və veb tətbiqlər hazırlayırıq.</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/sayt_xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItem