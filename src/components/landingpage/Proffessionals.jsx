import React from 'react'
import doc1 from '../../assets/images/doc1.png'
import doc2 from '../../assets/images/doc2.png'
import doc3 from '../../assets/images/doc3.png'

const Proffessionals = () => {
  return (
    <div className="py-12 px-4 lg:px-28 md:px-12 bg-white">
  
    <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-start">
      Trust the Professionals
    </p>

   

    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 py-10 justify-items-center">

      <div className=" mb-10 lg:w-[400px] h-[600px] md:w-[350px] w-[300px] ">
        <div className="flex items-center justify-center h-1/2 bg-headerGreen   pt-2">
          <img  src={doc1} alt="" />
        </div>
        <p className="px-2 lg:px-4 text-headerText text-xl font-semibold text-start pt-8">
          Doctor Sarah
        </p>
        <p className=" px-2 lg:px-4 text-headerText text-base font-medium text-start pt-2">
          Gynecologist
        </p>
        <p className="px-2 lg:px-4 text-black text-base font-medium text-start pt-8">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore magna 
aliquam erat volutpat. Ut wisi enim ad 
minim veniam, quis nostrud exerci tation 
ullamcorper suscicr odio dignissim qui 
blandit prae</p>
      </div>

      <div className=" mb-10 lg:w-[400px] h-[600px] md:w-[350px] w-[300px] ">
        <div className="flex items-center justify-center h-1/2 bg-headerGreen   pt-2">
          <img  src={doc2} alt="" />
        </div>
        <p className="px-2 lg:px-4 text-headerText text-xl font-semibold text-start pt-8">
          Doctor John
        </p>
        <p className=" px-2 lg:px-4 text-headerText text-base font-medium text-start pt-2">
          Cardiogist
        </p>
        <p className="px-2 lg:px-4 text-black text-base font-medium text-start pt-8">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore magna 
aliquam erat volutpat. Ut wisi enim ad 
minim veniam, quis nostrud exerci tation 
ullamcorper suscicr odio dignissim qui 
blandit prae</p>
      </div>

      <div className=" mb-10 lg:w-[400px] h-[600px] md:w-[350px] w-[300px] ">
        <div className="flex items-center justify-center h-1/2 bg-headerGreen   pt-2">
          <img  src={doc3} alt="" />
        </div>
        <p className="px-2 lg:px-4 text-headerText text-xl font-semibold text-start pt-8">
          Doctor Huang
        </p>
        <p className=" px-2 lg:px-4 text-headerText text-base font-medium text-start pt-2">
          Dentist
        </p>
        <p className="px-2 lg:px-4 text-black text-base font-medium text-start pt-8">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore magna 
aliquam erat volutpat. Ut wisi enim ad 
minim veniam, quis nostrud exerci tation 
ullamcorper suscicr odio dignissim qui 
blandit prae</p>
      </div>

      

    </div>
    </div>
  
  )
}

export default Proffessionals