import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/images/appointment.png'

const AppointmentButton = () => {
  return (
    <nav>
   <HashLink smooth to='/home#appointment' className="flex cursor-pointer p-2 bg-buttoncolor rounded-lg text-white font-sans w-56">    <img src={logo} className="px-2"></img>
       <p>Book an Appointment</p></HashLink>
    </ nav>
  )
}

export default AppointmentButton