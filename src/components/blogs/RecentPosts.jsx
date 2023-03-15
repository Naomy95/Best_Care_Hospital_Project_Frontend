import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getBlogs } from '../../lib/api/blogs'
import RecentPostCard from './RecentPostCard'

const RecentPosts = () => {
    const navigate = useNavigate()
    const {
      data: blogs,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ['blogs'],
      queryFn: () => getBlogs(),
    })
    if (isError) return <div>Error</div>;
    if (isLoading) return <div>Loading</div>;
    let recentpost1=blogs[blogs.length-1]
    let recentpost2=blogs[blogs.length-2]
  return (
    <div className='lg:flex'>
        <RecentPostCard category={recentpost1.category} title={recentpost1.title} image={recentpost1.header_image} date={recentpost1.date.toString().split("T")[0]} onClick={()=>{navigate(`/blogs/${recentpost1._id}`);location.reload()}} />
        <RecentPostCard category={recentpost2.category} title={recentpost2.title} image={recentpost2.header_image} date={recentpost2.date.toString().split("T")[0]} onClick={()=>{navigate(`/blogs/${recentpost2._id}`);location.reload()}}/>
        
    </div>
  )
}

export default RecentPosts