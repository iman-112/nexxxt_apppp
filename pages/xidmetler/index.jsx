import Head from 'next/head'
import React from 'react'
import ServiceWrapper from '../../components/LinkServices/ServiceWrapper'




const Index = () => {
  return (
    <div>
    <Head>
       <title>Göstərilən Xidmətlər | CansWeb  
         </title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
   <div className='pt-4'>
 
     <ServiceWrapper />

     
   </div>
 
   </div>
  )
}

export default Index