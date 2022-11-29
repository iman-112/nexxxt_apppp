
import React from 'react'
import Title from '../ui/Title'
import ServiceItem from './ServiceItem'

const ServiceWrapper = () => {
  return (
    <div className='container mx-auto mb-16'>
        <div className='flex flex-col items-center  w-full'>
        <Title addClass="text-center mb-5 uppercase text-[35px] font-bold text-primary "  > Xidmətlərimiz </Title>
        <div >
            <p className='text-center text-sm text-gray-600 px-3'>
               Aşağıdakı xidmətləri sizlərə təklif edir və əməl edirik. Daha ətraflı məlumat üçün xidmətə klik`ləyin.
            </p>
        </div>
        </div>
       
        <div className='mt-8 grid md:grid-cols-3
        sm:grid-cols-2 grid-cols-1 gap-4'>
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
        </div>
    </div>
  )
}

export default ServiceWrapper