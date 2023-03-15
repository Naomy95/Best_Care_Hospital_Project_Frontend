import React from 'react'
import Appointment from '../components/common/Appointment'
import Footer from '../components/common/Footer'

import Navbar from '../components/common/Navbar'
import PopularServices from '../components/common/PopularServices'
import Header from '../components/landingpage/Header'
import Gurantee from '../components/servicepage/Gurantee'

const ServicePage = () => {
  return (
    <div>
        <Navbar />
      
        <PopularServices />
        <Gurantee />
       <div className='pt-20' id='appointment'>
       <Appointment />
       </div>
        <Footer />
    </div>
  )
}

export default ServicePage