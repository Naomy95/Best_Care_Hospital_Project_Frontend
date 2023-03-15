import React from 'react'
import AboutClinicHeader from '../components/aboutClinic/AboutClinicHeader'
import Carousel from '../components/aboutClinic/Carousel'
import ClinicOffer from '../components/aboutClinic/ClinicOffer'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'

const AboutClinic = () => {
  return (
    <div>
      <Navbar />
        <AboutClinicHeader />
        <ClinicOffer />
        <Carousel />
        <Footer />
    </div>
  )
}

export default AboutClinic