import React from "react";
import otorhinolaryngology from "../../assets/images/logo_Otorhinolaryngology.png";
import padiatric from "../../assets/images/logo_padiatric.png";
import neorology from "../../assets/images/logo_neorology.png";
import gynecology from "../../assets/images/logo_gynecology.png";
import cardiology from "../../assets/images/logo_cardiology.png";
import dental from "../../assets/images/logo_dental.png";

const PopularServices = () => {
  return (
    <div className="py-12 px-4 lg:px-28 bg-white">
      <p className="text-text lg:pb-12 pb-4 text-sm lg:text-base font-sans font-medium leading-10 text-center">
        Our Popular Services
      </p>
      <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-center">
        We offer a whole range of treatments
      </p>

      <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-center">
        for you, your family and friends
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10"></div>  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">

        <div className="border-[2px] border-hoverBackground rounded-lg px-4 pb-8">
          <div className="flex items-center justify-center  h-4/6 pt-2">
            {" "}
            <img className=" w-[186px]" src={cardiology} alt="" />
          </div>
          <p className="text-headerText text-xl font-semibold text-start pt-8">
            Cardiology
          </p>
          <p className="text-black text-base font-medium text-start pt-2">
            Ache in heart? Do not delay and take our service
          </p>
        </div>

        <div className="border-[2px] border-hoverBackground rounded-lg px-4 pb-8">
          <div className="flex items-center justify-center  h-4/6 pt-2">
            {" "}
            <img className=" w-[186px]" src={padiatric} alt="" />
          </div>
          <p className="text-headerText text-xl font-semibold text-start pt-8">
            Cardiology
          </p>
          <p className="text-black text-base font-medium text-start pt-2">
          We believe in happy and healthy babies
are the pillars of future!
Come to us for your child’s care
          </p>
        </div>

        <div className="border-[2px] border-hoverBackground rounded-lg px-4 pb-8">
          <div className="flex items-center justify-center  h-4/6 pt-2">
            {" "}
            <img className=" w-[186px]" src={neorology} alt="" />
          </div>
          <p className="text-headerText text-xl font-semibold text-start pt-8">
            Neorology
          </p>
          <p className="text-black text-base font-medium text-start pt-2">
          We are providing advanced and
comprehensive Neurology &
Neurosurgery facilities under one roof 
          </p>
        </div>

        <div className="border-[2px] border-hoverBackground rounded-lg px-4 pb-8">
          <div className="flex items-center justify-center  h-4/6 pt-2">
            {" "}
            <img className=" w-[186px]" src={gynecology} alt="" />
          </div>
          <p className="text-headerText text-xl font-semibold text-start pt-8">
            Gynecology
          </p>
          <p className="text-black text-base font-medium text-start pt-2">
          From routine care to high risk situations,
we try our best for our women
          </p>
        </div>

        <div className="border-[2px] border-hoverBackground rounded-lg px-4 pb-8">
          <div className="flex items-center justify-center  h-4/6 pt-2">
            {" "}
            <img className=" w-[186px]" src={dental} alt="" />
          </div>
          <p className="text-headerText text-xl font-semibold text-start pt-8">
            Dental
          </p>
          <p className="text-black text-base font-medium text-start pt-2">
          Toothache? Don’t worry, our Dental
department is here
          </p>
        </div>

        <div className="border-[2px] border-hoverBackground rounded-lg px-4 pb-8">
          <div className="flex items-center justify-center  h-4/6 pt-2">
            {" "}
            <img className=" w-[186px]" src={otorhinolaryngology} alt="" />
          </div>
          <p className="text-headerText text-xl font-semibold text-start pt-8">
          Otorhinolaryngology
          </p>
          <p className="text-black text-base font-medium text-start pt-2">
          Our ENT department is one of the best
in Bangladesh because we give our best
care!!
          </p>
        </div>

      </div>
    </div>
  );
};

export default PopularServices;
