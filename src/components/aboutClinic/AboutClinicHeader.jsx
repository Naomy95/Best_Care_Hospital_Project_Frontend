import React from "react";
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.3.png";
import work4 from "../../assets/images/work4.png";
import work5 from "../../assets/images/work5.png";
import HeaderText from "../text/HeaderText";

const AboutClinicHeader = () => {
  return (
    <div className="py-10 px-4 lg:px-28">
      <HeaderText headertext="About Clinic" text="We are a recognized leader in Hi-Tech
health services" />
      <div className="bg-white grid grid-cols-1 lg:grid-cols-7  py-10 gap-2">
        <div>
          <img src={work4} className="w-full lg:h-1/3" alt="" />
        </div>

        <div className="lg:col-span-3">
          <img className=" lg:h-2/3 w-full" src={work5} alt="" />
        </div>

        <div className="lg:col-span-2">
          <img src={work1} className="mb-4 lg:h-1/3 w-full" alt="" />
          <img src={work2} alt="" />
        </div>
        <div>
          <img className="w-full" src={work3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutClinicHeader;
