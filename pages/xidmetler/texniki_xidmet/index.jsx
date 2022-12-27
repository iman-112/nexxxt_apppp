import Head from 'next/head'
import React from 'react'
import Texnikixidmet from '../../../components/Services/Texnikixidmet'


const Index = () => {
  return (
    <div>
    <Head>
       <title>Web Saytlara Texniki Xidmet | CansWeb</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       <meta name="description"  content="Sizin əlinizdə olan veb saytlarda etmək istədiyiniz dəyişikliklər, əlavə etmək istədiyiniz xidmətlər və s. bu tipli dəyişiklikləri biz sizin üçün edirik."  />
       
       <meta http-equiv="copyright" content="Copyright © 2023 CansWeb" />
      <meta http-equiv="content-language" content="az_AZ" />
      <meta name="title" content="Web Saytlara Texniki Xidmet | CansWeb"/>
      <meta name="keywords" content="texniki xidmet , saytlarin berpasi , saytlara texniki xidmet , cansweb" />
      <meta name="description" lang="az_AZ" content="description "/>
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="1 Days" />
      <meta name="robots" content="index, follow" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="all" />
      <meta name="author" content="İman Xəlilov" />
      <meta name="application-name" content="CansWeb" />
      <meta name="apple-mobile-web-app-title"  content="CansWeb" />
      <meta name="distribution" content="global" />
      <meta name="resource-type" content="CansWeb" />
      <meta itemprop="name"  content="CansWeb" />
      <meta itemprop="image" content="Cansweb" />
      <meta name="theme-color" content="#0A2728" />
      <meta name="msapplication-navbutton-color" content="#0A2728" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0A2728" />
      <meta name="name" content="tranimeci 2.0.5" />

     </Head>
   <div className='pt-4'>
     <Texnikixidmet />

     
   </div>
 
   </div>
  )
}

export default Index