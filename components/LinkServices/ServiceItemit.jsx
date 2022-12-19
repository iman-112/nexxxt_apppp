import Image from 'next/image'
import React from 'react'


import Link from 'next/link'
const ServiceItemit = () => {
  return (
    <div className='bg-primary rounded-3xl '>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-56 h-52 bg-white '>
    <Image src="/images/it-image.png" alt=" "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h4 className='text-xl font-semibold pb-4 text-center'> İT / HardWare</h4>
           <p className='text-[15px]'> İnformasiya texnologiyaları müasir həyatın bir hissəsi halına gəldikdə bu günə qədər müxtəlif biznes sahələrində biznes-proseslərin və idarəetmələrin təşkili üçün zəruri köməklik göstərilməlidir</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/xidmetler/it_xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItemit