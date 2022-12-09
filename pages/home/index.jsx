import React from 'react'
import Customers from '../../components/customers/Customers'
import Footer from '../../components/layout/Footer'
import Reservation from '../../components/Reservation'
import ServiceWrapper from '../../components/Services/ServiceWrapper'
import About from '../../components/ui/About'

import Carousel from '../../components/ui/Carousel'
import Tech from '../../components/ui/Tech'


const Index = () => {

  
  return (
    <React.Fragment  >
    <Carousel />
    <Tech />
    <About />
    <ServiceWrapper />
    
    <Reservation />
    <Customers />
   
    </React.Fragment>
  )
}

export default Index