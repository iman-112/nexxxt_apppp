import React from 'react'
import Customers from '../../components/customers/Customers'
import Footer from '../../components/layout/Footer'
import Reservation from '../../components/Reservation'
import ServiceWrapper from '../../components/Services/ServiceWrapper'
import About from '../../components/ui/About'
import Campaigns from '../../components/ui/Campaigns'
import Carousel from '../../components/ui/Carousel'


const Index = () => {
  return (
    <React.Fragment  >
    <Carousel />
    <Campaigns />
    <ServiceWrapper />
    <About />
    <Reservation />
    <Customers />
 
    </React.Fragment>
  )
}

export default Index