import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getSpecificBlog, getSpecificBlogComments } from '../../lib/api/blogs';
import review from "../../assets/images/review.png";

const BlogComments = () => {
    const { blogID } = useParams();
    const {
        data: blog,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ["comment"],
        queryFn: () => getSpecificBlog(blogID),
      });
      if (isError) return <div>Error</div>;
      if (isLoading) return <div>Loading</div>;
      // comments.map((comment)=>console.log(comment.name))
 
      const comments=blog.comments
      console.log(comments);
  return (
    <div>
            <p className="text-headerText text-4xl pt-20 font-sans font-medium leading-10 text-start">{blog.comments.length} Comments </p>
         {
            comments.slice(-3, comments.length).map((comment,id)=>(
                <div className='mt-4 '>
                  <div className='pt-4 text-justify font-sans leading-6 flex'>
                   
                    
                        <img src={review} width="40px" height="40px" alt="" />
                        <p className='text-lg text-violet font-semibold font-sans ml-6 pt-2'>{comment.name} <span className='text-sm pl-10 text-commentcolor'> {comment.date}</span>  </p>
                        </div>
                       <div className='ml-16 mt-6 p-4  bg-boxcolor rounded-lg'>
                       <p className='text-base font-sans'>{comment.message}</p>
                       </div>
              
                        
                        </div>
                    
            

            ))
         }
    </div>
  )
}

export default BlogComments