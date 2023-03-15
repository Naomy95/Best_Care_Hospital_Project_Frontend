import React from 'react'
import HeaderText from '../text/HeaderText'
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import work4 from "../../assets/images/work4.png";
import work5 from "../../assets/images/work5.png";

const Carousel = () => {
  return (
    <div>
      <HeaderText text="Our workspace"/>
    
        <div className="carousel w-full pt-6">
  <div id="item1" className="carousel-item w-full hidden lg:grid grid-cols-3 gap-4">
    <img src={work1} className="w-full" />
    <img src={work2} className="w-full" />
    <img src={work3} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item hidden w-full lg:grid grid-cols-3 gap-4">
    <img src={work4} className="w-full" />
    <img src={work5} className="w-full" />
  </div> 

  <div id="item1mb" className="carousel-item w-full lg:hidden gap-4">
    <img src={work1} className="w-full" />
    </div> 
  <div id="item2mb" className="carousel-item w-full lg:hidden gap-4">
    <img src={work2} className="w-full" />
    </div> 
  <div id="item3" className="carousel-item w-full lg:hidden gap-4">
    <img src={work3} className="w-full" />
    </div> 
  <div id="item4" className="carousel-item w-full lg:hidden gap-4">
    <img src={work4} className="w-full" />
    </div> 
  <div id="item5" className="carousel-item w-full lg:hidden gap-4">
    <img src={work5} className="w-full" />
    </div>

 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="lg:btn btn-xs hidden bg-buttoncolor">.</a> 
  <a href="#item2" className="lg:btn btn-xs hidden">.</a> 
  <a href="#item1mb" className="btn btn-xs lg:hidden">.</a> 
  <a href="#item2mb" className="btn btn-xs lg:hidden">.</a> 
  <a href="#item3" className="btn btn-xs lg:hidden">.</a> 
  <a href="#item4" className="btn btn-xs lg:hidden">.</a> 
  <a href="#item5" className="btn btn-xs lg:hidden">.</a> 
 
 
</div>
    </div>
  )
}

export default Carousel