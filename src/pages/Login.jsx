import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import { login } from '../lib/api/login'




const LoginForm = () => {
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const navigate=useNavigate()
    
    const setValue = () => {
		const input ={email:email,name:username}
        login(input).then((res)=>{console.log(res.data);localStorage.setItem('access_token',res.data.token)})

        localStorage.setItem('username',username)
        navigate(-1)
        window.location.reload(true)
	}
    
   
  
  return (
   


<>
<Navbar />
<div className=" flex justify-center">
<div className="border-4 border-blue pt-44 lg:w-1/3 w-2/3">
     <div className='bg-buttoncolor py-4 '>
     <h3 className="font-medium text-2xl text-center text-white font-sans">Login</h3>
     </div>
    
    <div className='px-4'>
    <div className="form-control w-full ">
   <label className="label">
     <span className="text-black font-meduim text-base">Email Addess</span>
   
   </label>
   <input type="email" required  placeholder="Type here"  value={email} onChange={(e)=>setEmail(e.target.value)}    className="bg-gray-50 border-[2px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
   <label className="label">
     <span className="text-black font-meduim text-base">Your User name</span>
   
   </label>
   <input type="text"  required placeholder="Type here"  value={username} onChange={(e)=>setUsername(e.target.value)}    className="bg-gray-50 border-[2px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
 </div>
    </div>
     <div className=" flex justify-center py-12">
      <label
      for="my-"
      onClick={setValue}
      className="btn bg-buttoncolor text-white"
    >
     Login
    </ label>
     </div>
   </div>

</div>
</>


  
  )
}

export default LoginForm