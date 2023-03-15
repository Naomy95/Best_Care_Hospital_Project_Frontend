import React from 'react'
import logo from "../../assets/images/logo1.png";
import fb from "../../assets/images/facebook.png";
import location from "../../assets/images/location1.png";
import phone from "../../assets/images/phone1.png";
import appointment from "../../assets/images/appointment1.png";


const Footer = () => {
  return (
    <div className='bg-buttoncolor grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-28 md:px-12'>
        <div className='flex flex-col justify-start lg:py-10 py-2'>
        <img src={logo} className="h-16 w-56" alt="Best Care" />

        <p className='text-white pt-6'>Find us in Social Media</p>
        <div className='flex py-2'>
        <img src={fb} width="20px" height="20px" className='mr-4' alt="" />
        <img src={fb} width="20px" height="20px" className='mr-4' alt="" />
        <img src={fb} width="20px" height="20px" className='mr-4' alt="" />
        <img src={fb} width="20px" height="20px" className='mr-4' alt="" />
        </div>
        </div>
        
        <div className='flex flex-col lg:items-end py-12 '>
<div>
<p className='text-white font-sans items-center mb-2 lg:mb-4 text-2xl font-semibold'>Contacts</p>
<div className="flex mb-2 text-white font-sans items-center">
            <img src={location} className="mr-2 w-4 h-5 " alt="" />
            <p className="text-md font-normal font-sans text-white">
              82 Baridhara, Dhaka
            </p>
          </div>
          <div className="flex mb-2 text-white font-sans items-center">
            <img src={phone} className="mr-2 w-4 h-5" alt="" />
            <p className="text-md font-normal font-sans text-white">12345678</p>
          </div>

          <div className='flex text-white font-sans items-center'>
       <img src={appointment} className="pr-2 w-5 h-4"></img>
       <p>Book an Appointment</p>
    </div>
</div>
        </div>
    </div>
  )
}

export default Footer