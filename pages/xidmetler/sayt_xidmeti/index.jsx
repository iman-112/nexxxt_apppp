import Head from 'next/head'
import React from 'react'
import SaytlarinHazirlanmasi from '../../../components/Services/SaytlarinHazirlanmasi'

const Index = () => {
  return (
    <div>
    <Head>
       <title>Web Saytların Hazırlanması</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
   <div className='pt-4'>
     <SaytlarinHazirlanmasi />

     
   </div>
 
   </div>
  )
}

export default Index