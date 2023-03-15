import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

const BlogDetailCard = ({category,title,header_image,author,date,description,body}) => {
  return (
 <>
 

 <div className='bg-white'>
          <p className="text-text lg:pb-12 pb-4 text-sm lg:text-base font-sans font-medium leading-10 text-start">
      {category}
      </p>
      <p className="text-headerText text-2xl lg:text-4xl font-sans font-medium leading-10 text-start">
       {title}
      </p>
      <p className='text-sm text-black font-sans pt-4'>by {author} posted at {date}</p>
      <div className=' lg:w-[600px] lg:h-[400px] w-full h-[180px] my-10'><img style={{width:"100%",height:"100%", objectFit:"cover"}} src={header_image} alt="" /></div>
      <p className='text-lg text-black font-sans font-normal text-justify leading-10 py-10'>{description}</p>
      {
        body.map((item,id)=>(
            <div className='mb-6'>
                 <p className="text-headerText text-2xl lg:text-3xl font-sans font-medium leading-10 text-start">
       {item.title}
      </p>
      <div className=' lg:w-[500px] lg:h-[300px] w-full h-[180px] my-8'><img  src={item.image} style={{width:"100%",height:"100%", objectFit:"cover"}} alt="" /></div>
      <p className='text-lg text-black font-sans font-normal text-justify leading-10 py-10'>{item.description}</p>
   
            </div>
        ))
      }
    </div>
   
 </>
  )
}

export default BlogDetailCard