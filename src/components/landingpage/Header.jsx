import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/banner.png";
import './Header.css'

const Header = () => {
  const navigate =useNavigate()
  return (


      <div
        className="bg-headerGreen  py-6 px-4 lg:px-28"
      
      >
        
        <div  className=" flex flex-col items-center pt-8 md:pt-16 lg:pt-12  header" 
        > 
        
        <p className="text-headerText font-sans text-2xl lg:text-4xl text-center font-normal leading-10">
          {" "}
          WE TAKE CARE
        </p>
        <p className="text-headerText font-sans text-2xl lg:text-4xl text-center font-normal leading-10">
          {" "}
          OF YOUR HEALTH
        </p>

        <p className="text-headerText font-sans text-xs lg:text-base lg:pt-4 text-center font-normal leading-10">
          Health is wealth for Life
        </p>
        {/* <img src={image} alt="" /> */}
        <button onClick={()=>navigate('/services')} className="bg-buttoncolor text-xs lg:text-base  text-white font-sans lg:w-44 p-2 rounded-lg">
          Learn more about us
        </button>
        </div>
        {/* <img src={image} style={{border:"1px solid red"}}></img> */}
      </div>
  
  );
};

export default Header;
