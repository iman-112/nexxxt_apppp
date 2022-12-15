import Head from 'next/head'
import React from 'react'
import ServiceItemSeo from '../../components/Services/ServiceItemSeo'

const Index = () => {
  return (
    <div>
    <Head>
       <title>Web Saytların Hazırlanması</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
   <div className='pt-4'>
     <ServiceItemSeo />

     
   </div>
 
   </div>
  )
}

export default Index