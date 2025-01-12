import React from "react";
import BlogCard from "../components/blogs/BlogCard";
import work1 from '../assets/images/work1.png'
import neorology from '../assets/images/neorology.jpg'
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Header from "../components/landingpage/Header";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../lib/api/blogs";

const Blogs = () => {
  const navigate = useNavigate()
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => getBlogs(),
  })
  
  if (isError) return <div>Error</div>
  if (isLoading) return <div>Loading</div>
  console.log(blogs)

  
  console.log(blogs)
  return (
    <>
    <Navbar />
    <div className="px-4 py-10 lg:px-28">
     
    
      {blogs.map((blog,id)=>(
         <div className="mb-10" key={id}>
        <BlogCard 
        headertext={blog.category}
        text={blog.title}
        date={blog.date.toString().split("T")[0]}
        commentNo={blog.comments.length}
        image={blog.header_image}
        onClick={()=>navigate(`/blogs/${blog._id}`)}
        
        />
        </div>
      ))}
     
    </div>
    <Header />
    <Footer />
    </>
  );
};

export default Blogs;
