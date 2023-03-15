import React from 'react'
import Appointment from '../components/common/Appointment'
import Footer from '../components/common/Footer'
import HeaderOffer from '../components/common/HeaderOffer'
import Navbar from '../components/common/Navbar'
import PopularServices from '../components/common/PopularServices'
import Header from '../components/landingpage/Header'
import Proffessionals from '../components/landingpage/Proffessionals'
import Reviews from '../components/landingpage/Reviews'

const LandingPage = () => {

  return (
    <div>
        
        <Navbar />
 
            <HeaderOffer />
 
        <Header />
        <PopularServices />
        <Reviews />
        <Proffessionals />
       <div id='appointment'>
       <Appointment />
       </div>
        <Footer />
    </div>
  )
}

export default LandingPage

