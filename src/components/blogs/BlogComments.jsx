import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom';
import { getSpecificBlogComments } from '../../lib/api/blogs';
import review from "../../assets/images/review.png";

const BlogComments = ({uid}) => {
    const { blogID } = useParams();
    const {
        data: comments,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ["comment"],
        queryFn: () => getSpecificBlogComments(blogID),
      });
      if (isError) return <div>Error</div>;
      if (isLoading) return <div>Loading</div>;
      comments.map((comment)=>console.log(comment.name))
    //   console.log(comments.comments[0]);
  return (
    <div>
         {
            comments.slice(-3, comments.length).map((comment,id)=>(
                <div className='mt-4 pl-10'>
                    <p className='text-sm text-black'>by {comment.name}</p>
                    <div className='w-full p-4 text-justify font-sans leading-6 flex'>
                        <img src={review} width="50px" height="50px" alt="" />
                        <p className='text-base pl-4'>{comment.message}</p></div>
                    
                </div>

            ))
         }
    </div>
  )
}

export default BlogComments