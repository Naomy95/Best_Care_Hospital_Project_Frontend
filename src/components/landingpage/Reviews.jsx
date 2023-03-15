import React from "react";
import image from "../../assets/images/Vector.v1.png";
import review from "../../assets/images/review.png";

const Reviews = () => {
  return (
    <div className="bg-buttoncolor py-12 px-4 lg:px-28 md:px-12">
      <p className="text-white text-2xl lg:text-4xl font-sans font-medium leading-10 text-center">
        Don’t take our word for it...
      </p>
      <p className="text-white text-2xl lg:text-4xl font-sans font-medium leading-10 text-center">
        hear what our customers are saying
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 justify-items-center">
        <div>
        <div
          className="w-[260px] h-[260px] text-xl text-black flex justify-center px-4 items-center"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          Very Good Services
        </div>
        <div className="flex items-center px-4 py-3">
            <img src={review} width="50px" height="50px" alt="" />
            <p className="text-white font-sans px-2 font-medium text-lg">person 1</p>
        </div>
        </div>
        <div>
        <div
          className="w-[260px] h-[260px] text-xl text-black flex justify-center px-4 items-center"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          Very Good Services
        </div>
        <div className="flex items-center px-4 py-3">
            <img src={review} width="50px" height="50px" alt="" />
            <p className="text-white font-sans px-2 font-medium text-lg">person 1</p>
        </div>
        </div>
        <div>
        <div
          className="w-[260px] h-[260px] text-xl text-black flex justify-center px-4 items-center"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          Very Good Services
        </div>
        <div className="flex items-center px-4 py-3">
            <img src={review} width="50px" height="50px" alt="" />
            <p className="text-white font-sans px-2 font-medium text-lg">person 1</p>
        </div>
        </div>
        <div>
        <div
          className="w-[260px] h-[260px] text-xl text-black flex justify-center px-4 items-center"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          Very Good Services
        </div>
        <div className="flex items-center px-4 py-3">
            <img src={review} width="50px" height="50px" alt="" />
            <p className="text-white font-sans px-2 font-medium text-lg">person 1</p>
        </div>
        </div>

       
       
      </div>
    </div>
  );
};

export default Reviews;
