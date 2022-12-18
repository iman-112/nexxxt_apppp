
import React from 'react'
import Title from '../ui/Title'
import ServiceItem from './ServiceItem'
import ServiceItemApp from './ServiceItemApp'
import ServiceItemit from './ServiceItemit'
import ServiceItemSeo from './ServiceItemSeo'
import ServiceItemsmm from './ServiceItemsmm'



const ServiceWrapper = () => {
  return (
    <div className='container mx-auto mb-16'>
        <div className='flex flex-col items-center  w-full'>
        <Title addClass="text-center mb-5 uppercase text-[35px] font-bold text-primary "  > XİDMƏTLƏRİMİZ </Title>
        <div >
            <p className='text-center text-sm text-gray-600 px-3'>
              Aşağıda Göstərilən əsas xidmətləri sizlərə təklif edirik.
            </p>
        </div>
        </div>
       
        <div className='mt-8 grid md:grid-cols-3
        sm:grid-cols-2 grid-cols-1 gap-4'>
            <ServiceItem />
            <ServiceItemSeo />
            <ServiceItemApp />
            <ServiceItemsmm />
            <ServiceItemit />
        </div>
    </div>
  )
}

export default ServiceWrapper