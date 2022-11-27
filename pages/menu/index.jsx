import React from 'react'
import ServiceWrapper from '../../components/Services/ServiceWrapper'
import Head from 'next/head'
const index = () => {
  return (
  <div>
     <Head>
        <title>Xidmətlərimiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className='pt-4'>
      <ServiceWrapper />

      
    </div>
  
    </div>
  )
}

export default index