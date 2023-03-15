import React from "react";
import phone from "../../assets/images/phone.png";
import AppointmentButton from "../buttons/AppointmentButton";
import SubmitButton from "../buttons/SubmitButton";

const Appointment = () => {
  return (
    <div
  
      className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-28 md:px-12 bg-headerGreen gap-6"
      
    >
      <div className="pt-12 pb-24 lg:pb-1">
        <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-start">
          Make an appointment
          <br></br>
          with an Specialist
        </p>

        <p className="text-md font-normal font-sans text-black pt-24">
          Have Questions?
        </p>
        <div className="flex items-center mb-8">
          <img src={phone} className="mr-2 w-4 h-5" alt="" />
          <p className="text-md font-normal font-sans text-black">12345678</p>
        </div>
        <AppointmentButton />
      </div>

      <div className="rounded-lg" style={{position:'relative', bottom:'50px'}}>
        <div className="bg-buttoncolor text-center p-6 text-white text-sans text-3xl rounded-t-lg">Ask Us Anything</div>
       <div className="px-14 bg-white py-4 rounded-b-lg">

       <div className="mb-6">
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-black"
          >
            * Full Name
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="e.g. sam Smith"
            className="border-[2px] border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            required
          ></input>
        </div>
        

       <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            * Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="e.g. sam_Smith@gmail.com"
            className="border-[2px] border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            required
          ></input>
        </div>

       <div className="mb-6">
          <label
            htmlFor="phone_number"
            className="block mb-2 text-sm font-medium text-black"
          >
            * Mobile Number
          </label>
          <input
            type="number"
            id="number"
            placeholder="e.g. +880-1234567"
            className="border-[2px] border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            required
          ></input>
        </div>

       <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-black"
          >
            * Message
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="Your message"
            className="border-[2px] border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            required
          ></input>
        </div>

     <SubmitButton onClick={()=>alert('Your Appointment is on the way!!')} />

     <p className="text-black text-sm font-medium font-sans py-4">By clicking the button you agree to the Privacy Policy
and Terms of Services</p>

       </div>
      </div>
    </div>
  );
};

export default Appointment;
