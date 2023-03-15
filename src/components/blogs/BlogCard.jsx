import React from 'react'
import comment from '../../assets/images/comment.png'
import work1 from "../../assets/images/work1.png";

const BlogCard = ({headertext,text,date,commentNo,image,onClick}) => {
  return (
    <div className='bg-white lg:grid lg:grid-cols-2 mb-44 lg:mb-0 ' onClick={onClick}>
        <div>
        <p className="text-text lg:pb-8 pb-4 text-sm lg:text-base font-sans font-medium leading-10 text-start pt-8">
        {headertext}
      </p>
      <p className="text-headerText text-3xl font-sans font-medium leading-10 text-start ">
        {text}
      </p>
      <div className='pt-14 flex'>
        <p>{date}</p>
        <div className='flex px-12'>
            <img src={comment} alt="" />
            <p>{commentNo}</p>
        </div>
        
      </div>
        </div>
        <div className='lg:w-[400px] lg:h-[300px] w-full h-[180px] lg:flex lg:justify-self-end pt-8 lg:pt-0 '><img src={image} alt="" /></div>
    </div>
  )
}

export default BlogCard