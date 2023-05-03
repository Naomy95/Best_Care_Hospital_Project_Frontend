import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogComments from "../components/blogs/BlogComments";
import BlogDetailCard from "../components/blogs/BlogDetailCard";
import PostComment from "../components/blogs/PostComment";
import RecentPosts from "../components/blogs/RecentPosts";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { getBlogs, getSpecificBlog } from "../lib/api/blogs";

const BlogDetail = () => {
  const { blogID } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: () => getSpecificBlog(blogID),
  });
  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  console.log(blog);
  return (
  <>
  <Navbar />
    <div className="bg-white grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-28 py-10">
   <div className="col-span-3">
   <BlogDetailCard
        category={blog.category}
        title={blog.title}
        header_image={blog.header_image}
        author={blog.author}
        date={blog.date.toString().split("T")[0]}
        description={blog.description}
        body={blog.body}
      />
      <p className="text-headerText text-4xl py-10 font-sans font-medium leading-10 text-start">Recent Posts </p>
      <RecentPosts />
      <BlogComments uid={blogID}/>
      <p className="text-headerText text-4xl pt-24 font-sans font-medium leading-10 text-start">Leave a reply </p>
      <p className="pt-4 text-xs font-sans">Your email adress will not be published. Required fields are marked*</p>
      <PostComment uid={blogID}/>
   </div>

   <div className="lg:pt-12 lg:px-10 pt-4 px-0">
            <p className="text-violet hover:text-buttoncolor text-sm lg:text-xl font-semibold text-start pt-2"> Cardiology</p>
            <p className="text-violet hover:text-buttoncolor text-sm lg:text-xl font-semibold text-start pt-2"> Pediatric</p>
            <p className="text-violet hover:text-buttoncolor text-sm lg:text-xl font-semibold text-start pt-2"> Dental</p>
            <p className="text-violet hover:text-buttoncolor text-sm lg:text-xl font-semibold text-start pt-2"> Gynecology</p>
        <p className="text-violet hover:text-buttoncolor text-sm lg:text-xl font-semibold text-start pt-2"> Neorology</p>
        
        <p className="text-violet hover:text-buttoncolor text-sm lg:text-xl font-semibold text-start pt-2"> Otorhinolaryngology</p>
        </div>
    </div>
  <Footer />
  </>
  );
};

export default BlogDetail;
