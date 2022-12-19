import Image from 'next/image'
import React from 'react'


import Link from 'next/link'
const ServiceItemApp = () => {
  return (
    <div className='bg-primary rounded-3xl mb-6'>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-56 h-48 bg-white '>
    <Image src="/images/app-image.png" alt=" "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h4 className='text-xl font-semibold pb-4 text-center'> Mobil Tətbiq </h4>
           <p className='text-[15px]'> Veb saytlar hazırlayaraq sektorda adını qazanan CansWeb, veb saytlarla yanaşı, IOS və Android platformalarında tətbiqlər hazırlayaraq müştərilərinə mobil tətbiq xidmətləri təqdim edir.</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/xidmetler/app_xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItemApp