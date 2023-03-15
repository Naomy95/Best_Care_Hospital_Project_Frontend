import React from "react";
import line from '../../assets/images/line.png'

const RecentPostCard = ({ image,category,title,date,onClick }) => {
  return (
    <div onClick={onClick} className="border-[3px] border-hoverBackground lg:w-[350px] h-[400px] w-full mb-10 lg:mb-0 mr-0 lg:mr-8 ">
      <div className=" h-1/2">
        <img
          src={image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="px-2 py-4  h-1/2">
     <div className="h-5/6">
     <p className="text-text pb-4 text-sm  font-sans font-medium  text-start">
      {category}
      </p>
      <p className="text-headerText text-xl font-sans font-medium leading-10 text-start">
       {title}
      </p>
     </div>
     <div >
     <img src={line} alt="" />
      <p className="text-black font-normal text-xs pt-2">{date}</p>
     </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
